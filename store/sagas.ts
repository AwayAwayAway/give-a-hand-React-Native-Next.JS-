import {all} from 'redux-saga/effects';
import loginSaga from "./login/login-saga";


function* sagas() {
  yield all([loginSaga()]);
}

export default sagas;