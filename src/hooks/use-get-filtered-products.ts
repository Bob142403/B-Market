import { useSelector } from "react-redux";
import useGetProducts from "./api/product/use-get-products";
import { useMemo } from "react";
import {
  getSelectedCategories,
  getSelectedBrands,
  getMinPrice,
  getMaxPrice,
} from "../store/filters/filters-selector";
import { Product } from "../types/Product";

function useGetFilteredProducts() {
  const products = useGetProducts();
  const selectedCategories = useSelector(getSelectedCategories);
  const selectedBrands = useSelector(getSelectedBrands);
  const minPrice = useSelector(getMinPrice);
  const maxPrice = useSelector(getMaxPrice);

  const getFilteredProducts = () =>
    products.data?.filter((product: Product) => {
      return (
        (selectedCategories.length
          ? selectedCategories.includes(product.category)
          : true) &&
        product.price >= minPrice &&
        product.price <= maxPrice &&
        (selectedBrands.length ? selectedBrands.includes(product.brand) : true)
      );
    });

  return useMemo(getFilteredProducts, [
    maxPrice,
    minPrice,
    products.data,
    selectedBrands,
    selectedCategories,
  ]);
}

export default useGetFilteredProducts;
