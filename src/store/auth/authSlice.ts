import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { ACCESS_TOKEN, PERSIST } from "../../config/app";

interface InitialState {
   accessToken: string | null;
   isUnauthorized: boolean;
}

const initialState: InitialState = {
   accessToken: localStorage.getItem(ACCESS_TOKEN),
   isUnauthorized: localStorage.getItem(PERSIST) ? false : true,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setCredentials: (state, action: PayloadAction<string>) => {
         const accessToken = action.payload;
         localStorage.setItem(ACCESS_TOKEN, accessToken);
         state.accessToken = accessToken;
         state.isUnauthorized = false;
      },
      logOut: (state) => {
         state.accessToken = null;
         state.isUnauthorized = true;
         localStorage.removeItem(PERSIST);
      },
      unauthorize: (state) => {
         state.isUnauthorized = true;
         localStorage.removeItem(PERSIST);
      },
   },
});

export const { setCredentials, logOut, unauthorize } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.accessToken;
