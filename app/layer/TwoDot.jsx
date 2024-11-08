import React from "react";
import Dot from "./Dot";

const TwoDot = ({ orangeText }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-3 mb-2">
        <Dot />
        <Dot />
      </div>
      <h4 className="uppercase font-medium text-[12px] leading-[170%] text-orange">
        {orangeText}
      </h4>
    </div>
  );
};

export default TwoDot;
