import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

interface Ibutton extends ComponentProps<"button"> {
  children: ReactNode;
}

export const ButtonCTA = ({ children, ...props }: Ibutton) => {
  return (
    <button
      {...props}
     
      className={clsx(
        `h-10 bg-purple-600 px-8 rounded-md w-[60%] font-source text-zinc-100 text-[14px] font-bold hover:bg-purple-700`,
        `sm:h-16 sm:text-[20px]`,
        `md:text-[24px]`
      )}
    >
      {children}
    </button>
  );
};
