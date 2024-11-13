import Container from "@/app/layer/Container";
import Heading from "@/app/layer/Heading";
import TwoDot from "@/app/layer/TwoDot";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import client from "../../public/clientCircle.png";

const Blog = () => {
  return (
    <div>
      <Container className="max-w-[1500px] mt-[168px] mb-[94px] flex items-center gap-[53px]">
        <div className="left">
          <TwoDot />
          <Heading
            className="mt-4 mb-8 max-w-[485px]"
            headingText="read the latest news and articles"
          />
          <p className="para mb-[50px] max-w-[426px]">
            Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt
            dolore ipsum tempor duis do ullamc.
          </p>
          <Link
            href="/blog"
            className="capitalize text-orange text-[12px] leading-[170%] tracking-wider font-medium relative after:w-full after:bg-orange after:absolute after:h-[2px] after:left-0 after:top-[120%]"
          >
            read more
          </Link>
        </div>
        <div className="right flex gap-[30px]">
          <div className="item w-[480px] p-10 bg-white shadow-lg shadow-[#30158713] rounded-[20px]">
            <span className="text-orange text-[12px] leading-[170%] font-medium tracking-wider">
              Dec 10, 2020
            </span>
            <h3 className="capitalize text-black text-[22px] leading-[130%] font-medium mt-2">
              Launch of a new convenient feature this Saturday. Trend 2020
            </h3>
            <p className="para mt-[25px] mb-[30px]">
              Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua
              cupidatat adipisicing in cillum.
            </p>
            <div className="flex gap-3 items-center">
              <Image src={client} className="w-5" />
              <p className="!text-sm para">Annette Black</p>
              <FaCircle className="text-orange text-[5px]" />
              <CiShare2 />
              <p className="!text-sm para">Share</p>
            </div>
          </div>
          <div className="item w-[480px] p-10 bg-white shadow-lg shadow-[#30158713] rounded-[20px]">
            <span className="text-orange text-[12px] leading-[170%] font-medium tracking-wider">
              Dec 10, 2020
            </span>
            <h3 className="capitalize text-black text-[22px] leading-[130%] font-medium mt-2">
              Launch of a new convenient feature this Saturday. Trend 2020
            </h3>
            <p className="para mt-[25px] mb-[30px]">
              Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua
              cupidatat adipisicing in cillum.
            </p>
            <div className="flex gap-3 items-center">
              <Image src={client} className="w-5" />
              <p className="!text-sm para">Annette Black</p>
              <FaCircle className="text-orange text-[5px]" />
              <CiShare2 />
              <p className="!text-sm para">Share</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
