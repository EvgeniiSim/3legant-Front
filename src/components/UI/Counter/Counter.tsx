import { ReactNode } from "react";

import clases from "./Counter.module.scss";

interface CounterProps {
   amount: number;
   className?: ReactNode;

   onAdd: () => void;
   onRemove: () => void;
}

const Counter = ({ amount, onAdd, onRemove, className }: CounterProps) => {
   return (
      <div className={`${clases.counter} ${className ? className : ""}`}>
         <div className={clases.counter__minus} onClick={onRemove}>
            <img src="/icons/counter/minus.svg" alt="Убрать" />
         </div>
         {amount}
         <div className={clases.counter__plus} onClick={onAdd}>
            <img src="/icons/counter/plus.svg" alt="Добавить" />
         </div>
      </div>
   );
};

export default Counter;
