import { Dispatch, ReactNode } from "react";

import classes from "./Tabs.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

interface TabsProps {
   tabsItems: string[];
   currentTab: string;
   setCurrentTab: Dispatch<React.SetStateAction<string>>;
   children: ReactNode;
   className?: ReactNode;
}

const Tabs = ({
   tabsItems,
   currentTab,
   setCurrentTab,
   children,
   className = null,
}: TabsProps) => {
   return (
      <div className={`${classes.wrapper} ${className}`}>
         <div className={classes.tabs}>
            {tabsItems.map((item: string, index: number) => {
               const labelClasses = cx({
                  tab: true,
                  _active: item === currentTab,
               });
               return (
                  <div
                     key={index}
                     className={labelClasses}
                     onClick={() => setCurrentTab(item)}>
                     {item}
                  </div>
               );
            })}
         </div>
         {tabsItems.map((item: string, index: number) => {
            const bodyClasses = cx({
               body: true,
               _open: item === currentTab,
            });
            return (
               <div key={index} className={bodyClasses}>
                  {children}
               </div>
            );
         })}
      </div>
   );
};

export default Tabs;
