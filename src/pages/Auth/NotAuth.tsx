import { useNavigate } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Auth.module.scss";
import { Paths } from "../../config/paths";
const cn = classNames.bind(styles);

const NotAuth = () => {
   const navigate = useNavigate();

   return (
      <div className={cn("not-auth")} onClick={() => navigate(Paths.HOME)}>
         You are not authorized
         <br />
         Go home
      </div>
   );
};
export default NotAuth;
