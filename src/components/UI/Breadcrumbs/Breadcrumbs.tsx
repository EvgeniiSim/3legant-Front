import { Link, useLocation } from "react-router-dom";

import classes from "./Breadcrumbs.module.scss";

// FIXME: Некорректно отображает UI
const Breadcrumbs = () => {
   const location = useLocation();

   let currentLink = "";
   let crumbs;

   if (location.pathname === "/") {
      currentLink = "/";
      crumbs = (
         <img
            src="/icons/home.svg"
            width={24}
            height={24}
            alt="На главную страницу"
         />
      );
      return (
         <div className={classes.breadcrumbs}>
            <div className={classes.crumb}>
               <Link to={currentLink}>{crumbs}</Link>
            </div>
         </div>
      );
   }

   crumbs = location.pathname
      .split("/")
      .filter((crumb) => crumb !== "")
      .map((crumb, index) => {
         currentLink += `/${crumb}`;

         return (
            <div className={classes.crumb} key={index}>
               <Link to={currentLink}>{crumb}</Link>
            </div>
         );
      });

   return <div className={classes.breadcrumbs}>{crumbs}</div>;
};

export default Breadcrumbs;
