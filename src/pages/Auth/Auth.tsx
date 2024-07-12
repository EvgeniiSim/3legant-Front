import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import img1 from "../../../public/images/Home/Categories/category-3.jpg";

import styles from "./Auth.module.scss";

const Auth = () => {
   return (
      <div className={styles.wrap}>
         <div className={styles.wrap__pic}>
            <img src={img1} alt="3legant." />
         </div>
         <div className={styles.wrap__form}>
            <Suspense fallback={<p>Loading...</p>}>
               <Outlet />
            </Suspense>
         </div>
      </div>
   );
};

export default Auth;
