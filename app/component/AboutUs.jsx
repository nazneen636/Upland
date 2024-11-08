import React from "react";
import Container from "../layer/Container";
import Image from "next/image";
import Dot from "../layer/Dot";
import Heading from "../layer/Heading";
import nineNine from "../../public/nineNine.png";
import circleClient from "../../public/clientCircle.png";
import aboutUsText from "../../public/textAbout.png";

const AboutUs = () => {
  return (
    <div>
      <Container className="mt-[180px] relative max-w-[1500px] z-10">
        <Image src={aboutUsText} className="absolute top-[6px] left-0" />
        <div className="flex gap-2 mb-4">
          <Dot />
          <Dot />
        </div>
        <Heading headingText="they say about us" />
        <div className="content flex justify-between mt-[54px]">
          <div className="card p-10 max-w-[480px] flex flex-col gap-4 rounded-[20px] bg-white shadow-lg shadow-[#30158724]">
            <Image src={nineNine} />
            <p className="para">
              “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem
              est officia excepteur cupidatat consectetur. Labore do nulla ipsum
              dolore ipsum. Proident excepteur ex aliqua cupidatat.”
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
              “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem
              est officia excepteur cupidatat consectetur. Labore do nulla ipsum
              dolore ipsum. Proident excepteur ex aliqua cupidatat.”
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
              “Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem
              est officia excepteur cupidatat consectetur. Labore do nulla ipsum
              dolore ipsum. Proident excepteur ex aliqua cupidatat.”
            </p>
            <div className="flex items-center gap-5 mt-4">
              <Image src={circleClient} />
              <p className="text-base leading-[170%] font-semibold text-black">
                Brooklyn Simmon
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
