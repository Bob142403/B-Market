import { request } from "./request";

const baseURL = "https://dummyjson.com/products";

const productApi = {
  getProducts: async () =>
    await request(baseURL + "?limit=100").then((res) => res.products),
  getProductById: async (id?: number | string) =>
    await request(baseURL + `/${id}`),
  getCategories: async () => await request(baseURL + "/categories"),
};

export default productApi;
