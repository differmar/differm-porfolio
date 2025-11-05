"use client";

import { useFadeInEffect } from "../../hook/useFadeInEffect";
import Heading from "../atoms/Heading";
import SkillItem from "../molecules/SkillItem";

interface Skill {
  id: number;
  name: string;
  logo: string;
}

const skills: Skill[] = [
  { id: 1, name: "React", logo: "/logos/react.svg" },
  { id: 2, name: "Next.js", logo: "/logos/nextjs.svg" },
  { id: 3, name: "TypeScript", logo: "/logos/ts.svg" },
  { id: 4, name: "JavaScript", logo: "/logos/js.svg" },
  { id: 5, name: "Node.js", logo: "/logos/node.svg" },
  { id: 6, name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
  { id: 7, name: "Git", logo: "/logos/git.svg" },
  { id: 8, name: "Figma", logo: "/logos/figma.svg" },
];

const Skills = () => {
  const titleRef = useFadeInEffect({
    duration: 1.5,
    ease: "power2.out",
    delay: 0.3,
  });

  return (
    <section id="skills" className="min-h-screen flex flex-col relative py-20">
      <div className="flex flex-col items-center justify-center">
        <Heading
          ref={titleRef}
          level={2}
          size="6xl"
          className="mb-16 text-center"
        >
          SKILLS
        </Heading>

        <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 px-4">
          {skills.map((skill) => (
            <SkillItem
              key={skill.id}
              id={skill.id}
              name={skill.name}
              logo={skill.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
