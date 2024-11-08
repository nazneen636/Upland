import Container from "@/app/layer/Container";
import Image from "next/image";
import React from "react";
import footerImg from "../../../public/footerImg.png";
import logo from "../../../public/footerLogo.png";
import Dot from "@/app/layer/Dot";
import Btn from "@/app/layer/Btn";
import Menu from "@/app/layer/Menu";

const Footer = () => {
  return (
    <div className="mt-[300px] bg-footerBg bg-no-repeat bg-top bg-cover ">
      <Container className="flex justify-center items-center flex-col relative">
        {/* ========================================== */}
        {/* ====================subscribe box== */}
        <div className="subscribe py-[70px] absolute left-0 top-[-74px] w-full bg-white rounded-[20px] flex justify-end pr-[90px] shadow-xl shadow-[#00000039]">
          <div className="left">
            <Image
              src={footerImg}
              alt="upland"
              className="absolute left-10 bottom-10"
            />
          </div>
          <div className="right">
            <div className="flex items-center">
              <Dot />
              <Dot className="ml-2 mr-[15px]" />
              <h4 className="text-[12px] leading-[170%] font-medium text-orange mt-1">
                Newsletter
              </h4>
            </div>
            <h2 className="font-semibold text-4xl leading-[200%] text-black font-grotesque">
              Be aware of new features
            </h2>
            <p className="leading-[170%] text-base font-roboto max-w-[438px] text-[#888888]">
              Culpa non ex tempor qui nulla laborum. Laboris culpa ea ipsum
              tempor duis do ullamco eiusmod officia magna ad id.
            </p>
            <div className="form  mt-[26px] w-full flex gap-5">
              <input
                type="email"
                placeholder="Email"
                className="border border-[#E6EBFC] py-[18px] px-[30px] w-[435px] rounded-full outline-none"
              />
              <Btn href="/" btnText="Subscribe" />
            </div>
          </div>
        </div>
        {/* ====================subscribe box== */}
        {/* ========================================== */}

        <Image src={logo} alt="logo" className="mt-[370px] mb-6" />
        <Menu />
        <hr className="w-full border border-[#ffffff14] mt-[47px] mb-[23px]" />
        <p className="font-roboto text-sm leading-[170%] mb-[23px] text-[#B3B1B7]">
          © All rights reserved. Upland 2020
        </p>
      </Container>
    </div>
  );
};

export default Footer;
