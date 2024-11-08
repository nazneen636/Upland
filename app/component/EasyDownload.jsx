import React from "react";
import Container from "../layer/Container";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa6";
import easyDownloadText from "../../public/textEasyDowlnoad.png";
import line from "../../public/line.png";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import Dot from "../layer/Dot";
import Heading from "../layer/Heading";

const EasyDownload = () => {
  return (
    <div>
      <Container className="flex font-roboto justify-between items-center">
        <div className="left max-w-[457px] relative">
          <Image
            src={easyDownloadText}
            className="absolute left-0 top-[11px]"
          />
          <div className="flex gap-2 mb-[20px]">
            <Dot />
            <Dot />
          </div>
          <Heading headingText="easy download and ready to use" />
          <p className="para mt-[30px]">
            Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem
            est officia excepteur cupidatat consectetur. Labore do nulla ipsum
            dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing.
          </p>
          <div className="btn mt-[50px] flex justify-between">
            <div className="font-roboto text-white py-[18px] px-9 rounded-[50px] bg-gradient-to-r from-[#FF6231] to-[#FFA979] flex items-center gap-[10px] group duration-500 transition-all  border-2 border-transparent hover:bg-none hover:border-orange">
              <IoLogoGooglePlaystore className="text-white text-4xl group-hover:text-orange duration-500 transition-all" />
              <div className="flex flex-col">
                <span className="font-normal text-[10px] leading-[100%] group-hover:text-orange duration-500 transition-all">
                  Download on the
                </span>
                <span className="font-medium text-base leading-[170%] uppercase group-hover:text-orange duration-500 transition-all">
                  Google play
                </span>
              </div>
            </div>
            <div className="font-roboto text-white py-[18px] px-9 rounded-[50px] bg-gradient-to-r from-[#FF6231] to-[#FFA979] flex items-center gap-[10px] group duration-500 transition-all border-2 border-transparent hover:bg-none hover:border-orange">
              <FaApple className="text-white text-4xl group-hover:text-orange duration-500 transition-all" />
              <div className="flex flex-col mt-2">
                <span className="font-normal text-[10px] leading-[100%] group-hover:text-orange duration-500 transition-all">
                  Download on the
                </span>
                <span className="font-medium text-base leading-[170%] uppercase group-hover:text-orange duration-500 transition-all">
                  app store
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex gap-[52px]">
          <div className="basic">
            <span className="text-orange font-medium text-[12px] tracking-wider leading-[170%] uppercase mb-4">
              basic
            </span>
            <h2 className="font-bold text-[32px] leading-[170%] text-black">
              $12 <sup className="text-base">.99</sup>
            </h2>
            <p className="para mb-3">/per month</p>
            <Image src={line} className="mb-[30px]" />
            <ul className="flex flex-col gap-1">
              <li className="para hover:text-[#888888] hover:font-bold duration-500 transition-all flex gap-4 items-center">
                <FaCircle className="text-orange text-[5px]" />
                Proident excepteur
              </li>
              <li className="para hover:text-[#888888] hover:font-bold duration-500 transition-all flex gap-4 items-center">
                <FaCircle className="text-orange text-[5px]" />
                Veniam occaecat id ea
              </li>
              <li className="para hover:text-[#888888] hover:font-bold duration-500 transition-all flex gap-4 items-center">
                <FaCircle className="text-orange text-[5px]" />
                Labore do nulla ipsum
              </li>
              <li className="para hover:text-[#888888] hover:font-bold duration-500 transition-all flex gap-4 items-center">
                <FaCircle className="text-orange text-[5px]" />
                Culpa non ex tempor qui
              </li>
            </ul>
          </div>
          <div className="popular">
            <span className="text-orange font-medium text-[12px] tracking-wider leading-[170%] uppercase mb-4">
              popular
            </span>
            <h2 className="font-bold text-[32px] leading-[170%] text-black">
              $99 <sup className="text-base">.99</sup>
            </h2>
            <p className="para mb-3">/per year</p>
            <Image src={line} className="mb-[30px]" />
            <ul className="flex flex-col gap-1">
              <li className="para hover:text-[#888888] hover:font-bold duration-500 transition-all flex gap-4 items-center">
                <FaCircle className="text-orange text-[5px]" />
                Proident excepteur
              </li>
              <li className="para hover:text-[#888888] hover:font-bold duration-500 transition-all flex gap-4 items-center">
                <FaCircle className="text-orange text-[5px]" />
                Veniam occaecat id ea
              </li>
              <li className="para hover:text-[#888888] hover:font-bold duration-500 transition-all flex gap-4 items-center">
                <FaCircle className="text-orange text-[5px]" />
                Labore do nulla ipsum
              </li>
              <li className="para hover:text-[#888888] hover:font-bold duration-500 transition-all flex gap-4 items-center">
                <FaCircle className="text-orange text-[5px]" />
                Culpa non ex tempor qui
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EasyDownload;
