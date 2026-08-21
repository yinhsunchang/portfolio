import { useTranslation } from "react-i18next";
import comingSoon from "../assets/coming-soon.jpg";
import catModel from "../assets/cat-model.jpg";
import catModel2 from "../assets/cat-model-v2.jpg";

interface ProjectCardProps {
  image: string;
  href: string;
  title: string;
  tech: string;
  description: string;
}

const ProjectCard = ({
  image,
  href,
  title,
  tech,
  description,
}: ProjectCardProps) => {
  return (
    <>
      <div className="card zoom margin-bottom">
        <a href={href} target="_blank" rel="noreferrer">
          <img src={image} alt="Preview" style={{ width: "100%" }} />
        </a>

        <p style={{ textAlign: "center" }}>
          <span className="large">
            <b>{title}</b>
          </span>
        </p>

        <p style={{ textAlign: "center" }}>
          <span>{tech}</span>
        </p>

        <p className="panel leftbar margin">{description}</p>

        <br />
      </div>
    </>
  );
};

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      image: comingSoon,
      href: "https://github.com/yinhsunchang/coming-soon",
      title: t("project.title1"),
      tech: t("project.tech1"),
      description: t("project.des1"),
    },
    {
      image: catModel,
      href: "https://github.com/yinhsunchang/cat-model",
      title: t("project.title2"),
      tech: t("project.tech2"),
      description: t("project.des2"),
    },
    {
      image: catModel2,
      href: "https://github.com/yinhsunchang/cat-model-v2",
      title: t("project.title3"),
      tech: t("project.tech3"),
      description: t("project.des3"),
    },
  ];

  return (
    <div className="padding-32 content justify text-grey" id="portfolio">
      <h2 className="text-dark-grey">{t("portfolio")}</h2>
      <hr className="opacity" />

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          href={project.href}
          title={project.title}
          tech={project.tech}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default Portfolio;
