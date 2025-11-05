"use client";

import { montserrat } from "@/fonts";

interface MenuItemProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "desktop" | "mobile";
}

const MenuItem = ({ label, href, onClick, variant = "desktop" }: MenuItemProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      // Scroll suave al elemento
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (variant === "mobile") {
    return (
      <button
        onClick={handleClick}
        className={`${montserrat.className} 
          font-bold text-[2rem] leading-[2.4rem]
          cursor-pointer text-[#F2F2F2]
          transition-opacity duration-300
          hover:opacity-70`}
      >
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`${montserrat.className} relative 
        font-bold text-[1rem] leading-[1.2rem]
        cursor-pointer pb-2 text-[#F2F2F2]
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-full after:h-[3px] after:bg-[#F2F2F2]
        after:scale-x-0 after:origin-center
        after:transition-transform after:duration-300
        hover:after:scale-x-100`}
    >
      {label}
    </button>
  );
};

export default MenuItem;
