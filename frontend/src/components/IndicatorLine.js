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
  return <div className="h-1 indicator-line mr-[1px]" style={{ width: `${proportion * 100}%` }}></div>;
};

const IndicatorLine = ({ label }) => {
  const { distributions } = CUMULATIVE_LAYOUT_SHIFT_SCORE;
  // console.log(distributions)

  return (
    <div className="">
      <div className="indicator-label text-xs">{label}</div>
      <div className="indicator-bar flex w-48 mt-2">
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
