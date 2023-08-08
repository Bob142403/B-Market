import { useParams } from "react-router-dom";

function useGetProductId() {
  const { productId } = useParams();

  if (!productId) {
    throw Error("Error");
  }

  return +productId;
}

export default useGetProductId;
