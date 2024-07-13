import { Swiper, SwiperSlide } from "swiper/react";
import {
   Autoplay,
   FreeMode,
   Keyboard,
   Mousewheel,
   Scrollbar,
} from "swiper/modules";
import CustomLink from "../../../../components/UI/CustomLink/CustomLink";
import { useGetProductsQuery } from "../../../../store/products/productsApiSlice";
import ProductCard from "../../../../components/UI/ProductCard/ProductCard";

import classes from "./Products.module.scss";
import "swiper/css";
import "swiper/css/scrollbar";

const Products = () => {
   const { data } = useGetProductsQuery(
      { limit: undefined, page: undefined },
      {
         refetchOnReconnect: true,
      }
   );

   return (
      <div className={classes.products}>
         <div className="container">
            <div className={classes.products__inner}>
               <div className={classes.products__header}>
                  <h2 className={classes.products__title}>New Arrivals</h2>
                  <CustomLink to="shop">More Products</CustomLink>
               </div>
               <div>
                  <Swiper
                     className={classes.products__swiper}
                     spaceBetween={24}
                     modules={[
                        FreeMode,
                        Keyboard,
                        Mousewheel,
                        Autoplay,
                        Scrollbar,
                     ]}
                     slidesPerView={1}
                     keyboard
                     scrollbar={{
                        dragClass: classes.products__swiperDrag,
                     }}
                     autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                     }}
                     breakpoints={{
                        420: {
                           slidesPerView: 2,
                        },
                        768: {
                           slidesPerView: 3,
                        },
                        1100: {
                           slidesPerView: 4,
                        },
                     }}
                     mousewheel
                     freeMode>
                     {data?.products.map((product) => (
                        <SwiperSlide
                           className={classes.products__slider}
                           key={product._id}>
                           <ProductCard
                              className={classes.products__product}
                              product={product}
                           />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Products;
