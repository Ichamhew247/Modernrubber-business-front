import axios from "./axios";

// export const uploadProduct = (input) =>
//   axios.patch("/product/uploadProduct", input);

export const fetchProduct = (input) => axios.get("/products/getProduct", input);

export const addProduct = (input) =>
  axios.post("/products/createProduct", input);

export const deleteProduct = (input) =>
  axios.delete(`/products/deleteProduct/${input.id}`);
export const editProduct = (input) =>
  axios.patch(`/products/editProduct/${input.id}`, input);
