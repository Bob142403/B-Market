import { RootState } from "../store";

export const getSelectedCategories = (state: RootState) =>
  state.filter.selectedCategories;
export const getSelectedBrands = (state: RootState) =>
  state.filter.selectedBrands;

export const getMinPrice = (state: RootState) => state.filter.minPrice;
export const getMaxPrice = (state: RootState) => state.filter.maxPrice;
