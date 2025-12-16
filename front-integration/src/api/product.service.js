import clientAxios from "./clientAxios";

export const getProducts = () =>
  clientAxios.get("/products");

export const createProduct = (data) =>
  clientAxios.post("/products", data);
