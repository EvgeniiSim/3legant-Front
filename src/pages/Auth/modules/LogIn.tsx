import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Paths } from "../../../config/paths";

import { useSignInMutation } from "../../../store/auth/authApiSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { setIsLoaderActive } from "../../../store/loader/loaderSlice";

import styles from "../Auth.module.scss";

import useEmailOprions from "../hooks/useEmailOprions";
import usePasswordOptions from "../hooks/usePasswordOptions";
import getErrorMsg from "../../../utils/getErrorMsg";

import Input from "../../../components/UI/Inputs";
import Button from "../../../components/UI/Button/Button";
import persistUser from "../../../utils/persistUser";
import { setCredentials } from "../../../store/auth/authSlice";

const LogIn = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const [login, result] = useSignInMutation();

   const { email, emailValidate, isEmailError } = useEmailOprions();
   const { password, passwordValidate, isPasswordError } = usePasswordOptions();

   // Чекбокс "Remember me"
   const [checked, setChecked] = useState(false);

   // Если true то можно делать submit
   const canSend = !isEmailError && !isPasswordError && !!email && !!password;

   const sendForm = async () => {
      if (canSend) {
         try {
            const response = await login({ email, password });

            if (response.data) {
               dispatch(setCredentials(response.data.accessToken));
            }

            // Запоминаем пользователя, чтобы он делал login каждый раз
            if (checked) {
               persistUser();
            }
         } catch (err) {
            console.log(err);
         }
      }
   };

   // Когда мы авторизовались, то сразу переходим на главную страницу "Home"
   useEffect(() => {
      if (result.isSuccess) navigate("/");
   }, [result.isSuccess, navigate]);

   // Ошибка от сервера в случае неудачной отправки формы
   const errorMsg = useMemo(() => {
      return getErrorMsg(result.error);
   }, [result.error]);

   // Включение прелоудера во время отправки формы
   useEffect(() => {
      if (result.isLoading) {
         dispatch(setIsLoaderActive(true));
      } else {
         dispatch(setIsLoaderActive(false));
      }
   }, [result.isLoading, dispatch]);

   return (
      <form>
         <h2 className={styles.title}>Sign In</h2>
         <small className={styles.subtitle}>
            Don’t have an accout yet? <Link to={Paths.SIGNUP}>Sign Up</Link>
         </small>
         <div className={styles.inputs}>
            <Input.Text
               value={email}
               autoFocus={true}
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
               name="remember-me"
               id="remember-me">
               Remember me
            </Input.Checkbox>
         </div>
         <Button raduis="sm" onClick={sendForm} disabled={!canSend}>
            Sign In
         </Button>
         {result.error && (
            <span className={styles.errorMsg}>{errorMsg?.data.message}</span>
         )}
      </form>
   );
};

export default LogIn;
