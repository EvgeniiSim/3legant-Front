import { apiSlice } from "../api/apiSlice";

export const favoriteApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      addToFavorite: builder.mutation<undefined, string>({
         query: (id) => ({
            url: "/favorite/add",
            body: {
               productID: id,
            },
            method: "POST",
         }),
      }),
      removeFromFavorite: builder.mutation<undefined, string>({
         query: (id) => ({
            url: "/favorite/remove",
            body: {
               productID: id,
            },
            method: "POST",
         }),
      }),
      clearFavorite: builder.mutation<undefined, undefined>({
         query: () => ({
            url: "/favorite/clear",
            method: "POST",
         }),
      }),
   }),
});

export const {
   useAddToFavoriteMutation,
   useRemoveFromFavoriteMutation,
   useClearFavoriteMutation,
} = favoriteApiSlice;
