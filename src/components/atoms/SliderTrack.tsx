"use client";

interface SliderTrackProps {
  className?: string;
  children?: React.ReactNode;
}

const SliderTrack = ({ className = "", children }: SliderTrackProps) => {
  return (
    <div className={`w-full h-1 bg-[#333] relative overflow-visible rounded-full ${className}`}>
      {children}
    </div>
  );
};

export default SliderTrack;
