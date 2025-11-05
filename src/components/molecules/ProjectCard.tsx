"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

interface ProjectCardProps {
  id: number;
  title?: string;
  description?: string;
  image?: string;
  action?: {
    label: string;
    url?: string;
    onClick?: () => void;
  };
}

const generateRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
};

const ProjectCard = ({ id, title, description, image, action }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colors = useMemo(() => {
    return [generateRandomColor(), generateRandomColor(), generateRandomColor()];
  }, []);

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
  };

  return (
    <div 
      className="group relative rounded-3xl p-6 border border-[#333] bg-[#1a1a1a] overflow-hidden min-h-[450px]"
      style={{
        transition: 'background 0.7s ease-in-out',
      }}
      tabIndex={0}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = gradientStyle.backgroundImage;
        setIsHovered(true);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#1a1a1a';
        setIsHovered(false);
      }}
      onFocus={(e) => {
        e.currentTarget.style.background = gradientStyle.backgroundImage;
        setIsHovered(true);
      }}
      onBlur={(e) => {
        e.currentTarget.style.background = '#1a1a1a';
        setIsHovered(false);
      }}
    >
      <svg 
        className="absolute inset-0 w-full h-full !min-h-[200px] pointer-events-none" 
        style={{ 
          opacity: isHovered ? 0.5 : 0,
          mixBlendMode: "multiply",
          transition: 'opacity 0.2s ease-out',
        }}
      >
        <filter id={`cardNoise-${id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="3" numOctaves="6" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 0.3 0 0.2 0 0.4 0 0.1 0 0.5 0 0.3 0 0.6 0 0.2"/>
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter={`url(#cardNoise-${id})`} fill="rgba(0,0,0,0.3)"/>
      </svg>
      <div className="relative z-10">
        <div className="w-full h-48 bg-[#333] rounded mb-4 overflow-hidden">
          {image && (
            <Image 
              src={image} 
              width={100}
              height={100}
              alt={title || `Proyecto ${id}`}
              className="w-full h-full object-cover rounded"
            />
          )}
        </div>
        <h3 className="text-[#F2F2F2] text-xl font-bold mb-2">
          {title || `Proyecto ${id}`}
        </h3>
        <Text variant="caption" className="mb-4">
          {description || `Descripción del proyecto ${id}`}
        </Text>
        {action && (
          <Button
            label={action.label}
            onClick={action.onClick}
            url={action.url}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
