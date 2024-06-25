import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaSquareBehance } from "react-icons/fa6";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";
interface ISocialWeb {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const socialWeb: ISocialWeb[] = [
  {
    name: "Linkedin",
    icon: <FaLinkedin size={20} className="hover:text-purple-00" />,
    link: "https://www.linkedin.com/in/cl%C3%A1udio-silva-46a3602a6/",
  },
  {
    name: "Github",
    icon: <BsGithub size={20} className="hover:text-purple-00" />,
    link: "https://github.com/dinhoSilwa",
  },
  {
    name: "Linkedin",
    icon: <BsInstagram size={20} className="hover:text-purple-00" />,
    link: "https://www.instagram.com/claudiosilwa_?igsh=a3FhYmFoNW1jZTZl",
  },
  {
    name: "Behance",
    icon: <FaSquareBehance size={20} className="hover:text-purple-00" />,
    link: "https://www.behance.net/claudiosil50ea",
  },
];

export const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-900 w-[100%] h-auto font-source px-4 py-10 flex flex-col overflow-hidden">
        <section className="border-zinc-200 flex flex-col items-start gap-4">
          <Title type="footer-title">{"Social".toUpperCase()}</Title>

          <section className="flex gap-4 items-center">
            {socialWeb.map(({ name, icon, link }, index) => (
              <figure key={index}>
                <a
                  href={link}
                  aria-label={name}
                  target="_blank"
                  className="decoration-inherit text-zinc-100"
                >
                  {icon}
                </a>
              </figure>
            ))}
          </section>
          <section className="border-zinc-200 flex flex-col items-start gap-4">
            <Title type="footer-title">{"claudio silva".toUpperCase()}</Title>
            <Paragraph
              type="footer-text"
              className="text-zinc-100 font-source text-[12px]"
            >
              Um desenvolvedor da Web orientado a resultados, construindo e
              gerenciando sites e aplicativos da Web que levam ao sucesso do
              produto geral
            </Paragraph>
          </section>
        </section>
      </footer>
    </>
  );
};
