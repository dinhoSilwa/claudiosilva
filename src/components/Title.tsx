import clsx from "clsx";
import { ComponentProps } from "react";

interface ITitle extends ComponentProps<"div"> {
  children: React.ReactNode;
  type?: "sub-title" | "title" | 'project-title';
}

export const Title = ({ children, type, ...props }: ITitle) => {
  return (
    <>
      <div {...props} className="flex flex-col items-center justify-center">
        <h2
          className={clsx(
            "font-source font-extrabold tracking-widest justify-center text-zinc-900",
            {
              "text-[24px] flex items-center text-center": type === "title",
            },
            {
              "w-full first-letter:uppercase text-[18px] uppercase":
                type === "sub-title",
            },
            {
              " text-purple-800 text-[24px] flex items-center text-center tracking-normal": type === "project-title",
            },
          )}
        >
          {children}
        </h2>
        <div
          className={clsx("w-16 bg-purple-600 h-2 rounded-full", {
            hidden: type === "sub-title"
          },
          {
            hidden: type === "project-title"
          },
        )}
        ></div>
      </div>
    </>
  );
};
