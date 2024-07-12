import { ChangeEvent, LegacyRef, useState } from "react";

import showPwdIcon from "../../../../../public/icons/inputs/showPwd.svg";

import styles from "./Password.module.scss";

export interface PasswordProps {
   placeholder: string;
   value: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   ref?: LegacyRef<HTMLInputElement>;
   autoFocus?: boolean;
}

const Password = ({
   placeholder,
   value,
   onChange,
   ref,
   autoFocus,
}: PasswordProps) => {
   const [showPwd, setShowPwd] = useState(false);
   return (
      <div className={styles.wrap}>
         <input
            className={styles.input}
            autoFocus={autoFocus}
            value={value}
            ref={ref}
            onChange={onChange}
            type={showPwd ? "text" : "password"}
            placeholder={placeholder}
         />
         <div
            className={styles.input__show}
            onClick={() => setShowPwd(!showPwd)}>
            {showPwd && <span></span>}
            <img src={showPwdIcon} alt="Показать/Скрыть" />
         </div>
      </div>
   );
};

export default Password;
