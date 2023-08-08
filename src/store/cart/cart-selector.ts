import Cart from "../../types/Cart";
import { RootState } from "../store";

export const getCart = (state: RootState) => state.cart.cart;

export const checkProductInCart = (productId: number) => (state: RootState) =>
  state.cart.cart.find((cart: Cart) => cart.id === productId);
