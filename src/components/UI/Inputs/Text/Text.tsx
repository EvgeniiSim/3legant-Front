import { ChangeEvent } from "react";

import styles from "./Text.module.scss";

export interface TextProps {
   placeholder: string;
   value: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   isError?: boolean;
   errorText?: string;
   autoFocus?: boolean;
}

const Text = ({
   placeholder,
   value,
   onChange,
   autoFocus,
   isError = false,
   errorText = "",
}: TextProps) => {
   return (
      <div className={styles.wrap}>
         <input
            autoFocus={autoFocus}
            value={value}
            onChange={onChange}
            className={styles.input}
            placeholder={placeholder}
         />
         {isError && <span className={styles.input__error}>{errorText}</span>}
      </div>
   );
};

export default Text;
