import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import { Suspense } from "react";

const Layout = () => {
   return (
      <div className="wrapper">
         <Header />
         <div className="container">
            <Breadcrumbs />
         </div>
         <main className="main">
            <Suspense fallback={<p>Loading...</p>}>
               <Outlet />
            </Suspense>
         </main>
         <Footer />
      </div>
   );
};

export default Layout;
