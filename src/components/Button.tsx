import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

interface Ibutton extends ComponentProps<"button"> {
  children: ReactNode;
  size? : "small" | "medium" | "large";
}

export const ButtonCTA = ({ children, size, ...props }: Ibutton) => {
  return (
    <button
      {...props}
     
      className={clsx(
        ` rounded-md font-source text-zinc-100 font-bold bg-purple-600 hover:bg-purple-700`,
         
        {
          "flex justify-center items-center w-[30%] h-10 text-medium tracking-widest" : size === "small"
        },
        {
          "flex justify-center items-center w-[55%] h-14 px-8 text-large tracking-widest" : size === "medium"
        },
        {
          "flex justify-center items-center w-[70%] h-14 px-8 text-extra-large tracking-widest" : size === "large"
        },

      
      )}
    >
      {children}
    </button>
  );
};
