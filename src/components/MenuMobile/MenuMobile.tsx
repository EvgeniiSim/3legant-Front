import { Dispatch, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import classNames from "classnames/bind";
import classes from "./MenuMobile.module.scss";
const cx = classNames.bind(classes);

import Button from "../UI/Button/Button";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useAppSelector } from "../../hooks/reduxHooks";
import { Paths } from "../../config/paths";

interface MenuMobileProps {
   open: boolean;
   setOpen: Dispatch<React.SetStateAction<boolean>>;
}

const MenuMobile = ({ open, setOpen }: MenuMobileProps) => {
   const isUnauthorized = useAppSelector((state) => state.auth.isUnauthorized);

   const ref = useRef(null);
   useOutsideClick(ref, () => setOpen(false), ["#menu"]);

   const navigate = useNavigate();

   const wrapperClasses = cx({
      wrapper: true,
      _open: open,
   });

   return (
      <div className={wrapperClasses}>
         <div ref={ref} className={classes.menu}>
            <div className={classes.menu__top}>
               <div className={classes.top__header}>
                  <Link to="/">3legant.</Link>
                  <img
                     src="icons/close.svg"
                     alt="Закрыть меню"
                     onClick={() => {
                        setOpen(false);
                     }}
                  />
               </div>
               <div className={classes.top__search}>
                  <div className={classes.top__searchWrapper}>
                     <img src="icons/search.svg" alt="Поиск" />
                     <input type="text" placeholder="Search" />
                  </div>
               </div>
               <nav className={classes.top__nav}>
                  <ul>
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="shop">Shop</Link>
                     </li>
                     <li>
                        <Link to="contacts">Contact Us</Link>
                     </li>
                  </ul>
               </nav>
            </div>
            <div className={classes.menu__bottom}>
               {!isUnauthorized && (
                  <ul className={classes.bottom__productsList}>
                     <li>
                        <Link
                           to={"basket"}
                           className={classes.bottom__productsItem}>
                           Cart
                           <div className={classes.bottom__productsIcon}>
                              <img src="icons/bag.svg" alt="Корзина" />
                              <span>2</span>
                           </div>
                        </Link>
                     </li>
                     <li>
                        <Link
                           to={"favorites"}
                           className={classes.bottom__productsItem}>
                           Wishlist
                           <div className={classes.bottom__productsIcon}>
                              <img src="icons/unliked.svg" alt="Избранные" />
                              <span>2</span>
                           </div>
                        </Link>
                     </li>
                  </ul>
               )}
               <Button
                  raduis="sm"
                  onClick={() => {
                     setOpen(false);
                     navigate(Paths.SIGNIN);
                  }}
                  className={classes.bottom__button}>
                  Sign In
               </Button>
               <ul className={classes.bottom__social}>
                  <li>
                     <img src="icons/socials/instagram.svg" alt="Instargam" />
                  </li>
                  <li>
                     <img src="icons/socials/facebook.svg" alt="Facabook" />
                  </li>
                  <li>
                     <img src="icons/socials/youtube.svg" alt="YouTube" />
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default MenuMobile;
