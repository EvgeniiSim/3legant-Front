import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import { Outlet } from "react-router-dom";
const cn = classNames.bind(styles);

const Profile = () => {
   return (
      <div className={cn("profile")}>
         <h2 className={cn("profile__title")}>My Account</h2>

         <div className={cn("profile__content")}>
            <aside className={cn("profile__aside")}></aside>
            <div className={cn("profile__data")}>
               <Outlet />
            </div>
         </div>
      </div>
   );
};

export default Profile;
