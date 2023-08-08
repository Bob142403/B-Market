import { useQuery } from "react-query";
import productApi from "../../api/product";

function useGetProductById(id?: number | string) {
  return useQuery(
    "get-product",
    async () => await productApi.getProductById(id)
  );
}

export default useGetProductById;
