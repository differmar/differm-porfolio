"use client";

import SliderTrack from "../atoms/SliderTrack";
import SliderBall from "../atoms/SliderBall";
import Text from "../atoms/Text";

interface TimeSliderProps {
  startYear?: number;
  endYear?: number;
  className?: string;
}

const TimeSlider = ({ 
  startYear = 2020, 
  endYear,
  className = "" 
}: TimeSliderProps) => {
  const currentYear = endYear || new Date().getFullYear();

  return (
    <div className={`w-full max-w-4xl px-8 relative ${className}`}>
      <SliderTrack>
        <SliderBall />
      </SliderTrack>
      
      <div className="flex justify-between mt-4">
        <Text variant="label">{startYear}</Text>
        <Text variant="label">{currentYear}</Text>
      </div>
    </div>
  );
};

export default TimeSlider;
