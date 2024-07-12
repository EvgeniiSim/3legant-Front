import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface InitialState {
   accessToken: string | null;
   isUnauthorized: boolean;
}

const initialState: InitialState = {
   accessToken: localStorage.getItem("accessToken"),
   isUnauthorized: false,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setCredentials: (state, action) => {
         const { accessToken } = action.payload;
         state.accessToken = accessToken;
      },
      logOut: (state) => {
         state.accessToken = null;
      },
   },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.accessToken;
