import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.scss";
import useWindowSize from "../../hooks/useWindowSize";
import MenuMobile from "../MenuMobile/MenuMobile";

const Header = () => {
   const { width } = useWindowSize();
   const [open, setOpen] = useState(false);
   const [canClose, setCanClose] = useState(false);

   const isTablet = width < 768;

   if (open && isTablet) {
      document.body.classList.add("_lock");
   } else {
      document.body.classList.remove("_lock");
   }

   // Разрешаем закрывать menu по outsideClike только через задержку,
   // чтобы оно не закрывалось не успев открыться
   useEffect(() => {
      if (open) {
         setTimeout(() => {
            setCanClose(true);
         }, 500);
      }
   }, [open]);
   return (
      <div className={classes.header}>
         <div className="container">
            <div className={classes.header__inner}>
               <div className={classes.header__logo}>
                  {isTablet ? (
                     <>
                        <img
                           src="icons/burger.svg"
                           alt="Меню"
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
                        <img src="icons/search.svg" alt="Поиск" />
                     </div>
                  )}
                  <div className={classes.header__buttons_profile}>
                     <img src="icons/user.svg" alt="Профиль" />
                  </div>
                  <div className={classes.header__buttons_bag}>
                     <img src="icons/bag.svg" alt="Корзина" />
                     <span>2</span>
                  </div>
               </div>
            </div>
         </div>
         {isTablet ? (
            <MenuMobile
               open={open}
               canClose={canClose}
               setCanClose={setCanClose}
               setOpen={setOpen}
            />
         ) : null}
      </div>
   );
};

export default Header;
