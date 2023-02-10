import { put, takeEvery, call } from 'redux-saga/effects'
import actionOrder from '../actions/Order';


function* addProduct(action) {
    let body = {
        item: action.item,
        role: 'add'
    }
    yield put({type: actionOrder.BAG,body})
}
function* resetProduct() {
    let body = {
        item: [],
        role: 'reset'
    }
    yield put({type: actionOrder.BAG,body})
}
function* remoteProduct(action) {
    let body = {
        item: action.item,
        role: 'remove'
    }
    yield put({type: actionOrder.BAG, body})
}

export function* watchAddProduct() {
    yield takeEvery(actionOrder.ADD,addProduct)
}
export function* watchResetProduct() {
    yield takeEvery(actionOrder.ALL,resetProduct)
}
export function* watchRemoveProduct() {
    yield takeEvery(actionOrder.REMOVE,remoteProduct)
}