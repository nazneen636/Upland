import React from "react";

const Dot = ({ className }) => {
  return (
    <div
      className={`relative after:absolute after:w-[6px] after:h-[6px] after:rounded-full after:bg-orange ${className}`}
    ></div>
  );
};

export default Dot;
