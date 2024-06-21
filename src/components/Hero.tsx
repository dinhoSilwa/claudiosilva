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

        <section className="px-4 font-source flex flex-col gap-6">
          <Title type="sub-title">Quem Eu sou ?</Title>
          <article className="flex flex-col gap-4 ">
            <Paragraph type="normal-text">
              Sou um <strong>desenvolvedor Web focado em Frontend</strong>,
              construindo e gerenciando o Front-end de sites e aplicações Web
              que levam ao sucesso do produto geral. Confira alguns dos meus
              trabalhos na seção Projetos.
            </Paragraph>
            <Paragraph type="normal-text">
              Também gosto de compartilhar conteúdo relacionado ao que aprendi
              ao longo dos anos em Desenvolvimento Web para que possa ajudar
              outras pessoas da Comunidade de Desenvolvimento. Sinta-se à
              vontade para se conectar ou me seguir no Linkedin e no Instagram,
              onde posto conteúdo útil relacionado ao desenvolvimento e
              programação web
            </Paragraph>
            <Paragraph type="normal-text">
              Estou aberto a oportunidades de trabalho onde possa contribuir,
              aprender e crescer. Se tiver uma boa oportunidade que corresponda
              às minhas competências e experiência,{" "}
              <strong>não hesite em contactar-me.</strong>
            </Paragraph>
            <ButtonCTA>
              Contato
            </ButtonCTA>
          </article>
        </section>
        
        <section className="h-screen bg-red-400">
          oippqwiqwpo iqpwoi  pqowip  oqw q
        </section>
      </section>
    </>
  );
};
