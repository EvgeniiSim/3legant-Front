import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
   isActive: boolean;
}

const initialState: InitialState = {
   isActive: false,
};

const loaderSlice = createSlice({
   name: "loader",
   initialState,
   reducers: {
      setIsLoaderActive: (state, action: PayloadAction<boolean>) => {
         state.isActive = action.payload;
      },
   },
});

export const { setIsLoaderActive } = loaderSlice.actions;

export default loaderSlice.reducer;
