import { product } from "./actionTypes";

const initialState = {
  product: {},
  isFetching: false,
  error: "",
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case product.SET_PRODUCT_ID:
      return {
        ...state,
        product: action.data,
        isFetching: false,
      };
    case product.FETCH_PRODUCT_ID:
      return {
        ...state,
        isFetching: true,
      };
    case product.ERROR_DATA:
      return {
        ...state,
        ...action.error,
        isFetching: false,
      };
    default:
      return { ...state };
  }
};
export default productReducer;
