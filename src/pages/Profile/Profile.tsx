import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
const cn = classNames.bind(styles);

import { Paths } from "../../config/paths";

import { useAppDispatch } from "../../hooks/reduxHooks";
import { useLogoutMutation } from "../../store/auth/authApiSlice";
import { logOut as logOutInState } from "../../store/auth/authSlice";
import { AccountMenuItems } from "../../config/constants";

const Profile = () => {
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const dispatch = useAppDispatch();

   const [logoutApiCall, result] = useLogoutMutation(undefined);

   const photoRef = useRef<HTMLInputElement>(null);
   const [phtotoBlob, setPhtotoBlob] = useState("");

   // Конвертация в blob url
   const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;

      if (files?.length) {
         const photo = files[0];
         const blob = URL.createObjectURL(photo);
         setPhtotoBlob(blob);
      }
   };

   const openPhotoInput = () => {
      if (photoRef.current) {
         photoRef.current.click();
      }
   };

   // Выход из аккуанта
   const logOut = async () => {
      try {
         await logoutApiCall(undefined);
         dispatch(logOutInState());
      } catch (err) {
         console.log(err);
      }
   };

   // Узнает на какой страницы профиля сейчас находимся
   // и возращает slug: string, где slug это /profile/{slug}
   const accoutUrlSlug = useMemo(() => {
      const lastSlahIndex = pathname.lastIndexOf("/");
      const slug = pathname.slice(lastSlahIndex + 1);
      return slug;
   }, [pathname]);

   // Следит когда пользователь сделает logout
   useEffect(() => {
      if (result.isSuccess) {
         navigate(Paths.HOME);
      }
   }, [result.isSuccess]);

   return (
      <div className={cn("profile")}>
         <div className="container">
            <h2 className={cn("profile__title")}>My Account</h2>

            <div className={cn("profile__content")}>
               <aside className={cn("profile__aside", "aside")}>
                  {/* Аватар пользователя */}
                  <div className={cn("aside__photo")}>
                     {phtotoBlob ? (
                        <img
                           src={phtotoBlob}
                           className={cn("aside__photo-avatar")}
                           alt="Avatar"
                        />
                     ) : (
                        <img
                           src="/icons/account/blank-avatar.png"
                           className={cn("aside__photo-avatar")}
                        />
                     )}

                     {/* Невидмый input для выбора фотографии */}
                     <input
                        onChange={onFileChange}
                        ref={photoRef}
                        type="file"
                        name="photo"
                        id="photo"
                        accept="image/*"
                        capture="environment"
                     />

                     {/* Иконка, которая включает file input  */}
                     <img
                        src="/icons/account/photo.svg"
                        alt="Загрузить аватар"
                        className={cn("aside__photo-add")}
                        onClick={openPhotoInput}
                     />
                  </div>

                  {/* Имя пользоватея */}
                  {/* FIXME: Хардок! */}
                  <strong className={cn("aside__name")}>Sofia Havertz</strong>

                  {/* Пункты разделы профиля */}
                  <ul className={cn("aside__list")}>
                     {AccountMenuItems.map((item, index) => (
                        <li
                           className={cn(
                              "aside__list-item",
                              accoutUrlSlug.toLocaleLowerCase() ===
                                 item.label.toLocaleLowerCase() && "_active"
                           )}
                           key={index}>
                           <Link preventScrollReset={true} to={item.href}>
                              {item.label}
                           </Link>
                        </li>
                     ))}
                     <li>
                        <span
                           className={cn("aside__list-item")}
                           onClick={logOut}>
                           Log Out
                        </span>
                     </li>
                  </ul>
               </aside>
               <div className={cn("profile__data")}>
                  <Outlet />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Profile;
