import { NavLink } from "react-router-dom";

import classes from "./CustomLink.module.scss";
import { ReactNode } from "react";

interface LinkProps {
   children: string;
   to: string;
   className?: ReactNode;
}

const CustomLink = ({ children, to, className }: LinkProps) => {
   return (
      <NavLink
         to={to}
         className={`${classes.link} ${className ? className : ""}`}>
         {children}
         <img src="/icons/link/arrow.svg" alt={children} />
      </NavLink>
   );
};

export default CustomLink;
