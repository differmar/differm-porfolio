"use client";

import Image from "next/image";
import { useFadeInEffect } from "../../hook/useFadeInEffect";

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
        <h2
          ref={titleRef}
          className="font-[mazurquica-vf] text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] font-bold bg-gradient-to-r from-[#A6A6A6] to-[#F2F2F2] bg-clip-text text-transparent mb-16 text-center"
        >
          SKILLS
        </h2>

        <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 px-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center group"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#1a1a1a] border border-[#333]  flex items-center justify-center hover:border-[#F2F2F2] transition-all duration-300 hover:scale-110 mb-4 overflow-hidden relative">
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none rounded-full"
                  style={{ opacity: 0.5, mixBlendMode: "multiply" }}
                >
                  <rect
                    width="100%"
                    height="100%"
                    filter={`url(#skillNoise-${skill.id})`}
                    fill="rgba(0,0,0,0.3)"
                  />
                </svg>
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={72}
                  height={72}
                  className="w-full h-full object rounded-full relative z-10"
                />
                <div className="absolute inset-0 bg-orange-500/20 rounded-full mix-blend-multiply z-20"></div>
              </div>
              <p className="text-[#F2F2F2] text-sm sm:text-base text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
