import { Breadcrumb, Carousel, Rate, Typography, message } from "antd";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cart/cart-reducer";
import { checkProductInCart } from "../../store/cart/cart-selector";
import useGetProductById from "../../hooks/product/use-get-product-by-id";

const { Title } = Typography;

function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const { data: product } = useGetProductById(productId);
  const checkProduct = useSelector(checkProductInCart(+(productId || 0)));

  function addCart() {
    if (!checkProduct) {
      dispatch(
        addToCart({
          id: product.id,
          quantity: 1,
          title: product.title,
          price: product.price,
          maxCount: product.stock,
        })
      );
      messageApi.success({
        content: `${product.title} has been added to Cart`,
      });
    } else
      messageApi.warning({
        content: `${product.title} already exist  in Cart`,
      });
  }

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
                  onClick={addCart}
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
