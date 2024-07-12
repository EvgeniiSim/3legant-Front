import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../../types/ProductsTypes";

interface InitialState {
   products: Product[];
   amount: number;
}

const initialState: InitialState = {
   products: [],
   amount: 0,
};

const productsSlice = createSlice({
   name: "products",
   initialState,
   reducers: {
      setProducts: (state, action) => {
         state.products = action.payload.products;
         state.amount = action.payload.amount;
      },
   },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const selectProducts = (state: RootState) => state.products.products;
