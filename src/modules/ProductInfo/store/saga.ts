import { getProductById } from "./api";
import { IProduct, IProductResponse } from "./types";
import {
  all,
  AllEffect,
  call,
  ForkEffect,
  put,
  takeLatest,
} from "redux-saga/effects";
import { product } from "./actionTypes";

function* fetchDataById({id}:any) {
  
  try {
    const response: IProductResponse = yield call(getProductById, id);
    yield put({
      type: product.SET_PRODUCT_ID,
      data: response.data,
    });
  } catch (error) {}
}
export default function* productSagaD(): Generator<
  AllEffect<ForkEffect<never>>,
  void,
  unknown
> {
  yield all([takeLatest(product.FETCH_PRODUCT_ID, fetchDataById)]);
}

