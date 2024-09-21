import { ChangeEvent, useState } from "react";

import styles from "./Password.module.scss";

export interface PasswordProps {
   placeholder: string;
   value: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   autoFocus?: boolean;
   isError?: boolean;
   errorText?: string;
}

const Password = ({
   placeholder,
   value,
   onChange,
   autoFocus,
   isError = false,
   errorText = "",
}: PasswordProps) => {
   const [showPwd, setShowPwd] = useState(false);
   return (
      <div className={styles.wrap}>
         <input
            className={styles.input}
            autoFocus={autoFocus}
            value={value}
            onChange={onChange}
            type={showPwd ? "text" : "password"}
            placeholder={placeholder}
         />
         <div
            className={styles.input__show}
            onClick={() => setShowPwd(!showPwd)}>
            {showPwd && <span></span>}
            <img src={"/icons/inputs/showPwd.svg"} alt="Показать/Скрыть" />
         </div>
         {isError && <span className={styles.input__error}>{errorText}</span>}
      </div>
   );
};

export default Password;
