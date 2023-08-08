import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/products-reducer";
import cartReducer from "./cart/cart-reducer";
import filtersReducer from "./filters/filters-reducer";
import brandReducer from "./brand/brand-reducer";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    filter: filtersReducer,
    brand: brandReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
