import { createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "@/types/Cart";

interface CartState {
  products: CartProduct[];
}

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, payload) {
      state.products = payload.payload;
    },
    addToCart(state, { payload }) {
      const cartProducts = state.products.map((cart) =>
        cart.id === payload.id ? { ...cart, quantity: cart.quantity + 1 } : cart
      );
      const isCartProduct = cartProducts.find((cart) => cart.id === payload.id);

      state.products = isCartProduct
        ? cartProducts
        : [...cartProducts, payload];
    },
    deleteFromCart(state, payload) {
      state.products = state.products.filter(
        (product) => product.id !== payload.payload
      );
    },
    setQuantityById(state, payload) {
      state.products = state.products.map((product) => {
        if (product.id === payload.payload.id)
          return { ...product, quantity: payload.payload.value };
        else return product;
      });
    },
  },
});

export const { setCart, addToCart, deleteFromCart, setQuantityById } =
  cartSlice.actions;

export default cartSlice.reducer;
