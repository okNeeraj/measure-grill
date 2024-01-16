import { useEffect, useState } from "react";
import {
  INDICATE_SIZES,
  INDICATE_COLOR
} from "../utils/constant";

const IndicatorCircle = ({ percentage, variant, size, label }) => {
  const [radius] = useState(56)
  const [indicateColor, setIndicateColor] = useState(INDICATE_COLOR[variant] || '100deg 80%');
  const [indicateSize, setIndicateSize] = useState(INDICATE_SIZES[size] || 'md');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setIndicateColor(INDICATE_COLOR[variant] || '100deg 80%');
    setIndicateSize(INDICATE_SIZES[size] || 'md')
    const circumference = radius * 2 * Math.PI;
    const dashOffset = circumference - (percentage / 100) * circumference;
    setOffset(dashOffset);
  }, [percentage]);

  return (
    <div className="indicator flex flex-col items-center relative">
      <div style={{ width: `${indicateSize}`, height: `${indicateSize}` }}>
        <svg viewBox="0 0 120 120" className="">
          <circle
            className="progress-circle"
            r={radius}
            cx="60"
            cy="60"
            fill={`hsl(${indicateColor} 95%)`}
            stroke={`hsl(${indicateColor} 95%)`}
            strokeWidth="8"
          />
          <circle
            className="progress"
            r={radius}
            cx="60"
            cy="60"
            fill="none"
            stroke={`hsl(${indicateColor} 45%)`}
            strokeWidth="8"
            style={{ strokeDasharray: `${351.85837720205683}`, strokeDashoffset: `${offset}` }}
          />
        </svg>
      </div>
      <div className={`indicator-value absolute ${size === 'md' ? 'text-2xl top-[calc(96px-74px)]' : 'text-4xl font-bold top-[calc(124px-82px)]'}`}>{percentage}</div>
      <div className={`indicator-label mt-3 ${size === 'md' ? 'text-xs' : 'font-bold text-sm'} text-[hsl(${indicateColor} 45%)]`}>{label}</div>
    </div >

  );
};

export default IndicatorCircle
