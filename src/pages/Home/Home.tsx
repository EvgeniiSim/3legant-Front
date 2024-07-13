import Advantages from "../../components/sections/Advantages/Advantages";
import Categories from "./modules/Categories/Categories";
import Primary from "./modules/Primary/Primary";
import Products from "./modules/Products/Products";

import classes from './Home.module.scss'

const Home = () => {
   return (
      <>
         <Primary />
         <Categories />
         <Products />
         <Advantages className={classes.advantages} />
      </>
   );
};

export default Home;
