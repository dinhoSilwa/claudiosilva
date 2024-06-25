import "./App.css";
import { AboutMe } from "./components/Aboutme";
import { Flow } from "./components/Flow";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { Projects } from "./components/Projetos";
import { Services } from "./components/Services";
import { Skills } from "./components/SkillSection";

function App() {
  return (
    <>
      <Menu />
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <Projects />
      <Flow />
      <Form />
      <Footer />

    </>
  );
}

export default App;
