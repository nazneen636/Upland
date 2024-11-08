import React from "react";
import Container from "../layer/Container";
import Image from "next/image";
import Dot from "../layer/Dot";
import Heading from "../layer/Heading";
import { FaRegCheckCircle } from "react-icons/fa";
import popularImg from "../../public/popular.png";
import popularText from "../../public/textPopular.png";
import bgDew from "../../public/bgDew1.png";
import bgDew2 from "../../public/bgDew2.png";

const Popular = () => {
  return (
    <div className="mt-[160px] mb-[90px]">
      <Container className="flex justify-between relative">
        <div className="left">
          <Image src={popularImg} />
        </div>
        <div className="right max-w-[457px] relative">
          <Image src={popularText} className="absolute top-[-11px] left-0" />
          <div className="flex gap-2">
            <Dot />
            <Dot />
          </div>
          <Heading headingText="The most popular application 2021" />
          <p className="para !text-[22px] max-w-[457px] tracking-wider">
            Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt
            dolore ipsum.
          </p>
          <div className="checkBox mt-[30px] flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <FaRegCheckCircle className="text-[20px] text-red-600" />
              <p className="para max-w-[417px]">
                Elit mollit aliqua quis ad sint nulla Lorem commodo
                reprehenderit.
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <FaRegCheckCircle className="text-[20px] text-red-600" />
              <p className="para max-w-[417px]">
                Tempor consectetur aliqua aute veniam occaecat eu do esse
                adipisicing ut.
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <FaRegCheckCircle className="text-[20px] text-red-600" />
              <p className="para max-w-[417px]">
                Culpa non ex tempor qui nulla laborum. Laboris culpa ea
                incididunt dolore ipsum tempor duis do ullamco eiusmod officia
                magna ad id.
              </p>
            </div>
          </div>
        </div>
        <Image src={bgDew2} className="absolute top-[-235px] right-[-378px]" />
        <Image src={bgDew} className="absolute bottom-[-187px] left-[-256px]" />
      </Container>
    </div>
  );
};

export default Popular;
