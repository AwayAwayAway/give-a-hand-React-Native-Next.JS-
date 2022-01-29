import {call, put, takeLatest, select} from 'redux-saga/effects';
import {topicsAction} from "./topic-slice";
import {topicService} from "./topic-service";

function* getTopicList(action: { payload: { type: string } }) {
  try {
    yield put(topicsAction.setIsLoading(true));
    // @ts-ignore
    const response = yield call(topicService.getTopicList, action.payload.type);
    console.log(response.data);
    yield put(topicsAction.setIsLoading(false));
  } catch (e) {
    console.log(e);
    yield put(topicsAction.setIsLoading(false));
  }
}

function* topicSaga() {
  yield takeLatest(topicsAction.getTopicList, getTopicList);
}

export default topicSaga;