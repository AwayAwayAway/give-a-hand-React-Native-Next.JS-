import {createSlice} from "@reduxjs/toolkit";

type AppStateType = {
  error: {
    status: string;
    message: string;
    errorCode: string;
  }
}

const initialState: AppStateType = {
  error: {
    status: '',
    message: '',
    errorCode: '',
  }
}

const exceptionSlice = createSlice({
  initialState: initialState,
  name: 'exception',
  reducers: {
    setResponseStatus(state, action: { payload: { status: string, message: string, errorCode: string } }) {
      state.error = action.payload;
    },
    resetException(state) {
      state.error = initialState.error
    }
  }
});

export const exceptionActions = exceptionSlice.actions;

export default exceptionSlice;