"use client";

import { useMemo, useEffect, useState, useRef } from "react";
import gsap from "gsap";

interface GitHubGridProps {
  className?: string;
  squareSize?: number;
  gap?: number;
  opacity?: number;
  changeInterval?: number;
}

const GitHubGrid = ({
  className = "",
  squareSize = 18,
  gap = 2,
  opacity = 0.7,
  changeInterval = 1000,
}: GitHubGridProps) => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const randomOpacitiesRef = useRef<Map<string, number>>(new Map());
  const rectsRef = useRef<Map<number, SVGRectElement>>(new Map());
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const grid = useMemo(() => {
    const cellSize = squareSize + gap;
    const cols = Math.ceil(dimensions.width / cellSize) + 10;
    const rows = Math.ceil(dimensions.height / cellSize) + 10;

    const squares: Array<{
      x: number;
      y: number;
      opacity: number;
      targetOpacity: number;
    }> = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const key = `${row}-${col}`;
        
        if (!randomOpacitiesRef.current.has(key)) {
          const randomOpacity = Math.random() * 0.9 + 0.1;
          randomOpacitiesRef.current.set(key, randomOpacity);
        }

        const baseOpacity = randomOpacitiesRef.current.get(key)!;
        const initialOpacity = baseOpacity * 0.2;

        squares.push({
          x: col * cellSize,
          y: row * cellSize,
          opacity: initialOpacity,
          targetOpacity: baseOpacity,
        });
      }
    }

    return squares;
  }, [dimensions, squareSize, gap]);

  useEffect(() => {
    const rects = rectsRef.current;
    if (rects.size === 0) return;

    const rectsArray = Array.from(rects.values());

    const animateColorChange = () => {
      rectsArray.forEach((rect) => {
        // const currentOpacity = parseFloat(rect.getAttribute('data-current-opacity') || '0.3');
        
        const newTargetOpacity = Math.random() * 0.9 + 0.1;
        const targetOpacityWithMultiplier = newTargetOpacity * opacity;
        
        rect.setAttribute('data-target-opacity', targetOpacityWithMultiplier.toString());
        rect.setAttribute('data-current-opacity', targetOpacityWithMultiplier.toString());

        gsap.to(rect, {
          opacity: targetOpacityWithMultiplier,
          duration: 0.6,
          ease: "power2.inOut",
        });
      });
    };

    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }

    requestAnimationFrame(() => {
      rectsArray.forEach((rect) => {
        const targetOpacity = parseFloat(rect.getAttribute('data-target-opacity') || '0.7');
        const initialOpacity = targetOpacity * 0.3;
        rect.setAttribute('data-current-opacity', initialOpacity.toString());
        gsap.set(rect, { opacity: initialOpacity });

        gsap.to(rect, {
          opacity: targetOpacity,
          duration: 0.8,
          delay: Math.random() * 0.5,
          ease: "power2.inOut",
        });
      });

      intervalIdRef.current = setInterval(animateColorChange, changeInterval);
    });

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
      rectsArray.forEach((rect) => {
        gsap.killTweensOf(rect);
      });
    };
  }, [grid, changeInterval, opacity]);

  const baseGreen = { r: 39, g: 174, b: 96 };

  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)',
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in',
        WebkitFilter: 'blur(2px)',
      }}
    >
      <svg
        className="absolute inset-0"
        style={{ width: "100%", height: "100%" }}
        preserveAspectRatio="none"
      >
        {grid.map((square, index) => (
          <rect
            key={index}
            ref={(el) => {
              if (el) {
                rectsRef.current.set(index, el);
                el.setAttribute('data-target-opacity', (square.targetOpacity * opacity).toString());
                el.setAttribute('data-current-opacity', (square.opacity * opacity).toString());
              }
            }}
            x={square.x}
            y={square.y}
            width={squareSize}
            height={squareSize}
            fill={`rgba(${baseGreen.r}, ${baseGreen.g}, ${baseGreen.b}, ${square.opacity * opacity})`}
            opacity={square.opacity * opacity}
          />
        ))}
      </svg>
    </div>
  );
};

export default GitHubGrid;
