/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row, Spin } from "antd";
import useGetProducts from "../../hooks/product/use-get-products";
import ProductCard from "./components/Card/ProductCard";
import { Product } from "../../types/Product";
import FilterProduct from "./components/Filter/ProductFilters";
import { useSelector } from "react-redux";
import {
  getSelectedBrands,
  getSelectedCategories,
  getMaxPrice,
  getMinPrice,
} from "../../store/filters/filters-selector";
import { useMemo } from "react";

function ProductList() {
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

  const filteresProducts = useMemo(getFilteredProducts, [
    maxPrice,
    minPrice,
    products.data,
    selectedBrands,
    selectedCategories,
  ]);

  return (
    <>
      <div className="flex">
        <FilterProduct />
        {!filteresProducts ? (
          <Spin size="large" className="mx-auto" />
        ) : (
          <Row justify="center" gutter={[24, 24]} className="w-5/6">
            {filteresProducts.map((product: Product) => {
              return (
                <Col key={product.id}>
                  <ProductCard product={product} />
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </>
  );
}

export default ProductList;
