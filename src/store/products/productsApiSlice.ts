import { apiSlice } from "../api/apiSlice";
import { Product } from "../../types/ProductsTypes";

interface ResponseData {
   products: Product[];
   amount: number;
}

export const productsApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getProducts: builder.query<
         ResponseData,
         { limit?: number; page: number }
      >({
         query: ({ limit, page }) => ({
            url: "/products",
            params: { limit, page },
         }),
         providesTags: (result) => {
            if (result) {
               return [
                  { type: "Product", id: "LIST" },
                  ...result.products.map(({ _id }) => ({
                     type: "Product" as const,
                     _id,
                  })),
               ];
            } else return [{ type: "Product", id: "LIST" }];
         },
      }),
   }),
});

export const { useGetProductsQuery } = productsApiSlice;
