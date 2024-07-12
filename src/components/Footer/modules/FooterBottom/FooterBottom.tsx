import { Link } from "react-router-dom";

import classes from "./FooterBottom.module.scss";

const FooterBottom = () => {
   return (
      <div className={classes.footer}>
         <div className="container">
            <div className={classes.footer__inner}>
               <div className={classes.footer__top}>
                  <div className={classes.top__logo}>
                     <Link to={"/"}>3legant.</Link>
                     <span>|</span>
                     Gift & Decoration Store
                  </div>
                  <nav className={classes.top__nav}>
                     <ul>
                        <li>
                           <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                           <Link to={"/shop"}>Shop</Link>
                        </li>
                        <li>
                           <Link to={"/contacts"}>Contact Us</Link>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div className={classes.footer__bottom}>
                  <div className={classes.bottom__privacy}>
                     <div className={classes.bottom__copyright}>
                        Copyright © 2023 3legant. All rights reserved
                     </div>
                     <a href="#">Privacy Policy</a>
                     <a href="#">Terms of Use</a>
                  </div>
                  <div className={classes.bottom__social}>
                     <img
                        src="icons/socials/instagram-white.svg"
                        alt="Instagram"
                     />
                     <img
                        src="icons/socials/facebook-white.svg"
                        alt="Instagram"
                     />
                     <img
                        src="icons/socials/youtube-white.svg"
                        alt="Instagram"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FooterBottom;
