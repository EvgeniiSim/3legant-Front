import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export default function getErrorMsg(
   error: FetchBaseQueryError | SerializedError | undefined
):
   | {
        status: number;
        data: {
           message: string;
        };
     }
   | undefined {
   if (error) {
      const errorMsg = error as {
         status: number;
         data: { message: string };
      };
      return errorMsg;
   }
}
