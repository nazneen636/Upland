"use client";

import React, { useState } from "react";
import Container from "@/app/layer/Container";
import TwoDot from "@/app/layer/TwoDot";
import Image from "next/image";
import Btn from "@/app/layer/Btn";
import freeTrial from "../../../public/freeTrialBg.png";
import PopUp from "./PopUp";

const FreeTrial = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => setIsPopUpOpen(true);
  const closePopUp = () => setIsPopUpOpen(false);

  return (
    <div className="relative h-[1064px]">
      <div className="bg-freeTrialBg bg-no-repeat bg-center bg-cover absolute left-0 top-[-160px] w-full flex justify-center items-center">
        <Container className="relative">
          <Image
            src={freeTrial}
            className="relative z-10 w-full pt-[282px] pb-[218px]"
          />
          <div className="absolute left-[50%] -translate-x-1/2 -translate-y-1/2 top-[50%] z-50 flex flex-col items-center justify-center w-full max-w-[573px] pt-[80px]">
            <TwoDot orangeText="trendy application" />
            <h2 className="text-white font-bold text-[70px] leading-[110%] font-grotesque text-center mt-3 mb-10">
              Get a free trial for <span className="text-orange">30</span> days
            </h2>
            <Btn onClick={openPopUp} btnText="get a free trial" />
          </div>
        </Container>
      </div>

      {isPopUpOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
          <PopUp closePopUp={closePopUp} />
        </div>
      )}
    </div>
  );
};

export default FreeTrial;
