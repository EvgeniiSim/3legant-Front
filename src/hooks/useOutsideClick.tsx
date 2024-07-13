import { useEffect } from "react";

interface refProps {
   current: HTMLDivElement | null;
}

const useOutsideClick = (
   ref: refProps,
   callback: () => void,
   selectors?: string[]
) => {
   const handleClick = (e: Event) => {
      let canProceed = true;

      const target = e.target as HTMLElement;

      if (selectors && selectors.length > 0) {
         for (let i = 0; i < selectors.length; i++) {
            const selector = selectors[i];

            if (target.closest(selector)) {
               canProceed = false;
            }
         }
      }

      if (
         ref &&
         ref.current &&
         !ref.current.contains(e.target as HTMLDivElement) &&
         canProceed
      ) {
         callback();
      }
   };

   useEffect(() => {
      document.addEventListener("click", handleClick);

      return () => {
         document.removeEventListener("click", handleClick);
      };
   }, [selectors]);
};

export default useOutsideClick;
