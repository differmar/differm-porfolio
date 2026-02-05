"use client";

import { useLanguage } from "../../context/LanguageContext";
import { Language } from "../../i18n/translations";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 border border-[#3a3a3a] rounded-full px-1 py-0.5">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`text-xs font-bold px-2 py-1 rounded-full transition-all duration-300 ${
            language === lang.code
              ? "bg-[#F2F2F2] text-[#262626]"
              : "text-[#BFBFBF] hover:text-[#F2F2F2]"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
