import { products } from "./actionTypes";

export const setProducts = (data: any) => ({
  type: products.SET_PRODUCTS,
  data,
});
export const fetchProducts = () => ({
  type: products.FETCH_PRODUCTS,
});
export const setCart = (data:any) =>({
  type: products.SET_CART,
  data,
})
export const deleteCartItem = (id:any) =>({
  type:products.DELETE_CART_ITEM,
  id,
})
export const errorData = (error: any) => ({ type: products.ERROR_DATA, error });
