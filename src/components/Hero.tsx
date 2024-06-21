import frontEndGif from '../assets/frontend.gif'
import { ButtonCTA } from './Button';

export const Hero = () =>{
  return (
    <>
      <section className="bg-hero flex flex-col justify-start gap-[32px] items-center pt-20 xs:pt-20 xs:pb-20 bg-zinc-200 h-auto">
        <img
          src={frontEndGif}
          className="z-20 w-[50%] h-auto sm:w-[60%] md:w-[40%] lg:[30%]"
        />
        <h2 className="xs:text-[36px] font-source font-extrabold text-[28px] flex items-center text-center justify-center text-zinc-950 tracking-wider">
          OLÁ, EU SOU O <br></br>CLAUDIO SILVA
        </h2>
        <p className="font-source text-zinc-600 leading-[20px] xs:leading-[28px] text-[14px] xs:text-[20px] xs:px-8 px-4 text-center font-semibold ">
          Um desenvolvedor da Web orientado a resultados, construindo e
          gerenciando sites e aplicativos da Web que levam ao sucesso do produto
          geral
        </p>
<ButtonCTA>
  PROJETOS
</ButtonCTA>
      </section>

      <section className="h-screen flex flex-col justify-start pt-20 gap-12">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-source font-semibold tracking-widest text-[24px] flex items-center text-center justify-center text-zinc-900">
            SOBRE MIN
          </h2>
          <div className="w-10 bg-purple-600 h-1 rounded-full"></div>
        </div>
        <p className="font-source text-zinc-700 leading-[18px] text-[12px] px-4 text-center font-semibold ">
          Aqui você encontrará mais informações sobre mim, o que faço e minhas
          habilidades atuais principalmente em termos de programação e
          tecnologia
        </p>

        <section className="px-4 font-source flex flex-col gap-6">
          <strong className="text-[18px] tracking-wider">Quem Eu Sou</strong>
          <article className="flex flex-col gap-4 ">
            <p className="font-source text-zinc-500 leading-[20px] text-[14px] text-left font-semibold ">
              {" "}
              Sou um <strong>desenvolvedor Web focado em Frontend</strong>,
              construindo e gerenciando o Front-end de sites e aplicações Web
              que levam ao sucesso do produto geral. Confira alguns dos meus
              trabalhos na seção Projetos.
            </p>
            <p className="font-source text-zinc-500 leading-[20px] text-[14px] text-left font-semibold ">
              Também gosto de compartilhar conteúdo relacionado ao que aprendi
              ao longo dos anos em Desenvolvimento Web para que possa ajudar
              outras pessoas da Comunidade de Desenvolvimento. Sinta-se à
              vontade para se conectar ou me seguir no Linkedin e no Instagram,
              onde posto conteúdo útil relacionado ao desenvolvimento e
              programação web
            </p>
            <p className="font-source text-zinc-500 leading-[20px] text-[14px] text-left font-semibold ">
              Estou aberto a oportunidades de trabalho onde possa contribuir,
              aprender e crescer. Se tiver uma boa oportunidade que corresponda
              às minhas competências e experiência,{" "}
              <strong>não hesite em contactar-me.</strong>
            </p>{" "}
          </article>
     
        </section>
      </section>
    </>
  );
}