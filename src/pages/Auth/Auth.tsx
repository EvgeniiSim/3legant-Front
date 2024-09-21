import { Outlet } from "react-router-dom";

import { useAppSelector } from "../../hooks/reduxHooks";

import styles from "./Auth.module.scss";

import Loader from "../../components/Loader/Loader";

const Auth = () => {
   const isLoading = useAppSelector((state) => state.loader.isActive);
   return (
      <>
         <div className={styles.wrap}>
            <div className={styles.wrap__pic}>
               <img
                  src={"/images/Home/Categories/category-3.jpg"}
                  alt="3legant."
               />
            </div>
            <div className={styles.wrap__form}>
               <b className={styles.logo}>3legant.</b>
               <Outlet />
            </div>
         </div>

         {isLoading && <Loader />}
      </>
   );
};

export default Auth;
