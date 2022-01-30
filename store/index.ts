import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import loginSlice from "./login/login-slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import sagas from "./sagas";
import exceptionSlice from "./exception/exception-slice";
import topicSlice from "./topics/topic-slice";
import userSlice from "./user/user-slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    loginState: loginSlice.reducer,
    exceptionState: exceptionSlice.reducer,
    topicState: topicSlice.reducer,
    userState: userSlice.reducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(sagas);

export const useAppDispatch: Function = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;