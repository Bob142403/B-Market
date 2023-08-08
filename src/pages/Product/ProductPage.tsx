import { Breadcrumb, Carousel, Rate, Typography, message } from "antd";
import { Link } from "react-router-dom";

import useGetProductById from "@/hooks/api/product/use-get-product-by-id";
import useGetProductId from "@/hooks/params/use-get-product-id";
import useAddProductToCart from "@/hooks/cart/use-add-product-to-cart";
import { useCallback } from "react";

const { Title } = Typography;
const DEFAULT_QUANTITY = 1;

function ProductPage() {
  const productId = useGetProductId();
  const [messageApi, contextHolder] = message.useMessage();

  const { data: product } = useGetProductById(productId);
  const addProductToCart = useAddProductToCart(messageApi);

  const hadleAddCart = useCallback(() => {
    addProductToCart({
      ...product,
      id: product.id,
      quantity: DEFAULT_QUANTITY,
      maxCount: product.stock,
    });
  }, [addProductToCart, product]);

  return (
    <>
      {contextHolder}
      <Breadcrumb
        items={[
          {
            title: <Link to={"/"}>Home</Link>,
          },
          {
            title: `${product?.title}`,
          },
        ]}
      />
      {product ? (
        <div className="flex justify-around mt-2">
          <div className="w-3/6">
            <Carousel autoplay dotPosition="top">
              {product.images &&
                product.images.map((image: string) => (
                  <div key={image}>
                    <img
                      alt="example"
                      className="h-[600px] w-full"
                      src={image}
                    />
                  </div>
                ))}
            </Carousel>
          </div>
          <div className="ml-10">
            <div>
              <Title level={2}>{product.title}</Title>
              <Title level={5}>Description: {product.description}</Title>
              <Title level={5}>Brand: {product.brand}</Title>
              <Title level={5}>Category: {product.category}</Title>

              <Rate disabled allowHalf defaultValue={product.rating} />

              <div className="flex items-center mt-5">
                <Title level={5}>Price: {product.price}$</Title>
                <button
                  type="button"
                  onClick={hadleAddCart}
                  className="ml-5 bg-white hover:bg-slate-100 focus:outline-none focus:ring focus:ring-slate-200 active:bg-slate-300 px-5 py-2 text-sm leading-5 rounded-xl font-semibold text-black"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ProductPage;
