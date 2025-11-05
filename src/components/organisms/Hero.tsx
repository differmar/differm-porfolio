"use client";

import { useFadeInEffect } from "../../hook/useFadeInEffect";
import Heading from "../atoms/Heading";
import TimeSlider from "../molecules/TimeSlider";

const Hero = () => {
  const textRef = useFadeInEffect({
    duration: 1.5,
    ease: "power2.out",
    delay: 0.8,
  });

  return (
    <div className="h-screen flex flex-col relative">
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center relative">
          <Heading
            ref={textRef}
            level={1}
            size="hero"
            className="relative z-10 text-center"
          >
            <span className="block sm:inline">PORT</span>
            <span className="hidden sm:inline"></span>
            <span className="block sm:inline">FOLIO</span>
          </Heading>
          
          <TimeSlider className="mt-16" />
        </div>
      </div>

      <div className="h-1/3 flex items-end justify-center pb-8"></div>
    </div>
  );
};

export default Hero;
