import { FC, ReactNode } from "react";
import { useSwiper } from "swiper/react";

import classes from "./SwiperButtons.module.scss";

const SwiperButtons: FC<{ className?: ReactNode }> = ({ className }) => {
   const swiper = useSwiper();
   return (
      <div className={`${classes.buttons} ${className ? className : ""}`}>
         <div
            className={`${classes.button} ${classes._next}`}
            onClick={() => swiper.slidePrev()}>
            <img src="/icons/swiper-buttons/arrow.svg" alt="Назад" />
         </div>
         <div
            className={`${classes.button} ${classes._prev}`}
            onClick={() => swiper.slideNext()}>
            <img src="/icons/swiper-buttons/arrow.svg" alt="Вперед" />
         </div>
      </div>
   );
};

export default SwiperButtons;
