import { useQuery } from "react-query";
import productApi from "@/api/product";

function useGetCategories() {
  return useQuery("get-catedories", productApi.getCategories);
}

export default useGetCategories;
