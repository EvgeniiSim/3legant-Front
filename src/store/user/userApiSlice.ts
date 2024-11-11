import { IChangeUserInfoRequest } from "../../types/authTypes";
import { apiSlice } from "../api/apiSlice";
import { IUser } from "./model";

export const userApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getUserInfo: builder.query<IUser, undefined>({
         query: () => "/user/info",
      }),
      changeUserInfo: builder.mutation<null, IChangeUserInfoRequest>({
         query: (body) => ({
            url: "/user/changeInfo",
            method: "PUT",
            body,
         }),
      }),
      saveAvatar: builder.mutation<null, FormData>({
         query: (formData) => ({
            url: "/user/saveAvatar",
            method: "PUT",
            body: formData,
         }),
      }),
      getAvatar: builder.query<File, string>({
         query: (imgSrc) => ({
            url: `/user/getAvatar/${imgSrc}`,
            responseHandler(response) {
               return response.blob();
            },
         }),
      }),
      
   }),
});

export const {
   useGetUserInfoQuery,
   useChangeUserInfoMutation,
   useSaveAvatarMutation,
   useLazyGetAvatarQuery,
} = userApiSlice;
