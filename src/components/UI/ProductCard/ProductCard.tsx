import Button from "../Button/Button";

import classes from "./ProductCard.module.scss";
import { ReactNode, useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import { Product } from "../../../types/ProductsTypes";
import { useAppSelector } from "../../../hooks/reduxHooks";
import {
   useAddToFavoriteMutation,
   useRemoveFromFavoriteMutation,
} from "../../../store/favorite/favoriteApiSlice";

interface ProductProps {
   product: Product;
   className?: ReactNode;
}

const ProductCard = ({ product, className }: ProductProps) => {
   const [amount, setAmount] = useState(0);
   const [isFavorite, setIsFavorite] = useState(false);

   const userFavorites = useAppSelector((state) => state.user.favorite);

   const [addFavorite, { isSuccess: isAddSuccess }] =
      useAddToFavoriteMutation();
   const [removeFavorite, { isSuccess: isRemoveSuccess }] =
      useRemoveFromFavoriteMutation();

   const stars = () => {
      const starsArr = [];
      for (let i = 0; i < product.rating; i++) {
         starsArr.push(
            <img src="/icons/star.svg" key={product._id + i} alt="Звезда" />
         );
      }

      return starsArr;
   };

   useEffect(() => {
      if (userFavorites.includes(product._id)) {
         setIsFavorite(true);
      }
   }, []);

   const onFavoriteChange = async (type: "add" | "remove") => {
      if (type === "add") {
         const response = await addFavorite(product._id);

         if (!response.error) {
            setIsFavorite(true);
         }
      }

      if (type === "remove") {
         const response = await removeFavorite(product._id);

         if (!response.error) {
            setIsFavorite(false);
         }
      }
   };

   return (
      <div className={`${classes.card} ${className}`}>
         <div className={classes.card__top}>
            <img src={product.images[0]} alt="Название товара" />
            {isFavorite ? (
               <div
                  onClick={() => onFavoriteChange("remove")}
                  className={classes.card__addToFavorites}>
                  <img src="/icons/liked.svg" alt="Добавить в избранное" />
               </div>
            ) : (
               <div
                  onClick={() => onFavoriteChange("add")}
                  className={classes.card__addToFavorites}>
                  <img src="/icons/unliked.svg" alt="Добавить в избранное" />
               </div>
            )}
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
               <Counter
                  amount={amount}
                  onAdd={() => setAmount((prev) => prev + 1)}
                  onRemove={() => setAmount((prev) => prev - 1)}
               />
            ) : (
               <Button
                  raduis="sm"
                  onClick={() => setAmount((prev) => prev + 1)}
                  className={classes.card__button}>
                  Add to cart
               </Button>
            )}
            <div className={classes.card__rating}>{stars()}</div>
            <strong className={classes.card__title}>{product.title}</strong>
            <strong className={classes.card__price}>{product.price} $</strong>
         </div>
      </div>
   );
};

export default ProductCard;
