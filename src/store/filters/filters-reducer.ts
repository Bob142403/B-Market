import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  selectedCategories: string[];
  selectedBrands: string[];
  minPrice: number;
  maxPrice: number;
}

const initialState: FilterState = {
  selectedCategories: [],
  selectedBrands: [],
  minPrice: 0,
  maxPrice: 100000,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectedCategories(state, payload) {
      state.selectedCategories = payload.payload;
    },
    setSelectedBrands(state, payload) {
      state.selectedBrands = payload.payload;
    },
    setMinPrice(state, payload) {
      state.minPrice = payload.payload;
    },
    setMaxPrice(state, payload) {
      state.maxPrice = payload.payload;
    },
  },
});

export const {
  setSelectedCategories,
  setSelectedBrands,
  setMaxPrice,
  setMinPrice,
} = filterSlice.actions;

export default filterSlice.reducer;
