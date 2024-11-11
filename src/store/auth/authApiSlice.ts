import { SignInRequest, SignUpRequest } from "../../types/authTypes";
import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      signIn: builder.mutation<{ accessToken: string }, SignInRequest>({
         query: ({ email, password }) => ({
            url: "/auth/signIn",
            method: "POST",
            body: {
               email,
               password,
            },
         }),
      }),
      confirm: builder.query<undefined, string>({
         query: (token) => ({
            url: `/auth/confirm/${token}`,
            method: "POST",
         }),
      }),
      signUp: builder.mutation<undefined, SignUpRequest>({
         query: ({ password, username, email }) => ({
            url: "/auth/signUp",
            method: "POST",
            body: {
               password,
               username,
               email,
            },
         }),
      }),
      logout: builder.mutation({
         query: () => ({
            url: "/auth/logout",
            method: "POST",
         }),
      }),
   }),
});

export const {
   useLogoutMutation,
   useSignInMutation,
   useSignUpMutation,
   useConfirmQuery,
} = authApiSlice;
