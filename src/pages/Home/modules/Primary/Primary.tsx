import { Swiper, SwiperSlide } from "swiper/react";
import { ReactNode } from "react";
import { Keyboard, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

import SwiperButtons from "../../../../components/UI/SwiperButtons/SwiperButtons";

import classes from "./Primary.module.scss";

const Primary = () => {
   const pagination = {
      clickable: true,
      renderBullet: function (_: unknown, className: ReactNode) {
         return `<span class=${className}></span>`;
      },
   };
   return (
      <div className={classes.primary}>
         <div className="container">
            <div className={classes.primary__inner}>
               <div className={classes.swiper}>
                  <Swiper
                     modules={[Pagination, Keyboard, Autoplay]}
                     spaceBetween={50}
                     slidesPerView={1}
                     loop
                     autoplay
                     pagination={pagination}
                     keyboard>
                     <SwiperSlide className={classes.swiper__slide}>
                        <img
                           src="images/Home/Primary/slide-1.jpeg"
                           alt="Картинка"
                        />
                     </SwiperSlide>
                     <SwiperSlide className={classes.swiper__slide}>
                        <img
                           src="images/Home/Primary/slide-2.jpeg"
                           alt="Картинка"
                        />
                     </SwiperSlide>
                     <SwiperSlide className={classes.swiper__slide}>
                        <img
                           src="images/Home/Primary/slide-3.jpeg"
                           alt="Картинка"
                        />
                     </SwiperSlide>
                     <SwiperButtons className={classes.swiper__buttons} />
                  </Swiper>
               </div>
               <div className={classes.info}>
                  <div className={classes.info__left}>
                     Simply Unique <span>/</span>
                     <br />
                     Simply Better <span>.</span>
                  </div>
                  <div className={classes.info__right}>
                     <span>3legant</span> is a gift & decorations store based in
                     HCMC, Vietnam. Est since 2019.
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Primary;
