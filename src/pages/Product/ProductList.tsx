import { Col, Row, Spin } from "antd";

import ProductCard from "./components/Card/ProductCard";
import { Product } from "@/types/Product";
import FilterProduct from "./components/Filter/ProductFilters";
import useGetFilteredProducts from "@/hooks/use-get-filtered-products";

function ProductList() {
  const products = useGetFilteredProducts();

  return (
    <>
      <div className="flex">
        <FilterProduct />
        {!products ? (
          <Spin size="large" className="mx-auto" />
        ) : (
          <Row justify="center" gutter={[24, 24]} className="w-5/6">
            {products.map((product: Product) => {
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
