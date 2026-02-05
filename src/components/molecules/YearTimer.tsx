"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface YearTimerProps {
  startYear?: number;
  endYear?: number;
  duration?: number;
  className?: string;
}

const YearTimer = ({
  startYear = 2017,
  endYear,
  duration = 3,
  className = "",
}: YearTimerProps) => {
  const currentYear = endYear || new Date().getFullYear();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const years: number[] = [];
    for (let year = startYear; year <= currentYear; year++) {
      years.push(year);
    }

    // Limpiar contenido previo
    container.innerHTML = "";

    // Crear todos los años
    years.forEach((year) => {
      const yearElement = document.createElement("div");
      yearElement.textContent = year.toString();
      yearElement.className = "text-2xl sm:text-3xl md:text-4xl font-bold text-[#BFBFBF]";
      yearElement.style.position = "absolute";
      yearElement.style.width = "100%";
      yearElement.style.textAlign = "center";
      yearElement.style.left = "0";
      yearElement.style.right = "0";
      container.appendChild(yearElement);
    });

    // Esperar a que los elementos se rendericen para obtener sus dimensiones
    requestAnimationFrame(() => {
      const yearElements = Array.from(container.children) as HTMLElement[];
      
      // Obtener la altura real del primer elemento para calcular el espaciado
      const firstElement = yearElements[0] as HTMLElement;
      if (!firstElement) return;
      
      const itemHeight = firstElement.offsetHeight || 80;
      const containerHeight = container.offsetHeight;
      const centerOffset = (containerHeight - itemHeight) / 2;

      // Establecer posición inicial: mostrar el primer año en el centro
      yearElements.forEach((el, index) => {
        gsap.set(el, {
          y: (index * itemHeight) + centerOffset,
          opacity: index === 0 ? 1 : 0,
        });
      });

      // Animación de scroll hacia arriba (como reloj analógico)
      const totalDuration = duration * 1000;
      const delayPerItem = totalDuration / (years.length - 1);

      years.forEach((_, index) => {
        if (index === 0) return; // El primer año ya está visible

        setTimeout(() => {
          yearElements.forEach((el, elIndex) => {
            const targetY = ((elIndex - index) * itemHeight) + centerOffset;
            const isVisible = elIndex === index;
            
            gsap.to(el, {
              y: targetY,
              opacity: isVisible ? 1 : 0,
              duration: 0.5,
              ease: "power2.inOut",
            });
          });
        }, index * delayPerItem);
      });
    });


  }, [startYear, currentYear, duration]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div
        ref={containerRef}
        className="relative overflow-hidden flex items-center justify-center"
        style={{ 
          height: "6rem",
          minWidth: "8rem",
          paddingTop: "1rem",
          paddingBottom: "1rem"
        }}
      >
        {/* Los años se generan dinámicamente */}
      </div>
    </div>
  );
};

export default YearTimer;
