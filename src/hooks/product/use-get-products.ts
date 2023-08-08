import { useQuery } from "react-query";
import productApi from "../../api/product";
import { useDispatch } from "react-redux";
import { setProducts } from "../../store/products/products-reducer";
import { Product } from "../../types/Product";
import { setAllBrands } from "../../store/brand/brand-reducer";

function useGetProducts() {
  const dispatch = useDispatch();

  return useQuery("get-products", productApi.getProducts, {
    onSuccess(data) {
      const brands = data.map((product: Product) => product.brand);
      dispatch(setAllBrands(Array.from(new Set(brands))));
      dispatch(setProducts(data));
    },
  });
}

export default useGetProducts;
