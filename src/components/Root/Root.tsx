import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Loader from "../Loader/Loader";

const Root = () => {
   return (
      <Suspense fallback={<Loader />}>
         <Outlet />
         <ScrollRestoration />
      </Suspense>
   );
};

export default Root;
