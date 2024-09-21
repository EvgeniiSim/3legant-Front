import classNames from "classnames/bind";
import styles from "../Profile.module.scss";
const cn = classNames.bind(styles);

import Input from "../../../components/UI/Inputs";
import { useAppSelector } from "../../../hooks/reduxHooks";

function Account() {
   const userName = useAppSelector((state) => state.user.name);
   const userEmail = useAppSelector((state) => state.user.email);

   return (
      <div className={cn("wrap")}>
         <h3 className={cn("title")}>Account Dateils</h3>
         <div className={cn("content")}>
            <Input.Text
               placeholder="Name"
               value={userName}
               label="Name"
               bordered
            />
            <Input.Text
               placeholder="Email"
               value={userEmail}
               label="Email"
               bordered
            />
         </div>
      </div>
   );
}

export default Account;
