"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Heading from "../atoms/Heading";
import TimeSlider from "../molecules/TimeSlider";

const Hero = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const ball = ballRef.current;

    if (!slider || !ball) return;

    const initAnimation = () => {
      const track = ball.parentElement;
      if (!track) return;

      const trackWidth = track.offsetWidth;
      const ballSize = 16; // w-4 = 16px
      const maxX = trackWidth - ballSize;

      const getRandomColor = () => {
        return (
          "#" +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")
        );
      };

      gsap.set(ball, { x: 0, left: 0 });
      const tl = gsap.timeline();

      tl.to(ball, {
        x: maxX,
        duration: 3,
        ease: "power1.inOut",
      });

      const colorTl = gsap.timeline();
      for (let i = 0; i < 6; i++) {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        colorTl.to(
          ball,
          {
            background: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`,
            duration: 0.5,
            ease: "power1.inOut",
          },
          i * 0.5
        );
      }
    };

    setTimeout(initAnimation, 100);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="h-1/3 flex items-end justify-center">
        <Image
          src="/differm.png"
          alt="Differmar"
          width={1000}
          height={300}
          className="z-10 translate-y-1/3 absolute object-contain max-w-[220px] sm:max-w-xs md:max-w-sm lg:max-w-md opacity-80 hover:opacity-100 transition-opacity duration-300 rounded-t-full"
          style={{ borderRadius: "50% 50% 30% 30% / 100% 100% 50% 50%" }}
          priority
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="h-[2rem] flex flex-col items-center justify-center relative">
          <Heading
            // ref={textRef}
            level={1}
            size="hero"
            className="relative text-center"
          >
            <span className="block sm:inline">PORT</span>
            <span className="block sm:inline">FOLIO</span>
          </Heading>
          <TimeSlider ref={sliderRef} ballRef={ballRef} className="mt-8" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
