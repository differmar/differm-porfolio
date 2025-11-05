"use client";

import { useState } from "react";
import { poppins } from "@/fonts";
import { useTextSlideEffect } from "../../hook/useTextSlideEffect";
import Image from "next/image";
import MenuItem from "../molecules/MenuItem";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOptions = [
    {
      id: 1,
      label: "INICIO",
      href: "#inicio",
    },
    {
      id: 2,
      label: "SOBRE MI",
      href: "#sobre-mi",
    },
    {
      id: 3,
      label: "PROYECTOS",
      href: "#proyectos",
    },
    {
      id: 4,
      label: "CONTACTO",
      href: "#contacto",
    },
  ];

  const { textRef } = useTextSlideEffect({
    delay: 0.5,
    duration: 0.8,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center h-[8rem] px-4 sm:px-8 pt-10 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <p className={`${poppins.className} text-[1.8rem] sm:text-[2.4rem] opacity-80 font-bold text-[#F2F2F2]`}>
          <span ref={textRef} className="inline-block">differmar</span>
        </p>
      </div>
      
      <div className="hidden sm:flex gap-6 ml-auto">
        {menuOptions.map((option) => (
          <MenuItem
            key={option.id}
            label={option.label}
            href={option.href}
            variant="desktop"
          />
        ))}
      </div>

      <button
        onClick={toggleMenu}
        className="sm:hidden ml-auto z-50 transition-transform duration-300 hover:scale-110"
        aria-label="Toggle menu"
      >
        <Image 
          src="/burguer.svg" 
          width={28}
          height={28}
          alt="Menu" 
          className={`w-7 h-7 transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`sm:hidden fixed inset-0 bg-[#262626] z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {menuOptions.map((option) => (
            <MenuItem
              key={option.id}
              label={option.label}
              href={option.href}
              variant="mobile"
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
