import { MenuIcon, X } from "lucide-react";
import imgLogo from "../../public/143217996.png";
import { useState } from "react";
import clsx from "clsx";

const manuOptions = [
  { item: "Home", action: "/" },
  { item: "Sobre", action: "/sobre" },
  { item: "Projetos", action: "/projetos" },
];

export const Menu = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="h-20 border flex items-center justify-between bg-zinc-50 max-w-full px-4 shadow-md lg:h-24">
        <div className="flex items-center gap-2">
          <img
            src={imgLogo}
            width={36}
            height={36}
            alt=""
            className="rounded-full"
          />
          <h2 className="font-extrabold font-source text-[16px] lg:text-[18px] text-slate-800 hover:text-purple-800">
            CLAUDIO SILVA
          </h2>
        </div>

        <nav className="md:relative">
        {
          isOpen ? <MenuIcon onClick={()=>setIsOpen(!isOpen)} className="md:hidden"/> : <X className="md:hidden" onClick={()=>setIsOpen(!isOpen)}/>
        }
      <ul className={clsx(isOpen ? "hidden md:flex md:w-[400px] md:h-20 md:flex-row md:static md:items-center md:bg-zinc-50" : 'flex flex-col justify-center items-end absolute right-0 top-20 w-screen h-64 md:w-[400px] md:h-20 md:flex-row md:static md:items-center md:bg-zinc-50 bg-slate-100 shadow px-4 ' )}>
            {manuOptions.map(({ item }, index) => (
              <>
                <li
                  key={index}
                  className=" flex items-center justify-end font-source font-extrabold text-zinc-700 text-[12px] hover:text-purple-600 tracking-widest w-11/12 h-20 text-center lg:text-[14px]"
                >
                  {item.toLocaleUpperCase()}
                </li>
              </>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
