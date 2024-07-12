import { SignInRequest, SignUpRequest } from "../../types/authTypes";
import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      signIn: builder.mutation<undefined, SignInRequest>({
         query: ({ username, password }) => ({
            url: "/auth/signIn",
            body: {
               username,
               password,
            },
         }),
      }),
      confirm: builder.mutation<undefined, string>({
         query: (token) => ({
            url: `/auth/confirm/${token}`,
         }),
      }),
      signUp: builder.mutation<undefined, SignUpRequest>({
         query: ({ password, username, email }) => ({
            url: "/auth/signUp",
            body: {
               password,
               username,
               email,
            },
         }),
      }),
      refresh: builder.query({
         query: () => "/auth/refresh",
      }),
      logout: builder.mutation({
         query: () => "/auth/logout",
      }),
   }),
});

export const {
   useLogoutMutation,
   useRefreshQuery,
   useSignInMutation,
   useSignUpMutation,
   useConfirmMutation,
} = authApiSlice;
