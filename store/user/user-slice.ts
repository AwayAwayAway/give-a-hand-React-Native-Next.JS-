import {createSlice} from "@reduxjs/toolkit";
import {UserModel} from "../../shared/models/user/user-model";

type AppStateType = {
  user: UserModel
}

const initialState: AppStateType = {
  user: {
    id: null,
    email: '',
    firstName: '',
    lastName: '',
    roles: ''
  }
}

const userSlice = createSlice({
  initialState: initialState,
  name: 'user',
  reducers: {
    setUser(state, action: { payload: { email: string; firstName: string; lastName: string; roles?: string | string[], id: number | null } }) {
      state.user = action.payload;
    }
  }
});

export const userActions = userSlice.actions;

export default userSlice;