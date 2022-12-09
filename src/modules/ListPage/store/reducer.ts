import Cart from "../../Cart/Cart";
import { products } from "./actionTypes";

const initialState = {
  products: [],
  cart: [],
  isFetching: false,
  error: "",
};

const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case products.SET_PRODUCTS:
      return {
        ...state,
        products: action.data,
        isFetching: false,
      };
    case products.FETCH_PRODUCTS:
      return {
        ...state,
        isFetching: true,
      };
    case products.ERROR_DATA:
      return {
        ...state,
        ...action.error,
        isFetching: false,
      };
    case products.DELETE_CART_ITEM:
      return {
        ...state,
        cart:[...state.cart.filter((el:any)=> el.id!=action.id)]
      };
    case products.SET_CART:
      let f = false;
      state.cart.map((i: any) => {
        if (i.id === action.data.id) f = true;
      });
      return {
        ...state,
        cart: f ? [...state.cart] : [...state.cart, action.data],
      };
    default:
      return { ...state };
  }
};
export default productsReducer;
