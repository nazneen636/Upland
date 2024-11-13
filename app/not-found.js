import React from "react";
import { FaCircle } from "react-icons/fa";
import Container from "./layer/Container";
import oppsText from "../public/not-foundText.png";
import Image from "next/image";

const notFound = () => {
  return (
    <div>
      <div className="bg-bannerBg2 pt-[159px] bg-no-repeat bg-bottom bg-cover pb-[181px]">
        <Container className="relative">
          <Image
            src={oppsText}
            className="absolute top-[120px] left-[-319px]"
          />
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
      <div className="mt-[157px] ">
        <Container>
          <h2 className="font-grotesque text-[88px] font-bold leading-[100%]">
            404
          </h2>
          <h3 className="text-[50px] font-grotesque font-semibold leading-[100%]">
            Page not found
          </h3>
        </Container>
      </div>
    </div>
  );
};

export default notFound;
