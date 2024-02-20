import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  value: AuthValue;
};
type AuthValue = {
  email: string;
};
const initialState = {
  value: {
    email: "",
  } as AuthValue,
} as initialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      return {
        value: {
          email: action.payload,
        },
      };
    },
  },
});

export const {login}=auth.actions
export default auth.reducer;
