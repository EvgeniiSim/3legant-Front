import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../../components/UI/Inputs";
import styles from "../Auth.module.scss";
import Button from "../../../components/UI/Button/Button";
import { Paths } from "../../../config/paths";

const LogIn = () => {
   const [name, setName] = useState("");
   const [surname, setSurname] = useState("");

   return (
      <form>
         <h2 className={styles.title}>Sign In</h2>
         <small className={styles.subtitle}>
            Don’t have an accout yet? <Link to={Paths.SIGNUP}>Sign Up</Link>
         </small>
         <div className={styles.inputs}>
            <Input.Text
               value={name}
               autoFocus={true}
               onChange={(e) => setName(e.target.value)}
               placeholder="Your usernam or email address"
            />
            <Input.Password
               value={surname}
               onChange={(e) => setSurname(e.target.value)}
               placeholder="Username"
            />
            <Input.Checkbox name="remember-me" id="remember-me">
               Remember me
            </Input.Checkbox>
         </div>
         <Button raduis="sm">Sign In</Button>
      </form>
   );
};

export default LogIn;
