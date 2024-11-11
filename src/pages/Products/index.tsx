import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cn = classNames.bind(styles);

import { useGetProductsQuery } from "../../store/products/productsApiSlice";
import ProductCard from "../../components/UI/ProductCard/ProductCard";

const ProductsPage = () => {
   const { data } = useGetProductsQuery({ limit: undefined, page: undefined });

   return (
      <div className="container">
         <div className={cn("products")}>
            {data &&
               data.products.map((product) => (
                  <ProductCard product={product} />
               ))}
         </div>
      </div>
   );
};
export default ProductsPage;
