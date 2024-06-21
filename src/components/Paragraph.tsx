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
        className={clsx(`font-source font-normal `,
          `xs:text-[16px] xs:px-8 xxs:leading-[24px]`,
          {
          "text-center text-zinc-600 px-4" : type == 'sub-text'
          },
          {
            "xs:px-0 xxs:px-0 font-source text-zinc-500 leading-[20px] text-left font-semibold" : type == 'normal-text'
            }
          
          
        )}
      >
        {children}
      </p>
    </>
  );

}