import { createSelector } from "@reduxjs/toolkit";
import { CartProduct } from "../../types/Cart";
import { RootState } from "../store";

export const getProductsCart = (state: RootState) => state.cart.products;

export const checkProductInCart = (productId: number) =>
  createSelector(getProductsCart, (cart) =>
    cart.find((cart: CartProduct) => cart.id === productId)
  );
