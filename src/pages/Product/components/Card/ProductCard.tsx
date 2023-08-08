import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Typography, Card, Rate, message } from "antd";

import { Product } from "@/types/Product";
import { useNavigate } from "react-router-dom";
import useAddProductToCart from "@/hooks/cart/use-add-product-to-cart";
import { useCallback } from "react";

const { Text } = Typography;
const { Meta } = Card;

interface ProductCardProps {
  product: Product;
}

const DEFAULT_QUANTITY = 1;

function ProductCard({ product }: ProductCardProps) {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const addProductToCart = useAddProductToCart(messageApi);

  const title = product.title[0].toUpperCase() + product.title.slice(1);
  const description =
    product.description.length > 50
      ? product.description.substr(0, 50) + "..."
      : product.description;

  const handleProductClick = useCallback(() => {
    navigate(`/${product.id}`);
  }, [navigate, product.id]);

  const handleAddCart = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event.stopPropagation();

      addProductToCart({
        ...product,
        id: product.id,
        quantity: DEFAULT_QUANTITY,
        maxCount: product.stock,
      });
    },
    [addProductToCart, product]
  );
  return (
    <>
      {contextHolder}
      <Card
        hoverable
        onClick={handleProductClick}
        className="w-[360px] h-[440px]"
        cover={
          <img className="h-[260px]" alt="example" src={product.images[0]} />
        }
      >
        <div className="flex flex-col">
          <Meta title={title} description={description} />
          <div>
            <Rate disabled allowHalf defaultValue={product.rating} />{" "}
            {product.rating}
          </div>
          <div className="mt-2 flex items-center justify-between">
            <Text strong>Price: {product.price}$</Text>
            <Button type="dashed" onClick={handleAddCart}>
              <div className="flex items-center justify-between">
                <ShoppingCartOutlined className="mr-2" />
                Add to Cart
              </div>
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProductCard;
