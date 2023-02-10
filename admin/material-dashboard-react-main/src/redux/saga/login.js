
import { call, put, takeEvery } from 'redux-saga/effects'; 
import { FAILURE,FETCH,SUCCESS,LOGOUT } from '../actions/Login';
import { loginApi } from '../api/Login'
function* callLogin(action) {
    try {
        const user = yield call(loginApi,action)
        let sResult = user.data
        if(user) {
            yield put({type: SUCCESS,sResult})
        }
    } catch (error) {
        yield put({type: FAILURE,error})
    }
}

export function* watchCallLogin() {
    yield takeEvery(FETCH, callLogin);
}