import { useEffect, useState } from "react";

import classNames from "classnames/bind";
import styles from "../Profile.module.scss";
const cn = classNames.bind(styles);

import Input from "../../../components/UI/Inputs";
import { useAppSelector } from "../../../hooks/reduxHooks";
import Button from "../../../components/UI/Button/Button";
import { useChangeUserInfoMutation } from "../../../store/user/userApiSlice";

function Account() {
   const [save, { isSuccess }] = useChangeUserInfoMutation();

   const userName = useAppSelector((state) => state.user.name);
   const userEmail = useAppSelector((state) => state.user.email);

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");

   useEffect(() => {
      setName(userName);
      setEmail(userEmail);
   }, [userName, userEmail]);

   const onSave = async () => {
      await save({ username: name, email });
   };

   return (
      <div className={cn("wrap")}>
         <h3 className={cn("title")}>Account Dateils</h3>
         <div className={cn("content")}>
            <Input.Text
               placeholder="Name"
               onChange={(e) => setName(e.target.value)}
               value={name}
               label="Name"
               bordered
            />
            <Input.Text
               placeholder="Email"
               onChange={(e) => setEmail(e.target.value)}
               value={email}
               label="Email"
               bordered
            />
            <Button onClick={onSave}>Save changes</Button>

            {isSuccess && <span>Сохранено</span>}
         </div>
      </div>
   );
}

export default Account;
