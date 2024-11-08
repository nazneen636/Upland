import React from "react";
import "./banner.css";
import phone from "../../../public/banner/phone.png";
import pinkLeaf from "../../../public/banner/pinkLeaf.png";
import chat from "../../../public/banner/chat.png";
import like from "../../../public/banner/like.png";
import leftLeaf1 from "../../../public/banner/leftLeaf1.png";
import leftLeaf2 from "../../../public/banner/leftLeaf2.png";
import rightLeaf1 from "../../../public/banner/rightLeaf1.png";
import rightLeaf2 from "../../../public/banner/rightLeaf2.png";
import rocket from "../../../public/banner/rocket.png";
import love from "../../../public/banner/love.png";
import mail from "../../../public/banner/mail.png";
import twitter from "../../../public/banner/twitter.png";
import LshadowLeaf from "../../../public/banner/LshadowLeaf.png";
import RshadowLeaf from "../../../public/banner/RshawdowLeaf.png";
import textWork from "../../../public/banner/textWork.png";
import Image from "next/image";
import Container from "@/app/layer/Container";
import Dot from "@/app/layer/Dot";
import Btn from "@/app/layer/Btn";

export const Banner = () => {
  return (
    <div className="bg-bannerBg1 bg-cover bg-center bg-no-repeat h-[873px]">
      <Container className="pt-[100px] max-w-[1230px] pb-[4px] flex justify-between relative">
        <Image
          src={textWork}
          className="absolute bottom-[-10px] left-[-310px]"
        />
        <div className="left pt-[130px]">
          <div className="flex items-center gap-4">
            <div className="flex gap-[9px] mb-1">
              <Dot />
              <Dot />
            </div>
            <h4 className="text-[12px] leading-[170%] font-medium tracking-wide text-orange uppercase">
              trendy application
            </h4>
          </div>
          <h1 className="font-bold text-[80px] leading-[110%] text-white capitalize font-grotesque mt-[14px]">
            work faster with <br /> powerful tools
          </h1>

          <p className="text-[24px] leading-[140%] font-medium text-white opacity-80 mt-7">
            Laboris culpa ea incididunt dolore ipsum tempor <br /> duis do
            ullamco eiusmod officia magna ad id.
          </p>
          <Btn href="" className="mt-[50px] " btnText="Learn More" />
        </div>
        <div className="right relative">
          {/* ====================still======== */}
          <Image src={phone} className="phone z-50 relative h-[690px]" />
          <Image
            src={LshadowLeaf}
            className="absolute top-[26%] left-[-194px] z-0"
          />
          <Image
            src={RshadowLeaf}
            className="absolute top-[18%] right-[-230px] z-0"
          />
          {/* ====================still======== */}

          {/* ====================Leaf animation======== */}
          <Image
            src={leftLeaf2}
            alt=""
            className="absolute left-[71px] top-[62%] leftLeafSmall"
          />
          <Image
            src={leftLeaf1}
            alt=""
            className="absolute left-[63px] top-[65%] leftLeaf"
          />
          <Image
            src={rightLeaf1}
            alt=""
            className="absolute right-[-140px] top-[79%] rightLeaf"
          />
          <Image
            src={rightLeaf2}
            alt=""
            className="absolute right-[29px] top-[48%] "
          />
          <Image
            src={pinkLeaf}
            alt=""
            className="absolute right-[-333px] top-[51%] pinkLeaf"
          />
          {/* ====================leaf animation======== */}

          {/* ====================emoji animation======== */}
          <Image src={like} className="absolute right-[-21px] top-[34%] like" />
          <Image
            src={chat}
            className="absolute right-[-163px] top-[25%] chat"
          />
          <Image src={love} className="absolute left-[58px] top-[23%] love" />
          <Image
            src={mail}
            className="absolute right-[-121px] top-[75%] mail"
          />
          <Image
            src={twitter}
            className="absolute right-[-131px] top-[54%] twitter"
          />
          <Image
            src={rocket}
            className="absolute left-[-24px] top-[35%] rocket"
          />
          {/* ====================emoji animation======== */}
        </div>
      </Container>
    </div>
  );
};
