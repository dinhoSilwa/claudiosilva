import { ButtonCTA } from "./Button";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";

interface IjobFlow {
  name: string;
  description: string;
}

interface IjobFlowArray {
  flow: IjobFlow[];
}

const jobflow: IjobFlowArray = {
  flow: [
    {
      name: "Breafing",
      description:
        "Reunião com o cliente para entender o propósito do site, preferências de design e funcionalidades desejadas.",
    },
    {
      name: "Pesquisas:",
      description:
        "Pesquisa de concorrentes e público-alvo para tomar decisões informadas e melhorar o projeto.",
    },
    {
      name: "Wireframe",
      description:
        "Criação de um esboço simples do site para estruturar ideias.",
    },
    {
      name: "Design",
      description:
        "Criação dos elementos visuais que compõem a aparência e identidade do site.",
    },
    {
      name: "Produção",
      description:
        "Implementação completa das funcionalidades e design do site.",
    },
    {
      name: "Lançamento",
      description:
        "Planejamento e execução da publicação do site para os usuários.",
    },
    {
      name: "Testes",
      description:
"todo o código é revisado para detectar e tratar possiveis bugs"
    },
    {
      name: "Entrega do Site",
      description:
        "Finalização e entrega do site ao cliente ou usuário final.",
    },
  ],
};
export const Flow = () => {
  return (
    <>
<section className="flex flex-col py-20 gap-10">
  <header className="flex flex-col gap-4">
  <Title>{"Fluxo de Trabalho".toUpperCase()}</Title>
  <Paragraph type="sub-text">Conheça o Processo para desenvolver um site moderno e responsivo</Paragraph>
  </header>
<ul className="flex flex-wrap gap-4 justify-center">

    {jobflow.flow.map(({ name, description }, index) => (
        <li key={index} className=" w-[150px] bg-zinc-200 h-[120px] flex flex-col justify-center font-source px-2 py-4 rounded-md">
    
    <header className="flex gap-1 h-6"><span className="text-medium font-bold text-purple-800">{index+1}</span><h2 className="text-medium text-purple-800">{name}</h2></header>
          <p className="text-small text-zinc-700 leading-[12px] h-16">{description}</p>
        </li>
      ))}
    </ul>
    <section className="flex justify-center">
    <ButtonCTA size="medium">Contato</ButtonCTA>
    </section>
</section>
    </>
  );
};
