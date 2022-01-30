import {call, put, takeLatest, select} from 'redux-saga/effects';
import {topicsAction} from "./topic-slice";
import {topicService} from "./topic-service";
import {TopicsModel} from "../../shared/models/topics/topics-model";
import {exceptionActions} from "../exception/exception-slice";

function* getTopicList(action: { payload: { type: string } }) {
  try {
    yield put(topicsAction.setIsLoading(true));
    // @ts-ignore
    const response = yield call(topicService.getTopicList, action.payload.type);

    switch (action.payload.type) {
      case 'fe':
        yield put(topicsAction.setFrontList(response.data));
        break;
      case 'be':
        yield put(topicsAction.setBackList(response.data));
        break;
      case 'dev':
        yield put(topicsAction.setDevList(response.data));
        break;
      case 'ui':
        yield put(topicsAction.setUiList(response.data));
        break;
    }

    yield put(topicsAction.setIsLoading(false));
  } catch (e) {
    console.log(e);
    yield put(topicsAction.setIsLoading(false));
  }
}

function* sendTopic(action: { payload: { topic: TopicsModel, type: string } }) {
  try {
    yield put(topicsAction.setIsLoading(true));
    // @ts-ignore
    yield call(topicService.sendTopic, action.payload.topic, action.payload.type);
    yield put(exceptionActions.setResponseStatus({status: 'success', message: 'success', errorCode: '200'}));
    yield put(topicsAction.setIsLoading(false));
  } catch (e) {
    yield put(exceptionActions.setResponseStatus({status: 'reject', message: 'Something wrong', errorCode: '500'}));
    yield put(topicsAction.setIsLoading(false));
  }
}

function* topicSaga() {
  yield takeLatest(topicsAction.getTopicList, getTopicList);
  yield takeLatest(topicsAction.sendTopic, sendTopic);
}

export default topicSaga;