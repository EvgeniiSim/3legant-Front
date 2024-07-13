import { useState } from "react";
import { PASSWORD_REG } from "../../../config/REG_EXP";

const usePasswordOptions = () => {
   const [password, setPassword] = useState("");
   const [isPasswordError, setIsPasswordError] = useState(false);

   // Валидация password
   const passwordValidate = (value: string) => {
      setPassword(value);

      if (PASSWORD_REG.test(value)) {
         setIsPasswordError(false);
      } else {
         setIsPasswordError(true);
      }
   };
   return { password, isPasswordError, passwordValidate };
};

export default usePasswordOptions;
