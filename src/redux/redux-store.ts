import  createSagaMiddleware  from 'redux-saga';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import productsReducer from '../modules/ListPage/store/reducer';
import { rootSaga } from './rootSaga';
import productReducer from '../modules/ProductInfo/store/reducer';

const sagaMiddlware = createSagaMiddleware();

const reducers = combineReducers ({
    product:productsReducer,
    productId:productReducer
})

const store = createStore(reducers, applyMiddleware(sagaMiddlware));

sagaMiddlware.run(rootSaga);

export type RootState = ReturnType<typeof reducers>

export default store;