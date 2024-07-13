import { Dispatch, SetStateAction, useRef, useState } from "react";

import styles from "./Select.module.scss";
import classNames from "classnames/bind.js";

import useOutsideClick from "../../../hooks/useOutsideClick";

interface SelectProps {
   children: string;
   open: boolean;
   setOpen: Dispatch<SetStateAction<boolean>>;
   setError?: Dispatch<SetStateAction<boolean>>;
   error?: boolean;
}

const data = ["Вокалист", "Клавишные", "Барабаны", "Гитарист"];

const Select = ({ children, open, setOpen, error, setError }: SelectProps) => {
   const [selectedValue, setSelectedValue] = useState<string | null>(null);
   const selectRef = useRef(null);
   useOutsideClick(selectRef, () => setOpen(false));

   // Определяем и классы интерактива
   const cx = classNames.bind(styles);
   const arrowClasses = cx({
      select__arrow: true,
      select__arrow_active: open,
   });

   const selectClasses = cx({
      select: true,
      _active: open,
      _error: error,
   });

   return (
      <div className={styles.selectWrap}>
         <div className={selectClasses} ref={selectRef}>
            <div
               className={styles.select__header}
               onClick={() => setOpen((prev) => !prev)}>
               <span>{selectedValue ? selectedValue : children}</span>
               <img
                  src="icons/select/arrow.svg"
                  alt="Выберите инструмент"
                  className={arrowClasses}
               />
            </div>
            <div
               className={`${styles.listWrap} ${
                  open ? styles.listWrap_active : null
               }`}>
               <ul className={styles.list}>
                  {data.map((item) => (
                     <li
                        key={item}
                        className={styles.list__item}
                        onClick={() => {
                           if (setError) setError(false);
                           if (
                              item.toLocaleLowerCase() !==
                              selectedValue?.toLocaleLowerCase()
                           ) {
                              setSelectedValue(item);
                              setOpen(false);
                           }
                        }}>
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Select;
