import clsx from "clsx";
import { ComponentProps } from "react";

interface ITitle extends ComponentProps<"div"> {
  children: React.ReactNode;
  type?: "sub-title" | "title" | "project-title" | "footer-title";
  
}

export const Title = ({ children, type, ...props }: ITitle) => {
  return (
    <>
      <div {...props} className="flex flex-col items-center justify-center">
        <h2
          className={clsx(
            "font-source font-extrabold tracking-widest justify-center",
            {
              "text-[24px] flex items-center text-center text-zinc-900": type === "title",
              "w-full first-letter:uppercase text-[18px] uppercase text-zinc-900":
                type === "sub-title",
              " text-purple-800 text-[24px] flex items-center text-center tracking-normal":
                type === "project-title",
                "text-zinc-100 text-large" : type === "footer-title"
            }
          )}
        >
          {children}
        </h2>
        <div
          className={clsx("w-16 bg-purple-600 h-2 rounded-full", {
            hidden: type === "sub-title" || type === "project-title" ||  type === "footer-title",
          })}
        ></div>
      </div>
    </>
  );
};
