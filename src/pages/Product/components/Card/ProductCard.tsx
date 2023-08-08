import { Button, Typography, Card, Rate, message } from "antd";
import { Product } from "../../../../types/Product";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../store/cart/cart-reducer";
import { checkProductInCart } from "../../../../store/cart/cart-selector";

const { Text } = Typography;
const { Meta } = Card;

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkProduct = useSelector(checkProductInCart(product.id));
  const title = product.title[0].toUpperCase() + product.title.slice(1);
  const description =
    product.description.length > 50
      ? product.description.substr(0, 50) + "..."
      : product.description;

  function handleClick() {
    navigate(`/${product.id}`);
  }

  function addCart(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    event.stopPropagation();
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
      <Card
        hoverable
        onClick={handleClick}
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
            <Button type="dashed" onClick={(event) => addCart(event)}>
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
