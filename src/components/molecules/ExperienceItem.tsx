"use client";

import Text from "../atoms/Text";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationKey } from "../../i18n/translations";

interface ExperienceItemProps {
  company: string;
  role: string;
  employmentType: string;
  start: string;
  end: string;
  location: string;
  remote: boolean;
  skills: string[];
  isLast?: boolean;
}

const ExperienceItem = ({
  company,
  role,
  employmentType,
  start,
  end,
  location,
  remote,
  skills,
  isLast = false,
}: ExperienceItemProps) => {
  const { t } = useLanguage();

  const formatDate = (date: string) => {
    if (date === "Present") return t("experience.present");
    const [year, month] = date.split("-");
    const monthKey = `month.${parseInt(month)}` as TranslationKey;
    return `${t(monthKey)} ${year}`;
  };

  return (
    <div className="flex gap-4 sm:gap-6">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-[#F2F2F2] border-2 border-[#F2F2F2] mt-2 shrink-0" />
        {!isLast && <div className="w-[2px] flex-1 bg-[#3a3a3a]" />}
      </div>

      {/* Content card */}
      <div className="pb-8 flex-1">
        <div className="rounded-2xl border border-[#3a3a3a] bg-[#262626] p-5 transition-all duration-300 hover:border-[#F2F2F2]/30">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <h3 className="text-[#F2F2F2] text-lg font-bold">{role}</h3>
            <Text variant="caption" className="text-xs opacity-60">
              {formatDate(start)} — {formatDate(end)}
            </Text>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Text variant="label" className="!text-base !text-[#FFDCC0]">
              {company}
            </Text>
            <span className="text-[#3a3a3a]">·</span>
            <Text variant="caption" className="opacity-60">{employmentType}</Text>
            <span className="text-[#3a3a3a]">·</span>
            <Text variant="caption" className="opacity-60">{location}</Text>
            {remote && (
              <span className="text-xs text-[#F2F2F2] bg-[#3a3a3a] px-2 py-0.5 rounded-full">
                {t("experience.remote")}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs text-[#BFBFBF] border border-[#3a3a3a] px-2 py-1 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
