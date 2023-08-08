import { RootState } from "../store";

export const getBrands = (state: RootState) => state.brand.brands;
