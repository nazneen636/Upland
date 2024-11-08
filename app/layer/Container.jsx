import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`mx-auto max-w-[1140px] ${className}`}>{children}</div>
  );
};

export default Container;
