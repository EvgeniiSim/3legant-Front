import { Outlet, useNavigate } from "react-router-dom";

import { useAppSelector } from "../hooks/reduxHooks";

import { useEffect } from "react";
import { Paths } from "../config/paths";

const AuthRequired = () => {
   const navigate = useNavigate();
   const accessToken = useAppSelector((state) => state.auth.accessToken);

   useEffect(() => {
      if (!accessToken) navigate(Paths.SIGNIN);
   }, [accessToken, navigate]);

   if (accessToken) {
      return <Outlet />;
   }
};

export default AuthRequired;
