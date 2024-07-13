import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

const Root = () => {
   return (
      <Suspense fallback={<Loader />}>
         <Outlet />
      </Suspense>
   );
};

export default Root;
