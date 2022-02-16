import {LoginModel} from "../../shared/models/login/login-model";
import {call, put, takeLatest, select} from 'redux-saga/effects';
import {loginActions} from "./login-slice";
import {loginService} from "./login-service";
import {exceptionActions} from "../exception/exception-slice";
import {ExceptionUtils} from "../../shared/utils/exception/exception-util";
import jwt_decode from "jwt-decode";
import {userActions} from "../user/user-slice";
import {UserModel} from "../../shared/models/user/user-model";
import AsyncStorage from '@react-native-async-storage/async-storage';

function* login(action: { payload: { user: LoginModel, type: string } }) {
  try {
    yield put(loginActions.setIsLoading(true));
    // @ts-ignore
    const response = yield call(loginService.login, action.payload.user, action.payload.type);

    if (action.payload.type === 'signIn') {
      yield AsyncStorage.setItem('isLogged', 'true');
      const token: UserModel = jwt_decode(response.data.token);
      yield put(userActions.setUser({
        email: token.email,
        firstName: token.firstName,
        lastName: token.lastName,
        roles: token.roles,
        id: token.id
      }))
      yield AsyncStorage.setItem('token', JSON.stringify(response));
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