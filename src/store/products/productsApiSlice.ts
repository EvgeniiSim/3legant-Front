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
         { limit?: number; page?: number }
      >({
         query: ({ limit = undefined, page = undefined }) => ({
            url: "/products",
            params: { limit, page },
         }),
      }),
   }),
});

export const { useGetProductsQuery } = productsApiSlice;
