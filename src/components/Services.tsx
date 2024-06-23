import { CodeXml, MonitorCheck, Wrench } from "lucide-react"
import { Paragraph } from "./Paragraph"
import { Title } from "./Title"

export const Services = () =>{
  return(
     <>
<section className="pt-10 flex flex-col gap-10 bg-zinc-100">
<Title type="title">{"Meus Serviços".toLocaleUpperCase()}</Title>
      <section className="font-source h-auto flex flex-col gap-8 items-center">
      
        <article className="w-[85%] px-4 py-10 flex flex-col gap-[16px] bg-white rounded-lg">
        <CodeXml  className="text-purple-600" strokeWidth={2}/>
          <Title type="sub-title">Front-end</Title>
          <Paragraph type="service-text">Como programador front-end, eu me especializo na criação e desenvolvimento da interface do usuário de um website (criação de sites).</Paragraph>
        </article>
        <article className="w-[85%] px-4 py-10 flex flex-col gap-[16px] bg-white rounded-lg">
          <MonitorCheck className="text-purple-600" strokeWidth={2}/>
          <Title type="sub-title">Ui/Ux Design</Title>
          <Paragraph type="service-text">
          Investir em UI/UX Design melhora a percepção do produto, aumenta a satisfação do cliente e impulsiona o crescimento do negócio com uma experiência positiva do usuário            </Paragraph>
        </article>
        <article className="w-[85%] px-4 py-10 flex flex-col gap-[16px] bg-white rounded-lg">
        <Wrench className="text-purple-600" strokeWidth={2} />
          <Title type="sub-title">Manutenção de sites</Title>
          <Paragraph type="service-text">
          Melhore o layout do seu site tornando ele + atrativos para os clientes, aumente vendas e esmague seus concorrentes. Deixa comigo a manutenção do seu website.            </Paragraph>
        </article>
      </section>
</section>
     </>

  )
}