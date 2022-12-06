import { products } from "./actionTypes";
import { getProducts } from "./api";
import { IProduct, IProductResponse } from "./types";
import {
  all,
  AllEffect,
  call,
  ForkEffect,
  put,
  takeLatest,
} from "redux-saga/effects";
function* fetchData() {
  try {
    const response: IProductResponse = yield call(getProducts);
    yield put({
      type: products.SET_PRODUCTS,
      data: response.data,
    });
  } catch (error) {}
}
export default function* productSaga(): Generator<
  AllEffect<ForkEffect<never>>,
  void,
  unknown
> {
  yield all([takeLatest(products.FETCH_PRODUCTS, fetchData)]);
}
