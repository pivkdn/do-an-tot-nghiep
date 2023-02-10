import { all } from 'redux-saga/effects';
import { watchCallLogin } from './login'

export default function* rootSaga() {
    yield all([
        watchCallLogin()
    ]);
}