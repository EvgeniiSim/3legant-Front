import { Link, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../../hooks/reduxHooks";

import classNames from "classnames/bind";
import styles from "../Header.module.scss";
import { Paths } from "../../../config/paths";
const cn = classNames.bind(styles);

const Profile = () => {
   const navigate = useNavigate();
   const isUnauthorized = useAppSelector((state) => state.auth.isUnauthorized);
   return (
      <div className={cn("header__buttons_profile")}>
         {isUnauthorized ? (
            <div className={cn("header__buttons_profile", "_unauthorized")}>
               <img
                  onClick={() => navigate(Paths.SIGNIN)}
                  src="/icons/user.svg"
                  alt="Профиль"
               />
               <div className={cn("header__buttons_profile-popup")}>
                  You have to <Link to={Paths.SIGNIN}>sign in</Link> or{" "}
                  <Link to={Paths.SIGNUP}>sign up</Link> if yout don't have an
                  account yet
               </div>
            </div>
         ) : (
            <img
               onClick={() => navigate(Paths.ACCOUNT)}
               src="/icons/user.svg"
               alt="Профиль"
            />
         )}
      </div>
   );
};

export default Profile;
