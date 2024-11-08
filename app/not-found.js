import React from "react";
import { FaCircle } from "react-icons/fa";
import Container from "./layer/Container";

const notFound = () => {
  return (
    <div className="bg-bannerBg2 pt-[159px] bg-no-repeat bg-bottom bg-cover pb-[181px]">
      <Container>
        <h2 className="text-[60px] font-semibold capitalize leading-[100%] text-white font-grotesque">
          Oops!
        </h2>
        <div className="mt-[30px] flex items-center gap-3">
          <span className="capitalize font-roboto text-sm leading-[170%] text-[#B3B1B7]">
            Home
          </span>
          <FaCircle className="text-[#B3B1B7] text-[4px]" />
          <span className="capitalize font-roboto text-sm leading-[170%] text-[#B3B1B7]">
            404
          </span>
        </div>
      </Container>
    </div>
  );
};

export default notFound;
