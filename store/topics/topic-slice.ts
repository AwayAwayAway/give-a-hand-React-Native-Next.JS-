import {createSlice} from "@reduxjs/toolkit";
import {TopicsModel} from "../../shared/models/topics/topics-model";
import {initialValues} from "../../shared/values/topic/initial-values";

type AppStateType = {
  frontTopicList: TopicsModel[];
  backTopicList: TopicsModel[];
  uiTopicList: TopicsModel[];
  devTopicList: TopicsModel[];
  currentTopic: TopicsModel;
  userTopic: TopicsModel;
  userTopicList: TopicsModel[];
  isLoading: boolean;
}

const initialState: AppStateType = {
  frontTopicList: [],
  backTopicList: [],
  uiTopicList: [],
  devTopicList: [],
  currentTopic: initialValues,
  userTopic: initialValues,
  userTopicList: [],
  isLoading: false,
}

const topicSlice = createSlice({
  initialState: initialState,
  name: 'topics',
  reducers: {
    getTopicList(state, action: { payload: { type: string } }) {},
    getUserTopicList(state, action: { payload: { authorId: number | null } }) {},
    getTopicById(state, action: { payload: { id: number } }) {},
    sendTopic(state, action: { payload: { topic: TopicsModel, type: string, id: string } }) {},
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setFrontList(state, action) {
      state.frontTopicList = action.payload;
    },
    setBackList(state, action) {
      state.backTopicList = action.payload;
    },
    setUiList(state, action) {
      state.uiTopicList = action.payload;
    },
    setDevList(state, action) {
      state.devTopicList = action.payload;
    },
    setCurrentTopic(state, action) {
      state.currentTopic = action.payload;
    },
    setUserTopicList(state, action) {
      state.userTopicList = action.payload;
    },
    setUserTopic(state, action) {
      state.userTopic = action.payload;
    }
  }
});

export const topicsAction = topicSlice.actions;

export default topicSlice;