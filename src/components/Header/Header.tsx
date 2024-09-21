import { useState } from "react";
import { Link } from "react-router-dom";

import useWindowSize from "../../hooks/useWindowSize";
import { useAppSelector } from "../../hooks/reduxHooks";

import classes from "./Header.module.scss";
import MenuMobile from "../MenuMobile/MenuMobile";
import Profile from "./modules/Profile";

const Header = () => {
   const isUnauthorized = useAppSelector((state) => state.auth.isUnauthorized);
   const { width } = useWindowSize();
   const [open, setOpen] = useState(false);

   const isTablet = width < 768;

   if (open && isTablet) {
      document.body.classList.add("_lock");
   } else {
      document.body.classList.remove("_lock");
   }

   return (
      <div className={classes.header}>
         <div className="container">
            <div className={classes.header__inner}>
               <div className={classes.header__logo}>
                  {isTablet ? (
                     <>
                        <img
                           src="/icons/burger.svg"
                           alt="Меню"
                           id="menu"
                           onClick={() => setOpen(true)}
                        />
                        <Link to="/">3legant.</Link>
                     </>
                  ) : (
                     <Link to="/">3legant.</Link>
                  )}
               </div>
               {isTablet ? null : (
                  <nav className={classes.header__nav}>
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
               )}
               <div className={classes.header__buttons}>
                  {isTablet ? null : (
                     <div className={classes.header__buttons_search}>
                        <img src="/icons/search.svg" alt="Поиск" />
                     </div>
                  )}
                  <Profile />
                  {!isUnauthorized && (
                     <div className={classes.header__buttons_bag}>
                        <img src="/icons/bag.svg" alt="Корзина" />
                        <span>2</span>
                     </div>
                  )}
               </div>
            </div>
         </div>
         {isTablet ? <MenuMobile open={open} setOpen={setOpen} /> : null}
      </div>
   );
};

export default Header;
