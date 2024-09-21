import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import { useGetUserInfoQuery } from "./userApiSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setUser } from "./userSlice";

const PrefetchUser = () => {
   const dispatch = useAppDispatch();

   const { data, isSuccess } = useGetUserInfoQuery(undefined);

   useEffect(() => {
      if (isSuccess && data) {
         dispatch(setUser(data));
      }
   }, [isSuccess, data]);

   return <Outlet />;
};
export default PrefetchUser;
