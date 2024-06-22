import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandMongodb, TbBrandNextjs, TbBrandReact, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { Title } from "./Title";
import { Paragraph } from "./Paragraph";
import { ButtonCTA } from "./Button";
import { skilllist } from "../model/skillist";

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



export const AboutMe = () =>{
  return(
    <>
    
    <section className="h-auto flex flex-col justify-start pt-20 gap-12 md:py-20">
        <Title type="title">{"Sobre Min".toLocaleUpperCase()}</Title>
        <Paragraph type="sub-text">
          Aqui você encontrará mais informações sobre mim, o que faço e minhas
          habilidades atuais principalmente em termos de programação e
          tecnologia
        </Paragraph>

        <section className="px-4 font-source flex flex-col gap-[32px] md:gap-[40px] md:px-8 h-auto">
          <Title type="sub-title">Quem Eu sou ?</Title>
          <article className="flex flex-col gap-[16px]  ">
            <Paragraph type="normal-text">
              Como desenvolvedor frontend freelancer, acumulei mais de 3 anos de
              experiência entregando soluções de alta qualidade para uma
              variedade de projetos. Minha abordagem é centrada na criação de
              interfaces intuitivas e funcionais, utilizando habilidades em
              <strong>
                {" "}
                JavaScript, React, Next.js , etc.., e design de UI/UX
              </strong>{" "}
              para garantir resultados excepcionais.
            </Paragraph>
            <Paragraph type="normal-text">
              Minha jornada profissional é marcada pelo compromisso com a
              excelência e pela <strong>busca contínua por inovação</strong>. Ao
              longo dos anos, trabalhei com diversos clientes e empresas,
              colaborando de forma flexível e adaptável para atender às
              necessidades específicas de cada projeto.{" "}
            </Paragraph>
            <Paragraph type="normal-text">
              Seja para um projeto freelance desafiador ou para integrar equipes
              corporativas, estou pronto para contribuir com meu expertise em
              frontend. Valorizo a comunicação transparente e a colaboração
              próxima com clientes e parceiros, garantindo entregas que não
              apenas atendem, mas excedem expectativas.{" "}
            </Paragraph>
          </article>
          <ButtonCTA size="medium">Contato</ButtonCTA>
        </section>

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
      </section>
    </>
  )
}