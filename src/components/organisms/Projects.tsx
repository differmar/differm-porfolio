"use client";

import { useFadeInEffect } from "../../hook/useFadeInEffect";
import { useLanguage } from "../../context/LanguageContext";
import ProjectCard from "../molecules/ProjectCard";
import Heading from "../atoms/Heading";

interface Project {
  id: number;
  title: string;
  descriptionKey: string;
  image?: string;
  year?: string;
  action: {
    labelKey: string;
    url?: string;
    onClick?: () => void;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "MakerFlow",
    descriptionKey: "projects.makerflow.description",
    image: "/images/logo.svg",
    year: "2025",
    action: {
      labelKey: "projects.makerflow.action",
      onClick: () => {
        window.location.href = "mailto:dfmarcillop@gmail.com?subject=Demo Request";
      },
    },
  },
];

const Projects = () => {
  const { t } = useLanguage();
  const titleRef = useFadeInEffect({
    duration: 1.5,
    ease: "power2.out",
    delay: 0.3,
  });

  return (
    <section id="proyectos" className="min-h-screen flex flex-col relative md:py-20">
      <div className="flex flex-col items-center justify-center">
        <Heading
          ref={titleRef}
          level={2}
          size="6xl"
          className="mb-4 text-center"
        >
          {t("projects.heading")}
        </Heading>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={t(project.descriptionKey as never)}
              image={project.image}
              year={project.year}
              action={{
                label: t(project.action.labelKey as never),
                url: project.action.url,
                onClick: project.action.onClick,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
