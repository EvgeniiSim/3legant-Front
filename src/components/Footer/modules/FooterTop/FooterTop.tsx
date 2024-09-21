import classes from "./FooterTop.module.scss";

const FooterTop = () => {
   return (
      <div className={classes.footer}>
         <div className={classes.footer__inner}>
            <h2 className={classes.footer__title}>Join Our Newsletter</h2>
            <p className={classes.footer__subtitle}>
               Sign up for deals, new products and promotions
            </p>
            <div className={classes.footer__inputWrap}>
               <input
                  type="text"
                  name="email"
                  placeholder="Email address"
                  id="footer-email-signup"
               />
               <img src="/icons/mail.svg" alt="Signup" />
               <button>Sign up</button>
            </div>
         </div>
         <img
            className={classes.footer__banner}
            src="/images/Footer/banner.png"
            alt="Join Our Newsletter"
         />
      </div>
   );
};

export default FooterTop;
