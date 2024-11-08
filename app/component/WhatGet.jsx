import React from "react";
import Container from "../layer/Container";
import Dot from "../layer/Dot";
import Heading from "../layer/Heading";
import shadow from "../../public/textGet.png";
import get1 from "../../public/get1.png";
import get2 from "../../public/get2.png";
import get3 from "../../public/get3.png";
import Image from "next/image";

const WhatGet = () => {
  return (
    <div>
      <Container className="mt-[108px]">
        <div className="relative flex flex-col items-center justify-center">
          <div className="flex gap-2 mb-6">
            <Dot />
            <Dot />
          </div>
          <Image
            src={shadow}
            alt=""
            className="absolute left-1/2 -translate-x-1/2 top-[20px] w-[73%]"
          />
          <Heading
            className="mb-[50px]"
            headingText="See what you will get with us"
          />
        </div>
        {/* ============================================================== */}
        <div className="getItems flex justify-between">
          <div className="getItem bg-white px-10 py-[34px] shadow-lg rounded-[20px] shadow-[#3015871a]">
            <Image src={get1} alt="'" />
            <h3 className="title mt-9 mb-4">Development courses</h3>
            <p className="para max-w-[280px] mt-4 mb-4">
              Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt
              dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.
            </p>
          </div>
          <div className="getItem bg-white px-10 py-[34px] shadow-lg rounded-[20px] shadow-[#3015871a]">
            <Image src={get2} alt="'" />
            <h3 className="title mt-9 mb-4">Usability interface</h3>
            <p className="para max-w-[280px] mt-4 mb-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="getItem bg-white px-10 py-[34px] shadow-lg rounded-[20px] shadow-[#3015871a]">
            <Image src={get3} alt="'" />
            <h3 className="title mt-9 mb-4">Money saving services</h3>
            <p className="para max-w-[280px] mt-4 mb-4">
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet. Culpa non ex tempor qui nulla
              laborum.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatGet;
