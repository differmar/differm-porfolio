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
      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#262626] border border-[#3a3a3a] flex items-center justify-center hover:border-[#F2F2F2] transition-all duration-300 hover:scale-110 mb-4 overflow-hidden relative">
        <Image
          src={logo}
          alt={name}
          width={72}
          height={72}
          className="w-full h-full object rounded-full relative z-10"
        />
      </div>
      <Text variant="caption" className="text-center group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </Text>
    </div>
  );
};

export default SkillItem;
