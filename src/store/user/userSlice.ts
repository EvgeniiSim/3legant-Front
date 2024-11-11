import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "./model";

const initialState: IUser = {
   name: "",
   email: "",
   favorite: [],
   basket: {},
};

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setUser: (state, action: PayloadAction<IUser>) => {
         const { name, email, avatar, favorite, basket } = action.payload;
         state.email = email;
         state.name = name;
         state.favorite = favorite;
         state.basket = basket;

         if (avatar) {
            state.avatar = avatar;
         }
      },
   },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
