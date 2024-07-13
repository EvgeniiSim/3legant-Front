import Button from "../Button/Button";

import classes from "./ProductCard.module.scss";
import { ReactNode, useMemo, useState } from "react";
import Counter from "../Counter/Counter";
import { Product } from "../../../types/ProductsTypes";

interface ProductProps {
   product: Product;
   className?: ReactNode;
}

const ProductCard = ({ product, className }: ProductProps) => {
   const [amount, setAmount] = useState(0);

   const stars = useMemo(() => {
      const starsArr = [];
      for (let i = 0; i < product.rating; i++) {
         starsArr.push(
            <img src="icons/star.svg" key={product._id + i} alt="Звезда" />
         );
      }

      return starsArr;
   }, []);

   return (
      <div className={`${classes.card} ${className}`}>
         <div className={classes.card__top}>
            <img src={product.images[0]} alt="Название товара" />
            <div className={classes.card__addToFavorites}>
               <img src="icons/unliked.svg" alt="Добавить в избранное" />
            </div>
            <div className={classes.card__tags}>
               {!!product.discount && (
                  <div className={classes.card__discount}>
                     -{product.discount}%
                  </div>
               )}
               {product.new && <div className={classes.card__new}>new</div>}
            </div>
         </div>
         <div className={classes.card__bottom}>
            {amount ? (
               <Counter amount={amount} setAmount={setAmount} />
            ) : (
               <Button
                  raduis="sm"
                  onClick={() => setAmount(1)}
                  className={classes.card__button}>
                  Add to cart
               </Button>
            )}
            <div className={classes.card__rating}>{stars}</div>
            <strong className={classes.card__title}>{product.title}</strong>
            <strong className={classes.card__price}>{product.price} $</strong>
         </div>
      </div>
   );
};

export default ProductCard;
