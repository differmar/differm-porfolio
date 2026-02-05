"use client";

import { useFadeInEffect } from "../../hook/useFadeInEffect";
import { useLanguage } from "../../context/LanguageContext";
import ExperienceItem from "../molecules/ExperienceItem";
import Heading from "../atoms/Heading";

interface ExperienceEntry {
  company: string;
  role: string;
  employmentType: string;
  start: string;
  end: string;
  location: string;
  remote: boolean;
  skills: string[];
}

const experiences: ExperienceEntry[] = [
  {
    company: "Melius I+D",
    role: "Lead Mobile Developer",
    employmentType: "Full-time",
    start: "2024-05",
    end: "Present",
    location: "Bogotá, Colombia",
    remote: true,
    skills: ["JIRA", "Agile methodologies"],
  },
  {
    company: "Waco Digital Hub",
    role: "Frontend Developer",
    employmentType: "Freelance",
    start: "2024-11",
    end: "2025-10",
    location: "Colombia",
    remote: true,
    skills: ["React Native", "React.js"],
  },
  {
    company: "Bewe Software",
    role: "Mobile Developer",
    employmentType: "Full-time",
    start: "2023-03",
    end: "2024-04",
    location: "Distrito Capital, Colombia",
    remote: true,
    skills: ["Scrum", "JavaScript"],
  },
  {
    company: "Melius I+D",
    role: "Mobile Developer",
    employmentType: "Full-time",
    start: "2020-08",
    end: "2023-02",
    location: "Colombia",
    remote: true,
    skills: ["Frontend Development", "JavaScript"],
  },
  {
    company: "Con Larry",
    role: "FullStack Developer",
    employmentType: "Full-time",
    start: "2022-01",
    end: "2022-10",
    location: "Colombia",
    remote: true,
    skills: ["React.js", "NestJS"],
  },
  {
    company: "Con Larry",
    role: "Frontend Developer",
    employmentType: "Full-time",
    start: "2021-01",
    end: "2022-01",
    location: "Colombia",
    remote: true,
    skills: ["React.js", "Frontend Development"],
  },
  {
    company: "Eco Blue",
    role: "Backend Developer",
    employmentType: "Independent",
    start: "2020-09",
    end: "2021-01",
    location: "Colombia",
    remote: true,
    skills: ["NestJS", "Databases"],
  },
  {
    company: "Ole",
    role: "FullStack Developer",
    employmentType: "Full-time",
    start: "2020-05",
    end: "2020-12",
    location: "Colombia",
    remote: true,
    skills: ["React.js", "NestJS"],
  },
  {
    company: "Self-employed",
    role: "Frontend Developer",
    employmentType: "Independent",
    start: "2019-06",
    end: "2020-07",
    location: "Colombia",
    remote: false,
    skills: ["React.js", "Frontend Development"],
  },
];

const Experience = () => {
  const { t } = useLanguage();
  const titleRef = useFadeInEffect({
    duration: 1.5,
    ease: "power2.out",
    delay: 0.3,
  });

  return (
    <section id="experience" className="min-h-screen flex flex-col relative py-8 sm:py-20">
      <div className="flex flex-col items-center justify-center">
        <Heading
          ref={titleRef}
          level={2}
          size="6xl"
          className="mb-8 text-center"
        >
          {t("experience.heading")}
        </Heading>

        <div className="w-full max-w-3xl">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={`${exp.company}-${exp.start}`}
              {...exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
