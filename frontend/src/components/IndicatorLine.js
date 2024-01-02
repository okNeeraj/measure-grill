import { useEffect, useState } from "react";
import {
  INDICATE_SIZES,
  INDICATE_COLOR
} from "../utils/constant";

const CUMULATIVE_LAYOUT_SHIFT_SCORE = {
  "percentile": 2456,
  "distributions": [
    {
      "min": 0,
      "max": 2500,
      "proportion": 0.7837243401759479
    },
    {
      "min": 2500,
      "max": 4000,
      "proportion": 0.153225806451612
    },
    {
      "min": 4000,
      "proportion": 0.06304985337243381
    }
  ],
  "category": "FAST"
}

const LineProgress = ({ proportion }) => {
  return <div className="h-[2px] indicator-line mr-[1px]" style={{ width: `${proportion * 100}%` }}></div>;
};

const IndicatorLine = ({ label, score, scoreUnit }) => {
  const { distributions } = CUMULATIVE_LAYOUT_SHIFT_SCORE;
  // console.log(distributions)

  return (
    <div className="indicator-line-card px-4 py-6 bg-white rounded-md">
      <div className="mb-4 flex gap-4 items-end">
        <span className="indicator-label text-lg text-gray-500">{label}</span>
        <span className={`text-2xl text indicat-score`}>{score} {scoreUnit}</span>
      </div>
      <div className="indicator-bar flex mt-2">
        {distributions.map((distribution, index) => (
          <LineProgress
            key={index}
            proportion={distribution.proportion}
          />
        ))}
      </div>
    </div >
  );
};

export default IndicatorLine
