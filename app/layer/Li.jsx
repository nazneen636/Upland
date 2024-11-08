import Link from "next/link";
import React from "react";

const Li = ({ liText, className, href }) => {
  return (
    <li>
      <Link
        href={href}
        className={`text-white text-base leading-[170%] font-roboto ${className}`}
      >
        {liText}
      </Link>
    </li>
  );
};

export default Li;
