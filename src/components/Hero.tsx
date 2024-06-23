import frontEndGif from "../assets/frontend.gif";
import { ButtonCTA } from "./Button";
import { Paragraph } from "./Paragraph";



export const Hero = () => {
  

  return (
    <>
      <section className="bg-hero flex flex-col justify-start gap-[32px] items-center pt-20 bg-zinc-200 h-auto xs:pt-20 xs:pb-20 xxs:gap-[40px]">
        <img
          src={frontEndGif}
          className="w-[50%] h-auto sm:w-[60%] md:hidden lg:[30%]"
        />
        <h2 className="xs:text-[36px] md:text-[44px] leading-none md:leading-[56px] font-source font-extrabold text-[28px] flex items-center text-center justify-center text-zinc-950 tracking-wider">
          OLÁ, EU SOU O <br></br>CLAUDIO SILVA
        </h2>
        <Paragraph type="sub-text">
          Um desenvolvedor da Web orientado a resultados, construindo e
          gerenciando sites e aplicativos da Web que levam ao sucesso do produto
          geral
        </Paragraph>

        <ButtonCTA size="medium">PROJETOS</ButtonCTA>
      </section>

    </>
  );
};
