import {createSlice} from "@reduxjs/toolkit";
import {TopicsModel} from "../../shared/models/topics/topics-model";

type AppStateType = {
  frontTopic: TopicsModel[];
  backTopic: TopicsModel[];
  uiTopic: TopicsModel[];
  devTopic: TopicsModel[];
  isLoading: boolean;
}

const initialState: AppStateType = {
  frontTopic: [],
  backTopic: [],
  uiTopic: [],
  devTopic: [],
  isLoading: false,
}

const topicSlice = createSlice({
  initialState: initialState,
  name: 'topics',
  reducers: {
    getTopicList(state, action: { payload: { type: string } }) {},
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setFrontList(state, action) {
      state.frontTopic = action.payload;
    },
    setBackList(state, action) {
      state.backTopic = action.payload;
    },
    setUiList(state, action) {
      state.uiTopic = action.payload;
    },
    setDevList(state, action) {
      state.devTopic = action.payload;
    }
  }
});

export const topicsAction = topicSlice.actions;

export default topicSlice;