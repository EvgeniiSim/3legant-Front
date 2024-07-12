import classNames from "classnames/bind";
import classes from "./Button.module.scss";
import { ReactNode } from "react";

interface ButtonProps {
   children: string;
   raduis: "md" | "sm";
   className?: ReactNode;
   onClick?: () => void;
}

const cx = classNames.bind(classes);

const Button = ({ children, raduis, className, onClick }: ButtonProps) => {
   const btnClasses = cx({
      btn: true,
      _roundedFull: raduis === "md",
   });

   return (
      <div
         className={`${btnClasses} ${className ? className : ""}`}
         onClick={onClick}>
         {children}
      </div>
   );
};

export default Button;
