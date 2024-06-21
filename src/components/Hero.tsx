import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandMongodb, TbBrandNextjs, TbBrandReact, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";
import frontEndGif from "../assets/frontend.gif";
import { ButtonCTA } from "./Button";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";
import { SiExpress } from "react-icons/si";
import { useEffect } from "react";

const skills = [
  {name : 'Javascript', icon : <TbBrandJavascript />},
  {name : 'Typescript', icon : <TbBrandTypescript />},
  {name : 'Html', icon : <TbBrandHtml5 />},
  {name : 'Css', icon : <TbBrandCss3 />},
  {name : 'Tailwind Css', icon : <TbBrandTailwind />},
  {name : 'React js', icon : <TbBrandReact />},
  {name : 'Next js', icon : <TbBrandNextjs />},
  {name : 'Express', icon : <SiExpress />},
  {name : 'Mongo Db', icon : <TbBrandMongodb />},

]

const projectSkills = skills.map((skill)=>{
  return skill
})


export const Hero = () => {
  
useEffect(()=>{
  console.log(projectSkills)
  },[])
  
  return (
    <>
      <section className="bg-hero flex flex-col justify-start gap-[32px] items-center pt-20 bg-zinc-200 h-auto xs:pt-20 xs:pb-20 xxs:gap-[40px]">
        <TbBrandHtml5 />
        <img
          src={frontEndGif}
          className="z-20 w-[50%] h-auto sm:w-[60%] md:hidden lg:[30%]"
        />
        <h2 className="xs:text-[36px] md:text-[44px] leading-none md:leading-[56px] font-source font-extrabold text-[28px] flex items-center text-center justify-center text-zinc-950 tracking-wider">
          OLÁ, EU SOU O <br></br>CLAUDIO SILVA
        </h2>
        <Paragraph type="sub-text">
          Um desenvolvedor da Web orientado a resultados, construindo e
          gerenciando sites e aplicativos da Web que levam ao sucesso do produto
          geral
        </Paragraph>

        <ButtonCTA>PROJETOS</ButtonCTA>
      </section>

      <section className="h-screen flex flex-col justify-start pt-20 gap-12 md:py-20">
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
          <ButtonCTA>Contato</ButtonCTA>
        </section>

        <section className="h-screen px-4 flex flex-col gap-8 py-10">
          <Title type="sub-title">Minhas Habilidades</Title>
          <article className="flex">
            <ul className="flex gap-2 flex-wrap h-auto py-4 gap-x-2">
              {skills.map(({ name, icon }, index) => (
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
  );
};
