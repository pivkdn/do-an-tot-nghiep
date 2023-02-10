import { all } from 'redux-saga/effects'
import { watchFetchLoginApi,watchLogout } from './login'

import { watchAddProduct,watchRemoveProduct, watchResetProduct } from './order'
export default function* rootSaga() {
    yield all([
        watchFetchLoginApi(),
        watchLogout(),
        watchAddProduct(),
        watchRemoveProduct(),
        watchResetProduct()
    ])
}