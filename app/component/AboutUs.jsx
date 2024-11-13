"use client"; // Add this line at the top

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../layer/Container";
import Image from "next/image";
import Dot from "../layer/Dot";
import Heading from "../layer/Heading";
import nineNine from "../../public/nineNine.png";
import circleClient from "../../public/clientCircle.png";
import aboutUsText from "../../public/textAbout.png";
import dynamic from "next/dynamic";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

// Dynamically import Slider
const Slider = dynamic(() => import("react-slick"), { ssr: false });

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        color: "#CCCCCC",
        fontSize: "40px",
        position: "absolute",
        right: "182px",
        top: "-108px",
      }}
      onClick={onClick}
    >
      <FaArrowRightLong />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        color: "#CCCCCC",
        fontSize: "40px",
        position: "absolute",
        left: "1210px",
        top: "-111px",
      }}
      onClick={onClick}
    >
      <FaArrowLeftLong />
    </div>
  );
}

const AboutUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Container className="max-w-[1160px] mt-[180px] h-[457px] relative z-10">
        <Image
          src={aboutUsText}
          alt="About Us Text"
          className="absolute top-[6px] left-0"
        />
        <div className="flex gap-2 mb-4">
          <Dot />
          <Dot />
        </div>
        <Heading headingText="they say about us" className="mb-[55px]" />
        <div className="w-[1500px] absolute left-0">
          <Slider {...settings}>
            <div className="card p-10 max-w-[480px] flex flex-col gap-4 rounded-[20px] bg-white shadow-lg shadow-[#30158724]">
              <Image src={nineNine} />
              <p className="para">
                “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea
                Lorem est officia excepteur cupidatat consectetur. Labore do
                nulla ipsum dolore ipsum. Proident excepteur ex aliqua
                cupidatat.”
              </p>
              <div className="flex items-center gap-5 mt-4">
                <Image src={circleClient} />
                <p className="text-base leading-[170%] font-semibold text-black">
                  Brooklyn Simmon
                </p>
              </div>
            </div>
            <div className="card p-10 max-w-[480px] flex flex-col gap-4 rounded-[20px] bg-white shadow-lg shadow-[#30158724]">
              <Image src={nineNine} />
              <p className="para">
                “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea
                Lorem est officia excepteur cupidatat consectetur. Labore do
                nulla ipsum dolore ipsum. Proident excepteur ex aliqua
                cupidatat.”
              </p>
              <div className="flex items-center gap-5 mt-4">
                <Image src={circleClient} />
                <p className="text-base leading-[170%] font-semibold text-black">
                  Brooklyn Simmon
                </p>
              </div>
            </div>
            <div className="card p-10 max-w-[480px] flex flex-col gap-4 rounded-[20px] bg-white shadow-lg shadow-[#30158724]">
              <Image src={nineNine} />
              <p className="para">
                “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea
                Lorem est officia excepteur cupidatat consectetur. Labore do
                nulla ipsum dolore ipsum. Proident excepteur ex aliqua
                cupidatat.”
              </p>
              <div className="flex items-center gap-5 mt-4">
                <Image src={circleClient} />
                <p className="text-base leading-[170%] font-semibold text-black">
                  Brooklyn Simmon
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
