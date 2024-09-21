import { ReactNode } from "react";

import classes from "./Advantages.module.scss";

const Advantages = ({ className }: { className?: ReactNode }) => {
   return (
      <div className={`classes.advantages  ${className}`}>
         <div className="container">
            <div className={classes.advantages__inner}>
               <div className={classes.advantages__card}>
                  <img src="/icons/delivery.svg" alt="Free Shipping" />
                  <b>Free Shipping</b>
                  <small>Order above $200</small>
               </div>
               <div className={classes.advantages__card}>
                  <img src="/icons/money.svg" alt="Money-back" />
                  <b>Money-back</b>
                  <small>30 days guarantee</small>
               </div>
               <div className={classes.advantages__card}>
                  <img src="/icons/lock.svg" alt="Secure Payments" />
                  <b>Secure Payments</b>
                  <small>Secured by Stripe</small>
               </div>
               <div className={classes.advantages__card}>
                  <img src="/icons/call.svg" alt="24/7 Support" />
                  <b>24/7 Support</b>
                  <small>Phone and Email support</small>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Advantages;
