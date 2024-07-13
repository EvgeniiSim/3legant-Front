import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useConfirmQuery } from "../../../store/auth/authApiSlice";
import { Paths } from "../../../config/paths";

const Confirm = () => {
   const navigate = useNavigate();
   const { token } = useParams();
   const { isSuccess, isError, error } = useConfirmQuery(token ? token : "", {
      refetchOnMountOrArgChange: true,
   });

   useEffect(() => {
      (async () => {
         if (token) {
            try {
               confirm(token);
            } catch (err) {
               console.log(err);
            }
         }
      })();
   }, [token]);

   useEffect(() => {
      if (isSuccess) navigate(Paths.SIGNIN);
      if (isError) {
         alert(`Email varification failed:, ${error}`);
         navigate(Paths.SIGNIN);
      }
   }, [isSuccess, isError, error, navigate]);
   return "";
};

export default Confirm;
