"use client";

import { useFadeInEffect } from "../../hook/useFadeInEffect";
import ProjectCard from "../ProjectCard";

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
    title: "Proyecto Web",
    description: "Aplicación web moderna con React y Next.js",
    action: {
      label: "Ir al proyecto",
      url: "https://example.com/proyecto-1",
    },
  },
  {
    id: 2,
    title: "App Mobile",
    description: "Aplicación móvil nativa para iOS y Android",
    action: {
      label: "Ver demo",
      url: "https://example.com/proyecto-2",
    },
  },
  {
    id: 3,
    title: "Diseño UI/UX",
    description: "Sistema de diseño completo y componentes",
    action: {
      label: "Explorar",
      url: "https://example.com/proyecto-3",
    },
  },
  {
    id: 4,
    title: "E-commerce",
    description: "Plataforma de comercio electrónico escalable",
    action: {
      label: "Visitar",
      url: "https://example.com/proyecto-4",
    },
  },
  {
    id: 5,
    title: "Dashboard",
    description: "Panel de administración con analytics",
    action: {
      label: "Ir",
      url: "https://example.com/proyecto-5",
    },
  },
  {
    id: 6,
    title: "Portfolio",
    description: "Sitio web personal y portfolio creativo",
    action: {
      label: "Ver más",
      url: "https://example.com/proyecto-6",
    },
  },
];

const Proyectos = () => {
  const titleRef = useFadeInEffect({
    duration: 1.5,
    ease: "power2.out",
    delay: 0.3,
  });

  return (
    <section id="proyectos" className="min-h-screen flex flex-col relative py-20">
      <div className="flex flex-col items-center justify-center">
        <h2
          ref={titleRef}
          className="font-[mazurquica-vf] text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] font-bold bg-gradient-to-r from-[#A6A6A6] to-[#F2F2F2] bg-clip-text text-transparent mb-16 text-center"
        >
          PROYECTOS
        </h2>
        
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

export default Proyectos;

