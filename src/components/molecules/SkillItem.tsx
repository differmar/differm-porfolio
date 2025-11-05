"use client";

import Image from "next/image";
import Text from "../atoms/Text";

interface SkillItemProps {
  id: number;
  name: string;
  logo: string;
}

const SkillItem = ({ id, name, logo }: SkillItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center group">
      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center hover:border-[#F2F2F2] transition-all duration-300 hover:scale-110 mb-4 overflow-hidden relative">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none rounded-full"
          style={{ opacity: 0.5, mixBlendMode: "multiply" }}
        >
          <filter id={`skillNoise-${id}`}>
            <feTurbulence type="fractalNoise" baseFrequency="2.5" numOctaves="6" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0 0.3 0 0.2 0 0.4 0 0.1 0 0.5 0 0.6 0 0.25"/>
            </feComponentTransfer>
          </filter>
          <rect
            width="100%"
            height="100%"
            filter={`url(#skillNoise-${id})`}
            fill="rgba(0,0,0,0.3)"
          />
        </svg>
        <Image
          src={logo}
          alt={name}
          width={72}
          height={72}
          className="w-full h-full object rounded-full relative z-10"
        />
        <div className="absolute inset-0 bg-orange-500/20 rounded-full mix-blend-multiply z-20"></div>
      </div>
      <Text variant="caption" className="text-center group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </Text>
    </div>
  );
};

export default SkillItem;
