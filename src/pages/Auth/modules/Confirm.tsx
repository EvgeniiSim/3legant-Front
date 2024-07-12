import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useConfirmMutation } from "../../../store/auth/authApiSlice";
import { Paths } from "../../../config/paths";

const Confirm = () => {
   const navigate = useNavigate();
   const { token } = useParams();
   const [confirm, result] = useConfirmMutation();

   useEffect(() => {
      (async () => {
         try {
            if (token) confirm(token);
            if (result.isSuccess) navigate(Paths.SIGNIN);
         } catch (err) {
            console.log(err);
         }
      })();
   });
   return "";
};

export default Confirm;
