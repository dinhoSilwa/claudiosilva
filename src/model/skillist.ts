export const skilllist = {
  javascript: "Javascript",
  typescript: "Typescript",
  html: "Html",
  css: "Css",
  tailwind: "Tailwind Css",
  reactjs: "React js",
  nextjs: "Next js",
  express: "Express",
  mongo: "Mongo Db",
} as const;

export type Tskilllist = typeof skilllist;

export interface Iprojects {
  name : string;
  description : string;
  skillUsed : Tskilllist
}

export interface IProjectsList{
  projects : Iprojects
}


export const projectList = {
  projects: [
    {
      name: "Project Teste 01",
      description: "É um projeto colaborativo que visa fornecer uma oportunidade para programadores contribuírem em um projeto real de desenvolvimento de frontend.",
      skillUsed: [skilllist.javascript, skilllist.css, skilllist.html],
    },
    {
      name: "Project Teste 02",
      description: "Pequena Descrição do Projeto 2",
      skillUsed: [skilllist.javascript, skilllist.express, skilllist.express,skilllist.express, skilllist.html],
    },
    {
      name: "Project Teste 03",
      description: "Pequena Descrição do Projeto 3",
      skillUsed: [skilllist.reactjs, skilllist.tailwind, skilllist.html],
    },
  ],
};
