import { createSlice } from "@reduxjs/toolkit";
import Cart from "../../types/Cart";

interface CartState {
  cart: Cart[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, payload) {
      state.cart = payload.payload;
    },
    addToCart(state, payload) {
      state.cart = [...state.cart, payload.payload];
    },
    deleteFromCart(state, payload) {
      state.cart = state.cart.filter(
        (product) => product.id !== payload.payload
      );
    },
    setQuantityById(state, payload) {
      state.cart = state.cart.map((product) => {
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
