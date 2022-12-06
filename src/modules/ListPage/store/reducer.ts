import { products } from "./actionTypes";

const initialState = {
  products: [],
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
    default:
      return { ...state };
  }
};
export default productsReducer;
