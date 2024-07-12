export interface RadioProps {
   name: string;
   value: string;
   id: string;
}

import { useState } from "react";
import classes from "./Radio.module.scss";
import classNames from "classnames/bind.js";
const cx = classNames.bind(classes);

const Radio = ({ name, value, id }: RadioProps) => {
   const [checked, setChecked] = useState(false);

   const labelClasses = cx({
      radio__label: true,
      _active: checked,
   });
   return (
      <>
         <label className={labelClasses} htmlFor={id}></label>
         <input
            className={classes.radio__input}
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
            type="radio"
            value={value}
            id={id}
            name={name}
         />
      </>
   );
};

export default Radio;
