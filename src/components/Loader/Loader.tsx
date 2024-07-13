import classNames from "classnames/bind";
import styles from "./Loader.module.scss";
const cn = classNames.bind(styles);

const Loader = () => {
   return (
      <div className={cn("loader")}>
         <div className={cn("loader__dot")}></div>
         <div className={cn("loader__dot")}></div>
         <div className={cn("loader__dot")}></div>
      </div>
   );
};

export default Loader;
