import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { useSignUpMutation } from "../../../store/auth/authApiSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setIsLoaderActive } from "../../../store/loader/loaderSlice";

import styles from "../Auth.module.scss";

import { Paths } from "../../../config/paths";

import useEmailOprions from "../hooks/useEmailOprions";
import usePasswordOptions from "../hooks/usePasswordOptions";

import Input from "../../../components/UI/Inputs";
import Button from "../../../components/UI/Button/Button";
import getErrorMsg from "../../../utils/getErrorMsg";

const Reg = () => {
   const dispatch = useAppDispatch();
   const [reg, result] = useSignUpMutation();

   const [username, setUsername] = useState("");

   const { email, emailValidate, isEmailError } = useEmailOprions();
   const { password, passwordValidate, isPasswordError } = usePasswordOptions();

   // Чекбокс "Agreement"
   const [checked, setChecked] = useState(false);

   const [isSent, setIsSent] = useState(false);

   // Если true то можно делать submit
   const canSend =
      !isEmailError && !isPasswordError && !!email && !!password && checked;

   // Ошибка от сервера в случае неудачной отправки формы
   const errorMsg = useMemo(() => {
      return getErrorMsg(result.error);
   }, [result.error]);

   const sendForm = async () => {
      if (canSend) {
         try {
            await reg({ email, password, username });
         } catch (err) {
            console.log(err);
         }
      }
   };

   // Когда форма успешно отправлена, то мы показываем это Юзеру
   useEffect(() => {
      if (result.isSuccess) setIsSent(true);
   }, [result.isSuccess]);

   // Включение прелоудера во время отправки формы
   useEffect(() => {
      if (result.isLoading) {
         dispatch(setIsLoaderActive(true));
      } else {
         dispatch(setIsLoaderActive(false));
      }
   }, [result.isLoading, dispatch]);

   return (
      <>
         {/* Форма для регестарции */}
         {!isSent && (
            <form>
               <h2 className={styles.title}>Sign Up</h2>
               <small className={styles.subtitle}>
                  Already have an account?{" "}
                  <Link to={Paths.SIGNIN}>Sign in</Link>
               </small>
               <div className={styles.inputs}>
                  <Input.Text
                     value={username}
                     autoFocus={true}
                     onChange={(e) => setUsername(e.target.value)}
                     placeholder="Username"
                  />
                  <Input.Text
                     value={email}
                     onChange={(e) => emailValidate(e.target.value)}
                     placeholder="Your email address"
                     isError={isEmailError}
                     errorText="Invalid email address"
                  />
                  <Input.Password
                     value={password}
                     onChange={(e) => passwordValidate(e.target.value)}
                     placeholder="Password"
                     isError={isPasswordError}
                     errorText="Minimum eight characters, at least one letter and one number"
                  />
                  <Input.Checkbox
                     checked={checked}
                     setChecked={setChecked}
                     name="agrement"
                     id="agrement">
                     I agree with Privacy Policy and Terms of Use
                  </Input.Checkbox>
               </div>
               <Button raduis="sm" onClick={sendForm} disabled={!canSend}>
                  Sign In
               </Button>
               {result.error && (
                  <span className={styles.errorMsg}>
                     {errorMsg?.data.message}
                  </span>
               )}
            </form>
         )}

         {/* Текст о том, что письмо отправилось */}
         {isSent && (
            <div className={styles.sent}>
               <strong>Verification was sent to your email!</strong>
               <Link to={Paths.SIGNIN}>Sign in</Link>
            </div>
         )}
      </>
   );
};

export default Reg;
