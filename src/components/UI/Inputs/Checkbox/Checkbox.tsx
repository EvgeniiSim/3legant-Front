import { ReactNode, useState } from "react";

import check from "../../../../../public/icons/inputs/check.svg";

import classes from "./Checkbox.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

export interface CheckboxProps {
   name: string;
   id: string;
   children: ReactNode;
}

const Checkbox = ({ name, id, children }: CheckboxProps) => {
   const [checked, setChecked] = useState(false);

   const labelClasses = cx({
      checkbox__label: true,
      _active: checked,
   });

   return (
      <div className={classes.checkbox}>
         <label className={labelClasses} htmlFor={id}>
            <img src={check} alt={name} />
         </label>
         <span className={classes.checkbox__text}>{children}</span>
         <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className={classes.checkbox__input}
            id={id}
            name={name}
         />
      </div>
   );
};

export default Checkbox;
