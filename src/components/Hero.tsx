import frontEndGif from "../assets/frontend.gif";
import { ButtonCTA } from "./Button";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";

export const Hero = () => {
  return (
    <>
      <section className="bg-hero flex flex-col justify-start gap-[32px] items-center pt-20 bg-zinc-200 h-auto xs:pt-20 xs:pb-20 xxs:gap-[40px]">
        <img
          src={frontEndGif}
          className="z-20 w-[50%] h-auto sm:w-[60%] md:w-[40%] lg:[30%]"
        />
        <h2 className="xs:text-[36px] leading-none font-source font-extrabold text-[28px] flex items-center text-center justify-center text-zinc-950 tracking-wider">
          OLÁ, EU SOU O <br></br>CLAUDIO SILVA
        </h2>
        <Paragraph type="sub-text">
          Um desenvolvedor da Web orientado a resultados, construindo e
          gerenciando sites e aplicativos da Web que levam ao sucesso do produto
          geral
        </Paragraph>

        <ButtonCTA>PROJETOS</ButtonCTA>
      </section>

      <section className="h-screen flex flex-col justify-start pt-20 gap-12">
        <Title type="title">{"Sobre Min".toLocaleUpperCase()}</Title>
        <Paragraph type="sub-text">
          Aqui você encontrará mais informações sobre mim, o que faço e minhas
          habilidades atuais principalmente em termos de programação e
          tecnologia
        </Paragraph>

        <section className="px-4 font-source flex flex-col gap-[32px] h-auto">
          <Title type="sub-title">Quem Eu sou ?</Title>
          <article className="flex flex-col gap-[16px]">
            <Paragraph type="normal-text">
              Como desenvolvedor frontend freelancer, acumulei mais de 3 anos de
              experiência entregando soluções de alta qualidade para uma
              variedade de projetos. Minha abordagem é centrada na criação de
              interfaces intuitivas e funcionais, utilizando habilidades em
              <strong> JavaScript, React, Next.js , etc.., e design de UI/UX</strong> para garantir
              resultados excepcionais.
            </Paragraph>
            <Paragraph type="normal-text">
              Minha jornada profissional é marcada pelo compromisso com a
              excelência e pela <strong>busca contínua por inovação</strong>. Ao longo dos anos,
              trabalhei com diversos clientes e empresas, colaborando de forma
              flexível e adaptável para atender às necessidades específicas de
              cada projeto.{" "}
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

        <section className="h-screen bg-red-400">
          oippqwiqwpo iqpwoi pqowip oqw q
        </section>
      </section>
    </>
  );
};
