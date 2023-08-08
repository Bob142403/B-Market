import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const productSilce = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, payload) {
      state.products = payload.payload;
    },
  },
});

export const { setProducts } = productSilce.actions;

export default productSilce.reducer;
