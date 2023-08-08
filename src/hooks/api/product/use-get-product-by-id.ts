import { useQuery } from "react-query";
import productApi from "@/api/product";

function useGetProductById(id?: number | string) {
  return useQuery("get-product", () => productApi.getProductById(id));
}

export default useGetProductById;
