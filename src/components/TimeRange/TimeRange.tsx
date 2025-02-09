import React, { useState } from "react";
import TimeButton from "./components/TimeButton";

interface TimeRangeProps {
  onChange: (range: string) => void;
}

const TimeRange = ({ onChange }:TimeRangeProps) => {
  const [activeRange, setActiveRange] = useState("24h");
  const ranges = ["24h", "7 days", "30 days", "All time"];

  const handleSelect = (range: string) => {
    setActiveRange(range);
    onChange(range);
  };

  return (
    <div className="flex items-center pt-[15px] gap-[8px]">
      <p className="text-gray text-[12px]">Time Range:</p>
      {ranges.map((range) => (
        <TimeButton
          key={range}
          label={range}
          active={activeRange === range}
          onClick={() => handleSelect(range)}
        />
      ))}
    </div>
  );
};

export default TimeRange;
