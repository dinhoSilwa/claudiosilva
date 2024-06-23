import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandMongodb, TbBrandNextjs, TbBrandReact, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { skilllist } from "../model/skillist";
import { Title } from "./Title";

const skillStore = {
  skill : [
    {name : skilllist.javascript, icon : <TbBrandJavascript />},
    {name : skilllist.typescript, icon : <TbBrandTypescript />},
    {name : skilllist.html, icon : <TbBrandHtml5 />},
    {name : skilllist.css, icon : <TbBrandCss3 />},
    {name : skilllist.tailwind, icon : <TbBrandTailwind />},
    {name : skilllist.reactjs, icon : <TbBrandReact />},
    {name : skilllist.nextjs, icon : <TbBrandNextjs />},
    {name : skilllist.express, icon : <SiExpress />},
    {name : skilllist.mongo, icon : <TbBrandMongodb />},
  ]
}

export const Skills = () =>{
  return(
    <>
    
    <section className="h-auto px-4 flex flex-col gap-8 py-10">
          <Title type="sub-title">Minhas Habilidades</Title>
          <article className="flex">
            <ul className="flex gap-2 flex-wrap h-auto py-4 gap-x-2">
              {skillStore.skill.map(({ name, icon }, index) => (
                <li
                  key={index}
                  className="font-source bg-zinc-200 hover:bg-zinc-300 cursor-pointer px-6 py-2 rounded-md
    flex gap-2 flex-row-reverse items-center h-10 text-zinc-600"
                >
                  <span>{name}</span>
                  <span className="py-1 grid place-content-center">{icon}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>
    </>
  )
}