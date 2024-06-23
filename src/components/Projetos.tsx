import { projectList } from "../model/skillist";
import pro from "./../assets/item01.png";
import { ButtonCTA } from "./Button";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";

export const Projects = () => {
  return (
    <>
      <section className="py-20 flex flex-col gap-12">
        <Title type="title"> {"Meus Projetos".toUpperCase()}</Title>
        <ul className="flex flex-col gap-16">
          {projectList.projects.map(
            ({ name, description, skillUsed }, index) => (
              <li
                key={index}
                className="px-4 h-auto flex flex-col justify-center"
              >
                <figure className="overflow-hidden">
                <img src={pro} alt="projeto 01" className="w-[100%] h-auto" />

                </figure>
                <div className="w-full py-10 flex flex-col justify-start items-center gap-8">
                  <Title type="project-title">{name}</Title>
                  <Paragraph type="sub-text">{description}</Paragraph>
                  <ul className="flex gap-2 flex-wrap items-center justify-center px-8">
                    {skillUsed.map((skill, index) => (
                      <li
                        key={index}
                        className=" font-source px-4 bg-zinc-300 hover:bg-zinc-400 hover:text-white rounded-md py-2"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <ButtonCTA size="small">Visualizar</ButtonCTA>
                </div>
              </li>
            )
          )}
        </ul>
      </section>
    </>
  );
};
