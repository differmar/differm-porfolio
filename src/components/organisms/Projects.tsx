"use client";

import { useFadeInEffect } from "../../hook/useFadeInEffect";
import ProjectCard from "../molecules/ProjectCard";
import Heading from "../atoms/Heading";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  action: {
    label: string;
    url?: string;
    onClick?: () => void;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "MakerFlow",
    description: "MakerFlow is a production management platform built for small-scale 3D printing farms. It helps track material usage, calculate real printing costs, manage inventory, and monitor production metrics in one place.",
    image: "/images/logo.svg",
    action: {
      label: "Request Demo",
      onClick: () => {
        window.location.href = "mailto:dfmarcillop@gmail.com?subject=Demo Request";
      },
    },
  },
];

const Projects = () => {
  const titleRef = useFadeInEffect({
    duration: 1.5,
    ease: "power2.out",
    delay: 0.3,
  });

  return (
    <section id="proyectos" className="min-h-screen flex flex-col relative py-20">
      <div className="flex flex-col items-center justify-center">
        <Heading
          ref={titleRef}
          level={2}
          size="6xl"
          className="mb-4 text-center"
        >
          PROJECTS
        </Heading>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              action={project.action}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
