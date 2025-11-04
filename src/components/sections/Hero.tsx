"use client";

import { useFadeInEffect } from "../../hook/useFadeInEffect";

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
          <h1
            ref={textRef}
            className={`font-[mazurquica-vf] text-[10rem] sm:text-[6rem] md:text-[24rem] leading-[8.5rem] sm:leading-normal font-bold bg-gradient-to-r from-[#A6A6A6] to-[#F2F2F2] bg-clip-text text-transparent relative z-10 text-center`}
          >
            <span className="block sm:inline">PORT</span>
            <span className="hidden sm:inline"></span>
            <span className="block sm:inline">FOLIO</span>
          </h1>
        </div>
      </div>

      <div className="h-1/3 flex items-end justify-center pb-8"></div>
    </div>
  );
};
export default Hero;
