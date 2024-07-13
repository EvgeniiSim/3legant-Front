import { Outlet } from "react-router-dom";

import img1 from "../../../public/images/Home/Categories/category-3.jpg";

import { useAppSelector } from "../../hooks/reduxHooks";

import styles from "./Auth.module.scss";

import Loader from "../../components/Loader/Loader";

const Auth = () => {
   const isLoading = useAppSelector((state) => state.loader.isActive);
   return (
      <>
         <div className={styles.wrap}>
            <div className={styles.wrap__pic}>
               <img src={img1} alt="3legant." />
            </div>
            <div className={styles.wrap__form}>
               <b className={styles.logo}>3legant.</b>
               <Outlet />
            </div>
         </div>

         {/* Влючается через redux state */}
         {isLoading && <Loader />}
      </>
   );
};

export default Auth;
