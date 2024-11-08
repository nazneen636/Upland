import Link from "next/link";
import React from "react";

const Btn = ({ className, btnText, href = "/" }) => {
  return (
    <Link
      href={href}
      className={`inline-block capitalize text-base font-medium leading-[170%] font-roboto text-white py-4 px-9 rounded-[30px] bg-gradient-to-r from-[#FF6231] to-[#FFA979]  ${className}`}
    >
      {btnText}
    </Link>
  );
};

export default Btn;
