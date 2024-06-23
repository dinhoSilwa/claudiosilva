import "./App.css";
import { AboutMe } from "./components/Aboutme";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { Projects } from "./components/Projetos";
import { Services } from "./components/Services";
import { Skills } from "./components/SkillSection";




// const jobflow = {
//   flow : [
//     {name : "Breafing", description : 'Reunião com o cliente para entender o propósito do site, público-alvo, preferências de design e funcionalidades desejadas.'},
//     {name : "Pesquisa e Documentação:", description : 'Pesquisa de concorrentes e público-alvo para tomar decisões informadas e melhorar o projeto.'},
//     {name : "Wireframe", description : 'Criação de um esboço simples do site para estruturar ideias, sem detalhes como cores e imagens.'},
//     {name : "Design", description : 'Criação dos elementos visuais que compõem a aparência e identidade do site.'},
//     {name : "Produção", description : 'Implementação completa das funcionalidades e design do site.'},
//     {name : "Lançamento", description : 'Planejamento e execução da publicação do site para os usuários.'},
//     {name : "Entrega do Site", description : 'Finalização e entrega do site ao cliente ou usuário final, mostrando o produto concluído.'},

//   ]
// }

function App() {
  return (
    <>
      <Menu />
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <Projects />
      <Form />
      <Footer />

    </>
  );
}

export default App;
