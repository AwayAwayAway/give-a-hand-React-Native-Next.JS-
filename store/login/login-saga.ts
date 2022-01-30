import {LoginModel} from "../../shared/models/login/login-model";
import {call, put, takeLatest, select} from 'redux-saga/effects';
import {loginActions} from "./login-slice";
import {loginService} from "./login-service";
import {exceptionActions} from "../exception/exception-slice";
import * as SecureStore from 'expo-secure-store';
import {ExceptionUtils} from "../../shared/utils/exception/exception-util";
import jwt_decode from "jwt-decode";
import {userActions} from "../user/user-slice";
import {UserModel} from "../../shared/models/user/user-model";

function* login(action: { payload: { user: LoginModel, type: string } }) {
  try {
    yield put(loginActions.setIsLoading(true));
    // @ts-ignore
    const response = yield call(loginService.login, action.payload.user, action.payload.type);

    if (action.payload.type === 'signIn') {
      yield SecureStore.setItemAsync('isLogged', 'true').then(() => {});
      const token: UserModel = jwt_decode(response.data.token);
      yield put(userActions.setUser({
        email: token.email,
        firstName: token.firstName,
        lastName: token.lastName,
        roles: token.roles,
        id: token.id
      }))
      // yield SecureStore.setItemAsync('token', response).then(() => {});
    }

    if (action.payload.type === 'signUp') {
      yield put(exceptionActions.setResponseStatus({status: 'success', message: 'success', errorCode: '200'}));
    }

    yield put(loginActions.setIsLoading(false));
  } catch (e) {
    console.log(e);
    yield put(exceptionActions.setResponseStatus({
      status: 'reject',
      message: ExceptionUtils.setErrorMessage(e.message),
      errorCode: ''
    }));
    yield put(loginActions.setIsLoading(false));
  }
}

function* loginSaga() {
  yield takeLatest(loginActions.login, login);
}

export default loginSaga;