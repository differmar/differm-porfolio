"use client";

import Image from "next/image";
import { useFadeInEffect } from "../../hook/useFadeInEffect";
import { useLanguage } from "../../context/LanguageContext";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

const AboutMe = () => {
  const { t } = useLanguage();
  const titleRef = useFadeInEffect({
    duration: 1.5,
    ease: "power2.out",
    delay: 0.3,
  });

  return (
    <section id="sobre-mi" className="min-h-screen flex flex-col relative py-8 sm:py-20 px-4 sm:px-0">
      <div className="flex flex-col items-center justify-center">
        <Heading
          ref={titleRef}
          level={2}
          size="6xl"
          className="mb-12 text-center"
        >
          {t("aboutMe.heading")}
        </Heading>

        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative w-full aspect-square sm:w-[368px] sm:h-[368px] rounded-3xl border border-[#3a3a3a] bg-[#262626] overflow-hidden">
              <Image
                src="/differmv2.jpg"
                alt="Differmar"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4">
            <Text variant="label" className="!text-[#FFDCC0] text-base sm:text-lg">
              {t("aboutMe.tagline")}
            </Text>
            <Text variant="body" className="leading-relaxed opacity-85 text-base sm:text-lg text-justify">
              {t("aboutMe.description")}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
