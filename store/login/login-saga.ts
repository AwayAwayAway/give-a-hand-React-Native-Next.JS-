import {LoginModel} from "../../shared/models/login/login-model";
import {call, put, takeLatest, select} from 'redux-saga/effects';
import {loginActions} from "./login-slice";
import {loginService} from "./login-service";
import {exceptionActions} from "../exception/exception-slice";
import * as SecureStore from 'expo-secure-store';

function* login(action: { payload: { user: LoginModel, type: string } }) {
  try {
    yield put(loginActions.setIsLoading(true));
    // @ts-ignore
    const response = yield call(loginService.login, action.payload.user, action.payload.type);
    yield SecureStore.setItemAsync('isLogged', 'true').then(() => {});
    // SecureStore.setItemAsync('token', response).then(res => console.log(res));
    yield put(loginActions.setIsLoading(false));
    yield put(exceptionActions.setStatus('success'));
  } catch (e) {
    yield put(exceptionActions.setStatus('reject'));
  }
}

function* loginSaga() {
  yield takeLatest(loginActions.login, login);
}

export default loginSaga;