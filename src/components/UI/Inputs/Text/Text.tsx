import { ChangeEvent } from "react";

import classNames from "classnames/bind";
import styles from "./Text.module.scss";
const cn = classNames.bind(styles);

export interface TextProps {
   placeholder: string;
   value: string;
   onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
   isError?: boolean;
   errorText?: string;
   autoFocus?: boolean;
   bordered?: boolean;
   label?: string;
}

const Text = ({
   placeholder,
   value,
   onChange,
   autoFocus,
   isError = false,
   errorText = "",
   bordered = false,
   label = "",
}: TextProps) => {
   return (
      <div className={cn("wrap")}>
         {label && <label className={cn("label")}>{label}</label>}
         <input
            className={cn("input", bordered && "_bordered")}
            autoFocus={autoFocus}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
         />
         {isError && <span className={styles.input__error}>{errorText}</span>}
      </div>
   );
};

export default Text;
