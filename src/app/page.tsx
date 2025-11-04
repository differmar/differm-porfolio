"use client";

import Menu from "@/components/Menu/Menu";
import Hero from "@/components/sections/Hero";
import Proyectos from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div 
      className="bg-[#262626] relative overflow-hidden"
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.5, mixBlendMode: "multiply" }}>
        <filter id="graniteNoise">
          <feTurbulence type="fractalNoise" baseFrequency="2.5" numOctaves="6" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 0.3 0 0.2 0 0.4 0 0.1 0 0.5 0 0.6 0 0.25"/>
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#graniteNoise)" fill="rgba(0,0,0,0.3)"/>
      </svg>
      <div className="mx-auto flex flex-col w-full max-w-[1280px] relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="h-screen flex flex-col">
          <Menu />
          <Hero />
        </div>
        <Proyectos />
        <Skills />
      </div>
    </div>
  );
}
