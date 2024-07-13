import { useState } from "react";
import { EMAIL_REG } from "../../../config/REG_EXP";

const useEmailOprions = () => {
   const [email, setEmail] = useState("");
   const [isEmailError, setIsEmailError] = useState(false);

   // Валидация email
   const emailValidate = (value: string) => {
      setEmail(value);

      if (EMAIL_REG.test(value)) {
         setIsEmailError(false);
      } else {
         setIsEmailError(true);
      }
   };
   return { email, emailValidate, isEmailError };
};

export default useEmailOprions;
