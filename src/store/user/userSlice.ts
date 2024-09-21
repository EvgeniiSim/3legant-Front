import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "./model";

const initialState: IUser = {
   name: "",
   email: "",
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setUser: (state, action: PayloadAction<IUser>) => {
         const { name, email } = action.payload;
         state.email = email;
         state.name = name;
      },
   },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
