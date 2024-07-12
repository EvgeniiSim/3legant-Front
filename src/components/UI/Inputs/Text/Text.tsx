import { ChangeEvent, LegacyRef } from "react";

import styles from "./Text.module.scss";

export interface TextProps {
   placeholder: string;
   value: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   ref?: LegacyRef<HTMLInputElement>;
   autoFocus?: boolean;
}

const Text = ({ placeholder, value, onChange, ref, autoFocus }: TextProps) => {
   return (
      <div className={styles.wrap}>
         <input
            autoFocus={autoFocus}
            value={value}
            onChange={onChange}
            className={styles.input}
            ref={ref}
            placeholder={placeholder}
         />
      </div>
   );
};

export default Text;
