"use client";

import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "hero";
  className?: string;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(({ 
  children, 
  level = 1, 
  size = "xl",
  className = "",
}, ref) => {
  const sizeClasses = {
    hero: "text-[10rem] sm:text-[6rem] md:text-[24rem] leading-[8.5rem] sm:leading-normal",
    "6xl": "text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem]",
    "5xl": "text-[3rem] sm:text-[4rem] md:text-[5rem]",
    "4xl": "text-[2.5rem] sm:text-[3rem] md:text-[4rem]",
    "3xl": "text-[2rem] sm:text-[2.5rem] md:text-[3rem]",
    "2xl": "text-[1.5rem] sm:text-[2rem] md:text-[2.5rem]",
    xl: "text-xl sm:text-2xl",
  };

  const baseClasses = "font-[mazurquica-vf] font-bold bg-gradient-to-r from-[#A6A6A6] to-[#F2F2F2] bg-clip-text text-transparent";
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${className}`;

  switch (level) {
    case 1:
      return <h1 ref={ref} className={combinedClasses}>{children}</h1>;
    case 2:
      return <h2 ref={ref} className={combinedClasses}>{children}</h2>;
    case 3:
      return <h3 ref={ref} className={combinedClasses}>{children}</h3>;
    case 4:
      return <h4 ref={ref} className={combinedClasses}>{children}</h4>;
    case 5:
      return <h5 ref={ref} className={combinedClasses}>{children}</h5>;
    case 6:
      return <h6 ref={ref} className={combinedClasses}>{children}</h6>;
    default:
      return <h1 ref={ref} className={combinedClasses}>{children}</h1>;
  }
});

Heading.displayName = "Heading";

export default Heading;
