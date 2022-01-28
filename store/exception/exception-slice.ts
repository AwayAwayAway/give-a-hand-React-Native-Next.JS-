import {createSlice} from "@reduxjs/toolkit";

type AppStateType = {
  status: string;
  message: string;
  errorCode: string;
}

const initialState: AppStateType = {
  status: '',
  message: '',
  errorCode: '',
}

const exceptionSlice = createSlice({
  initialState: initialState,
  name: 'exception',
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    serErrorCode(state, action) {
      state.errorCode = action.payload;
    },
  }
});

export const exceptionActions = exceptionSlice.actions;

export default exceptionSlice;