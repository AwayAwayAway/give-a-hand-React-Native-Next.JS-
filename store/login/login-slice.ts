import {createSlice} from "@reduxjs/toolkit";
import {LoginModel} from "../../shared/models/login/login-model";

type AppStateType = {
  isLogged: boolean;
  isLoading: boolean;
}

const initialState: AppStateType = {
  isLogged: false,
  isLoading: false,
}

const loginSlice = createSlice({
  initialState: initialState,
  name: 'login',
  reducers: {
    login(state, action: {payload: { user: LoginModel, type: string }}) {},
    setIsLogin(state, action) {
      state.isLogged = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  }
});

export const loginActions = loginSlice.actions;

export default loginSlice;