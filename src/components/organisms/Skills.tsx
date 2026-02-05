"use client";

import { useState, useEffect } from "react";
import { useFadeInEffect } from "../../hook/useFadeInEffect";
import { useLanguage } from "../../context/LanguageContext";
import Heading from "../atoms/Heading";
import SkillItem from "../molecules/SkillItem";
import TabMenu from "../molecules/TabMenu";

interface Skill {
  id: number;
  name: string;
  logo: string;
  category: "developer" | "creator"
}

const skills: Skill[] = [
  { id: 1, name: "React", logo: "/logos/react.svg", category: "developer" },
  { id: 2, name: "React Native", logo: "/logos/reactnative.svg", category: "developer" },
  { id: 3, name: "Next.js", logo: "/logos/nextjs.svg", category: "developer" },
  { id: 4, name: "TypeScript", logo: "/logos/ts.svg", category: "developer" },
  { id: 5, name: "JavaScript", logo: "/logos/js.svg", category: "developer" },
  { id: 6, name: "Node.js", logo: "/logos/node.svg", category: "developer" },
  { id: 7, name: "Tailwind CSS", logo: "/logos/tailwind.svg", category: "developer" },
  { id: 8, name: "Git", logo: "/logos/git.svg", category: "developer" },
  { id: 9, name: "Figma", logo: "/logos/figma.svg", category: "creator" },
  { id: 10, name: "Davinci Resolve", logo: "/logos/davinciresolve.svg", category: "creator" },
  { id: 11, name: "Adobe Illustrator", logo: "/logos/illustrator.svg", category: "creator" },
  { id: 12, name: "Adobe Photoshop", logo: "/logos/photoshop.svg", category: "creator" },
  { id: 13, name: "Adobe After Effects", logo: "/logos/aftereffects.svg", category: "creator" },
  { id: 14, name: "Adobe Premiere Pro", logo: "/logos/premierepro.svg", category: "creator" },
  { id: 15, name: "Adobe Lightroom", logo: "/logos/lightroom.svg", category: "creator" },
];

const Skills = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("developer");
  const [displayTab, setDisplayTab] = useState<string>("developer");
  const [phase, setPhase] = useState<"visible" | "exiting" | "entering">("visible");

  const titleRef = useFadeInEffect({
    duration: 1.5,
    ease: "power2.out",
    delay: 0.3,
  });

  const tabs = [
    { key: "developer", label: t("skills.developer") },
    { key: "creator", label: t("skills.creator") },
  ];

  const handleTabChange = (label: string) => {
    const tab = tabs.find((t) => t.label === label);
    if (!tab || tab.key === activeTab || phase !== "visible") return;

    setActiveTab(tab.key);
    setPhase("exiting");
  };

  useEffect(() => {
    if (phase === "exiting") {
      const timeout = setTimeout(() => {
        setDisplayTab(activeTab);
        setPhase("entering");
      }, 250);
      return () => clearTimeout(timeout);
    }
    if (phase === "entering") {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase("visible");
        });
      });
    }
  }, [phase, activeTab]);

  const filteredSkills = skills.filter((skill) => skill.category === displayTab);

  const animationClass =
    phase === "exiting"
      ? "-translate-y-6 opacity-0"
      : phase === "entering"
        ? "translate-y-6 opacity-0"
        : "translate-y-0 opacity-100";

  return (
    <section id="skills" className="min-h-screen flex flex-col relative mb-10">
      <div className="flex flex-col items-center justify-center">
        <Heading
          ref={titleRef}
          level={2}
          size="6xl"
          className="mb-2 text-center"
        >
          {t("skills.heading")}
        </Heading>

        <TabMenu
          tabs={tabs.map((tab) => tab.label)}
          activeTab={tabs.find((tab) => tab.key === activeTab)?.label || ""}
          onChange={handleTabChange}
          className="flex-wrap justify-center"
        />

        <div className="w-full max-w-6xl px-4">
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 transition-all duration-300 ease-out ${animationClass}`}
          >
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill) => (
                <SkillItem
                  key={skill.id}
                  id={skill.id}
                  name={skill.name}
                  logo={skill.logo}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-[#BFBFBF] text-lg">
                {t("skills.empty")}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
