import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import appSlice from "./app-slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    appState: appSlice.reducer
  },
  middleware: [sagaMiddleware]
});

export const useAppDispatch: Function = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;