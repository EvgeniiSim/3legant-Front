import { Dispatch, ReactNode } from "react";

import clases from "./Counter.module.scss";

interface CounterProps {
   amount: number;
   setAmount: Dispatch<React.SetStateAction<number>>;
   className?: ReactNode;
}

const Counter = ({ amount, setAmount, className }: CounterProps) => {
   return (
      <div className={`${clases.counter} ${className ? className : ""}`}>
         <div
            className={clases.counter__minus}
            onClick={() => setAmount((prev) => prev - 1)}>
            <img src="/icons/counter/minus.svg" alt="Убрать" />
         </div>
         {amount}
         <div
            className={clases.counter__plus}
            onClick={() => setAmount((prev) => prev + 1)}>
            <img src="/icons/counter/plus.svg" alt="Добавить" />
         </div>
      </div>
   );
};

export default Counter;
