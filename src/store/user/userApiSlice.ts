import { apiSlice } from "../api/apiSlice";
import { IUser } from "./model";

export const userApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getUserInfo: builder.query<IUser, undefined>({
         query: () => "/user/info",
      }),
   }),
});

export const { useGetUserInfoQuery } = userApiSlice;
