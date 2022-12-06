import { all, fork } from "redux-saga/effects";
import productSaga from "../modules/ListPage/store/saga";
import productSagaId from "../modules/ProductInfo/store/saga";

export function* rootSaga() {
    yield all ([
        fork(productSaga),
        fork(productSagaId)
    ])    
}