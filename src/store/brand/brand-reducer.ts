import { createSlice } from "@reduxjs/toolkit";

interface BrandState {
  brands: string[];
}

const initialState: BrandState = {
  brands: [],
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setAllBrands(state, payload) {
      state.brands = payload.payload;
    },
  },
});

export const { setAllBrands } = brandSlice.actions;

export default brandSlice.reducer;
