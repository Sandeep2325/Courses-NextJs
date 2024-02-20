import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  value: AuthState;
};
type AuthState = {
  fullname: string;
  email: string;
};
const initialState = {
  value: {
    fullname: "",
    email: "",
  } as initialState["value"],
} as initialState;

export const signup = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<string>) => {
        const parsedPayload = JSON.parse(action.payload);
      return {
        value: {
          fullname: parsedPayload.fullname,
          email: parsedPayload.email,
        },
      };
    },
  },
});

export const {signUp}=signup.actions
export default signup.reducer;
