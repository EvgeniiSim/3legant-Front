import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
   baseUrl: "http://localhost:3500",
   credentials: "include",
   prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.accessToken;

      if (token) {
         headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
   },
});

export const apiSlice = createApi({
   baseQuery: baseQuery,
   tagTypes: ["Product"],
   endpoints: () => ({}),
});
