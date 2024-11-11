import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import { useGetUserInfoQuery } from "./userApiSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setUser } from "./userSlice";

const PrefetchUser = () => {
   const dispatch = useAppDispatch();

   const { data: userData, isSuccess: isUserSuccess } =
      useGetUserInfoQuery(undefined);

   useEffect(() => {
      if (isUserSuccess && userData) {
         dispatch(setUser(userData));
      }
   }, [isUserSuccess, userData]);

   if (isUserSuccess) return <Outlet />;
};
export default PrefetchUser;
