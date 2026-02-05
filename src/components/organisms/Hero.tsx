"use client";

import Image from "next/image";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import { useLanguage } from "../../context/LanguageContext";
import YearTimer from "../molecules/YearTimer";
import SocialLinks from "../molecules/SocialLinks";
import GitHubGrid from "../molecules/GitHubGrid";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col relative pt-10 overflow-hidden">
      <GitHubGrid opacity={0.5} changeInterval={1000} />
      <div className="h-1/3 flex items-end justify-center relative z-20">
        <Image
          src="/differm.png"
          alt="Differmar"
          width={300}
          height={300}
          className="z-10 translate-y-1/3 absolute object-contain max-w-[220px] sm:max-w-xs md:max-w-sm lg:max-w-md   transition-opacity duration-300 rounded-t-full"
          style={{ borderRadius: "50% 50% 30% 30% / 100% 100% 50% 50%" }}
          priority
        />
      </div>
      <div className="flex items-center justify-center relative">
        <div className="h-[2rem] flex flex-col items-center justify-center relative">
          <Heading
            level={1}
            size="hero"
            className="relative text-center"
          >
            <span className="block sm:inline">PORT</span>
            <span className="block sm:inline">FOLIO</span>
          </Heading>
          
          <Text variant="label" className="tracking-widest text-center md:mt-2 mt-20">
            {t("hero.subtitle")}
          </Text>

          <YearTimer startYear={2020} className="" />
          
          <SocialLinks className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
