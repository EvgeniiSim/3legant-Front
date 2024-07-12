import { Dispatch, ReactNode } from "react";

import classes from "./Dropdown.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

interface DropdownProps {
   label: string;
   children: ReactNode;
   open: boolean;
   setOpen: Dispatch<React.SetStateAction<boolean>>;
   className?: ReactNode;
}

const Dropdown = ({
   children,
   open,
   setOpen,
   className,
   label,
}: DropdownProps) => {
   const dropdownClasses = cx({
      dropdown: true,
      _open: open,
   });
   return (
      <div className={`${dropdownClasses} ${className ? className : ""}`}>
         <div
            className={classes.dropdown__header}
            onClick={() => setOpen((prev) => !prev)}>
            {label}
            <img src="icons/dropdown/arrow.svg" alt="Показать/Скрыть" />
         </div>
         <div className={classes.dropdown__body}>
            <div>{children}</div>
         </div>
      </div>
   );
};

export default Dropdown;
