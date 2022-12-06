import { product } from "./actionTypes";

export const setProducts = (data: any) => ({
  type: product.SET_PRODUCT_ID,
  data,
});
export const fetchProduct = (id:any) => ({
  type: product.FETCH_PRODUCT_ID,
  id
});
export const errorData = (error: any) => ({ type: product.ERROR_DATA, error });
