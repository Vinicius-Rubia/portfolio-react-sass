import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiPython,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    description:
      "Linguagem de marcação utilizada na construção de páginas na Web.",
    icon: <DiHtml5 />,
  },
  {
    id: "css",
    name: "CSS3",
    description: "Linguagem responsável em adicionar estilos a uma página web.",
    icon: <DiCss3 />,
  },
  {
    id: "js",
    name: "JavaScript",
    description:
      "Linguagem de programação utilizada para implementar itens complexos em páginas web.",
    icon: <DiJsBadge />,
  },
  {
    id: "python",
    name: "Python",
    description: "Linguagem de programação de alto nível e de propósito geral.",
    icon: <DiPython />,
  },
  {
    id: "mysql",
    name: "MySQL",
    description: "SGBD que utiliza a linguagem SQL como interface.",
    icon: <DiMysql />,
  },
  {
    id: "react",
    name: "React",
    description:
      "O React é uma biblioteca front-end JavaScript de código aberto",
    icon: <DiReact />,
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
