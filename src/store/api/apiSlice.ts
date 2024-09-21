import {
   BaseQueryFn,
   FetchArgs,
   FetchBaseQueryError,
   createApi,
   fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";
import { API_URL } from "../../config/constants/index";
import { logOut, setCredentials } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
   baseUrl: API_URL,
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

// Логика "бесшумного" получения нового токена
const baseQueryWithReauth: BaseQueryFn<
   string | FetchArgs,
   unknown,
   FetchBaseQueryError
> = async (args, api, extraOptions) => {
   let result = await baseQuery(args, api, extraOptions);
   if (result.error && result.error.status === 401) {
      // try to get a new token
      const response = await api.dispatch(
         apiSlice.endpoints.refresh.initiate(undefined)
      );
      if (response.data) {
         // store the new token
         api.dispatch(setCredentials(response.data.accessToken));
         // retry the initial query
         result = await baseQuery(args, api, extraOptions);
      } else {
         api.dispatch(logOut());
      }
   }
   return result;
};

export const apiSlice = createApi({
   baseQuery: baseQueryWithReauth,
   endpoints: (builder) => ({
      refresh: builder.mutation<{ accessToken: string }, undefined>({
         query: () => "/auth/refresh",
      }),
   }),
});
