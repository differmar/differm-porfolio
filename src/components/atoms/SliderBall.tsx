"use client";

import React from "react";

interface SliderBallProps {
  className?: string;
}

const SliderBall = React.forwardRef<HTMLDivElement, SliderBallProps>(
  ({ className = "" }, ref) => {
    return (
      <div 
        ref={ref}
        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-[#A6A6A6] to-[#F2F2F2] rounded-full shadow-lg ${className}`}
      ></div>
    );
  }
);

SliderBall.displayName = "SliderBall";

export default SliderBall;
