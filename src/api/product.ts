const baseURL = "https://dummyjson.com/products";

const productApi = {
  getProducts: async () =>
    await fetch(baseURL + "?limit=100")
      .then((res) => res.json())
      .then((res) => res.products),
  getProductById: async (id?: number | string) =>
    await fetch(baseURL + `/${id}`).then((res) => res.json()),
  getCategories: async () =>
    await fetch(baseURL + "/categories").then((res) => res.json()),
};

export default productApi;
