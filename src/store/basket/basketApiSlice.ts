import { apiSlice } from "../api/apiSlice";
import { TGetBasketResponse } from "./model";

export const basketApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getBasket: builder.query<TGetBasketResponse, undefined>({
         query: () => "/basket",
      }),
      addToBasket: builder.mutation<
         undefined,
         { productID: string; quantity: number }
      >({
         query: (body) => ({
            url: "/bakset/add",
            body,
            method: "POST",
         }),
      }),
      removeFromBasket: builder.mutation<
         undefined,
         { productID: string; quantity: number }
      >({
         query: (body) => ({
            url: "/bakset/remove",
            body,
            method: "POST",
         }),
      }),
      clearBasket: builder.mutation<undefined, undefined>({
         query: () => ({
            url: "/basket/clear",
            method: "POST",
         }),
      }),
   }),
});

export const {
   useGetBasketQuery,
   useAddToBasketMutation,
   useRemoveFromBasketMutation,
   useClearBasketMutation,
} = basketApiSlice;
