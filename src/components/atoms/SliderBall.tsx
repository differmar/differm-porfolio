"use client";

interface SliderBallProps {
  className?: string;
}

const SliderBall = ({ className = "" }: SliderBallProps) => {
  return (
    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-[#A6A6A6] to-[#F2F2F2] rounded-full animate-slide-left-right shadow-lg ${className}`}></div>
  );
};

export default SliderBall;
