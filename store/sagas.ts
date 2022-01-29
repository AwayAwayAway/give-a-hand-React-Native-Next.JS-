import {all} from 'redux-saga/effects';
import loginSaga from "./login/login-saga";
import topicSaga from "./topics/topic-saga";


function* sagas() {
  yield all([loginSaga(), topicSaga()]);
}

export default sagas;