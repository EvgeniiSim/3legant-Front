import classes from "./Categories.module.scss";

import CustomLink from "../../../../components/UI/CustomLink/CustomLink";

const Categories = () => {
   return (
      <div className={classes.categories}>
         <div className="container">
            <div className={classes.categories__inner}>
               <div className={classes.card}>
                  <img
                     src="/images/Home/Categories/category-2.jpg"
                     alt="Джинсы"
                     className={classes.card__img}
                  />
                  <div className={classes.card__info}>
                     <b>jeans</b>
                     <CustomLink to="shop">Shop Now</CustomLink>
                  </div>
               </div>
               <div className={classes.card}>
                  <img
                     src="/images/Home/Categories/category-1.jpeg"
                     alt="Крассоки"
                     className={classes.card__img}
                  />
                  <div className={classes.card__info}>
                     <b>Sneakers</b>
                     <CustomLink to="shop">Shop Now</CustomLink>
                  </div>
               </div>
               <div className={classes.card}>
                  <img
                     src="/images/Home/Categories/category-3.jpg"
                     alt="Худи"
                     className={classes.card__img}
                  />
                  <div className={classes.card__info}>
                     <b>hoodie</b>
                     <CustomLink to="shop">Shop Now</CustomLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Categories;
