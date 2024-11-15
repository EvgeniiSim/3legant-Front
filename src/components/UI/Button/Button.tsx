import classNames from "classnames/bind";
import classes from "./Button.module.scss";
import { ReactNode } from "react";

interface ButtonProps {
   children: string;
   raduis?: "md" | "sm";
   className?: ReactNode;
   onClick?: () => void;
   disabled?: boolean;
}

const cx = classNames.bind(classes);

const Button = ({
   children,
   raduis = "md",
   className,
   onClick,
   disabled,
}: ButtonProps) => {
   const btnClasses = cx({
      btn: true,
      _roundedFull: raduis === "md",
      _disabled: disabled,
   });

   return (
      <div className={`${btnClasses} ${className}`} onClick={onClick}>
         {children}
      </div>
   );
};

export default Button;
