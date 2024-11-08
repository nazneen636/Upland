import React from "react";

const Heading = ({ headingText, className }) => {
  return (
    <h2
      className={`font-semibold leading-[130%] capitalize text-[45px] font-grotesque ${className}`}
    >
      {headingText}
    </h2>
  );
};

export default Heading;
