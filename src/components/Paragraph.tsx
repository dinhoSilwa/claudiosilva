import clsx from "clsx";
import React, { ComponentProps } from "react";

interface IParagraph extends ComponentProps<'p'>{
  children : React.ReactNode;
  type?: 'sub-text' | 'normal-text'
}

export const Paragraph = ({children ,type, ...props}: IParagraph) =>{

  return (
    <>
      <p
        {...props}
        className={clsx(`font-source font-normal h-auto `,
          `xs:text-[16px] xs:px-8 xxs:leading-[24px]`,
          `md:w-[90%] md:text-[20px]`,
          {
          "text-center text-zinc-600 px-4" : type == 'sub-text'
          },
          {
            "xs:px-0 xxs:px-0 xxs:text-[18px] md:leading-[32px] font-source text-zinc-600 leading-[20px] text-left font-normal" : type == 'normal-text'
            }
          
          
        )}
      >
        {children}
      </p>
    </>
  );

}