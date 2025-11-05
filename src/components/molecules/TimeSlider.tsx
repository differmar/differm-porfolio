"use client";

import React from "react";
import SliderTrack from "../atoms/SliderTrack";
import SliderBall from "../atoms/SliderBall";
import Text from "../atoms/Text";

interface TimeSliderProps {
  startYear?: number;
  endYear?: number;
  className?: string;
  ballRef?: React.RefObject<HTMLDivElement | null>;
}

const TimeSlider = React.forwardRef<HTMLDivElement, TimeSliderProps>(({ 
  startYear = 2017, 
  endYear,
  className = "",
  ballRef,
}, ref) => {
  const currentYear = endYear || new Date().getFullYear();

  return (
    <div ref={ref} className={`w-full max-w-4xl px-8 relative ${className}`}>
      <SliderTrack>
        <SliderBall ref={ballRef} />
      </SliderTrack>
      
      <div className="flex justify-between mt-4">
        <Text variant="label">{startYear}</Text>
        <Text variant="label">{currentYear}</Text>
      </div>
    </div>
  );
});

TimeSlider.displayName = "TimeSlider";

export default TimeSlider;
