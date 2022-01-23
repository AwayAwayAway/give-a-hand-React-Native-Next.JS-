import {createSlice} from "@reduxjs/toolkit";

type AppStateType = {
  topicId: string;
  isLogin: boolean;
}

const initialState: AppStateType = {
  topicId: '',
  isLogin: true,
}

const appSlice = createSlice({
  initialState: initialState,
  name: 'app',
  reducers: {
    setTopicId(state, action) {
      state.topicId = action.payload;
    },
    setLogin(state, action) {
      state.isLogin = action.payload;
    }
  }
});

export const appActions = appSlice.actions;

export default appSlice;