"use client";

interface SliderTrackProps {
  className?: string;
  children?: React.ReactNode;
}

const SliderTrack = ({ className = "", children }: SliderTrackProps) => {
  return (
    <div className={`w-full h-1 bg-[#3a3a3a] relative overflow-visible rounded-full ${className}`}>
      {children}
    </div>
  );
};

export default SliderTrack;
