import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import Loader from "../Loader/Loader";
import { useAppSelector } from "../../hooks/reduxHooks";

const MainLayout = () => {
   const isLoading = useAppSelector((state) => state.loader.isActive);
   return (
      <div className="wrapper">
         <Header />
         <div className="container">
            <Breadcrumbs />
         </div>
         <main className="main">
            <Outlet />
         </main>
         <Footer />

         {/* Влючается через redux state */}
         {isLoading && <Loader />}
      </div>
   );
};

export default MainLayout;
