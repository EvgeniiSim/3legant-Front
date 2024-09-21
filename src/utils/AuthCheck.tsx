import { Outlet, useNavigate } from "react-router-dom";

import { useAppSelector } from "../hooks/reduxHooks";
import { Paths } from "../config/paths";

const AuthCheck = () => {
   const navigate = useNavigate();
   const isUnauthorized = useAppSelector((state) => state.auth.isUnauthorized);

   if (isUnauthorized) {
      navigate(Paths.NOT_AUTH);
   } else {
      return <Outlet />;
   }
};
export default AuthCheck;
