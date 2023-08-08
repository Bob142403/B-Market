import { useDispatch } from "react-redux";
import { CartProduct } from "@/types/Cart";
import { addToCart } from "@/store/cart/cart-reducer";
import { MessageInstance } from "antd/es/message/interface";

function useAddProductToCart(messageApi: MessageInstance) {
  const dispatch = useDispatch();

  return (cart: CartProduct) => {
    dispatch(addToCart(cart));
    messageApi.success({
      content: `${cart.title} has been added to Cart`,
    });
  };
}

export default useAddProductToCart;
