import { put, takeEvery, call } from 'redux-saga/effects'
import actionLogin from '../actions/Login';
import { loginApi } from '../apis/login'
function* fetchApi(action) {
    try {
        const sResult = yield call(loginApi,action)
        if(sResult.data.success) {
            let user = sResult.data.user
            yield put({type: actionLogin.SUCCESS,user})
        } else {
            yield put({type: actionLogin.FAILURE})
        }
    } catch (error) {
        yield put({type: actionLogin.FAILURE, error})
    }
}

function* logoutUser() {
    try {
        yield put({type: actionLogin.FAILURE})
    } catch (error) {
        yield put({type: actionLogin.FAILURE})
    }
}
export function* watchLogout() {
    yield takeEvery(actionLogin.LOGOUT,logoutUser)
}
export function* watchFetchLoginApi() {
    yield takeEvery(actionLogin.FETCH,fetchApi)
}