import { products } from "./actionTypes";

export const setProducts = (data: any) => ({
  type: products.SET_PRODUCTS,
  data,
});
export const fetchProducts = () => ({
  type: products.FETCH_PRODUCTS,
});
export const errorData = (error: any) => ({ type: products.ERROR_DATA, error });
