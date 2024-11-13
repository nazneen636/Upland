"use client";
import Container from "@/app/layer/Container";
import Image from "next/image";
import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import blog from "../../public/blog.png";
import client from "../../public/clientCircle.png";
import line from "../../public/line.png";
import BredCumb from "../component/BredCumb";
import textBlog from "../../public/banner/texxtBlog.png";
import dew from "../../public/bgDew2.png";
import { IoChatbubbleOutline } from "react-icons/io5";
import Link from "next/link";
import Calendar from "../component/Calender";

const blogDetails = () => {
  let [searchShow, setSearchShow] = useState("");

  let searchBlog = (e) => {
    let search = e.target.value;
    setSearchShow(search);
  };
  return (
    <div>
      <BredCumb src={textBlog} />
      <Container className="relative pt-[90px] pb-[45px] grid grid-cols-4 gap-12">
        <Image src={dew} className="absolute top-[297px] left-[-310px]" />
        <div className="left flex flex-col gap-12 col-span-3">
          <div className="overflow-hidden shadow-lg shadow-[#30158713] rounded-[20px]">
            <div className="relative">
              <Image src={blog} className="mb-2" />
              <div className="w-[60px] h-[80px] bg-orange rounded-t-[5px] absolute bottom-0 left-10 flex flex-col items-center justify-center">
                <span className="font-medium text-white leading-[120%] text-sm tracking-wider font-roboto">
                  Dec
                </span>
                <span className="font-bold text-white leading-[120%] text-[28px] tracking-wider font-roboto">
                  10
                </span>
              </div>
            </div>
            <div className="blog__details p-10">
              <h3 className="capitalize text-black text-[30px] leading-[130%] font-semibold mt-2">
                a selection of the best apps for 2020
              </h3>
              <p className="para mt-[25px] mb-[30px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <Image src={client} className="w-5" />
                  <p className="!text-sm para">Annette Black</p>
                  <FaCircle className="text-orange text-[5px]" />
                  <CiShare2 />
                  <p className="!text-sm para">Share</p>
                </div>
                <HiOutlineArrowNarrowRight className="text-3xl text-[#888888]" />
              </div>
            </div>
          </div>
          <div className="overflow-hidden shadow-lg shadow-[#30158713] rounded-[20px]">
            <div className="relative">
              <Image src={blog} className="mb-2" />
              <div className="w-[60px] h-[80px] bg-orange rounded-t-[5px] absolute bottom-0 left-10 flex flex-col items-center justify-center">
                <span className="font-medium text-white leading-[120%] text-sm tracking-wider font-roboto">
                  Dec
                </span>
                <span className="font-bold text-white leading-[120%] text-[28px] tracking-wider font-roboto">
                  6
                </span>
              </div>
            </div>
            <div className="blog__details p-10">
              <h3 className="capitalize text-black text-[30px] leading-[130%] font-semibold mt-2">
                How to start developing an application
              </h3>
              <p className="para mt-[25px] mb-[30px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <Image src={client} className="w-5" />
                  <p className="!text-sm para">Annette Black</p>
                  <FaCircle className="text-orange text-[5px]" />
                  <CiShare2 />
                  <p className="!text-sm para">Share</p>
                </div>
                <HiOutlineArrowNarrowRight className="text-3xl text-[#888888]" />
              </div>
            </div>
          </div>
          <div className="overflow-hidden shadow-lg shadow-[#30158713] rounded-[20px]">
            <div className="relative">
              <Image src={blog} className="mb-2" />
              <div className="w-[60px] h-[80px] bg-orange rounded-t-[5px] absolute bottom-0 left-10 flex flex-col items-center justify-center">
                <span className="font-medium text-white leading-[120%] text-sm tracking-wider font-roboto">
                  Dec
                </span>
                <span className="font-bold text-white leading-[120%] text-[28px] tracking-wider font-roboto">
                  2
                </span>
              </div>
            </div>
            <div className="blog__details p-10">
              <h3 className="capitalize text-black text-[30px] leading-[130%] font-semibold mt-2">
                the most important points in application testing
              </h3>
              <p className="para mt-[25px] mb-[30px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <Image src={client} className="w-5" />
                  <p className="!text-sm para">Annette Black</p>
                  <FaCircle className="text-orange text-[5px]" />
                  <CiShare2 />
                  <p className="!text-sm para">Share</p>
                </div>
                <HiOutlineArrowNarrowRight className="text-3xl text-[#888888]" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="/blog"
              className="mt-3 capitalize w-[76px] text-center text-orange text-[12px] leading-[170%] tracking-wider font-medium relative after:w-full after:bg-orange after:absolute after:h-[2px] after:left-0 after:top-[120%]"
            >
              learn more
            </Link>
          </div>
        </div>
        <div className="right ">
          {/* ===========search====== */}
          <div className="searchbar relative mb-[50px]">
            <input
              onChange={searchBlog}
              className="border border-[#E6EBFC] rounded-full outline-none py-[18px] px-[30px] text-base leading-[170%] w-full"
              type="search"
              placeholder="Search"
            />
            <FaMagnifyingGlass
              className={`absolute right-[30px] top-1/2 -translate-y-1/2 text-[#888888] ${
                searchShow ? "hidden" : "block"
              }
               `}
            />
          </div>
          {/* ===========search====== */}
          {/* ===========recent post====== */}
          <h3 className="title mb-[10px]">Recent posts</h3>
          <Image src={line} />
          <div className="mt-[25px] w-full">
            <span className="text-orange text-[12px] leading-[170%] font-medium tracking-widest">
              Dec 10, 2020
            </span>
            <h3 className="capitalize text-black text-[16px] leading-[120%] font-semibold mt-1 mb-3">
              Launch of a new convenient feature this Saturday...
            </h3>
            <p className="!text-sm para mt-3">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor...
            </p>
          </div>
          <div className="mt-[25px] w-full">
            <span className="text-orange text-[12px] leading-[170%] font-medium tracking-widest">
              Dec 10, 2020
            </span>
            <h3 className="capitalize text-black text-[16px] leading-[120%] font-semibold mt-1 mb-3">
              What you need to know before using Upland Application
            </h3>
            <p className="!text-sm para mt-3">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor...
            </p>
          </div>
          {/* ===========recent post====== */}

          {/* ===========Recent comments====== */}
          <h3 className="title mt-[50px]">Recent comments</h3>
          <Image src={line} className="mb-[25px] mt-[10px]" />
          <div className="flex flex-col gap-[3px]">
            <IoChatbubbleOutline className="text-orange text-[18px]" />
            <p className="para">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor...
            </p>
          </div>
          <div className="flex flex-col gap-[3px] my-[25px]">
            <IoChatbubbleOutline className="text-orange text-[18px]" />
            <p className="para">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor...
            </p>
          </div>
          <div className="flex flex-col gap-[3px]">
            <IoChatbubbleOutline className="text-orange text-[18px]" />
            <p className="para">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor...
            </p>
          </div>
          {/* ===========Recent comments====== */}

          {/* ===========December 2020====== */}
          <h3 className="title mt-[50px]">December 2020</h3>
          <Image src={line} className="mb-[25px] mt-[10px]" />
          <Calendar />
          {/* ===========December 2020====== */}

          {/* ===========gallery====== */}
          <div className="grid grid-cols-3 gap-1 h-[173px] w-[260px] mt-[50px]">
            <div className="bg-[#E6EBFC] "></div>
            <div className="bg-[#E6EBFC] "></div>
            <div className="bg-[#E6EBFC] "></div>
            <div className="bg-[#E6EBFC] "></div>
            <div className="bg-[#E6EBFC] "></div>
            <div className="bg-[#E6EBFC] "></div>
          </div>
          {/* ===========gallery====== */}

          {/* ===========Tags====== */}
          <h3 className="title mt-[50px]">Tags</h3>
          <Image src={line} className="mb-[25px] mt-[10px]" />
          <div className="flex gap-[11px] flex-wrap items-center">
            <span className="para">Android app</span>
            <FaCircle className="text-[6px] text-orange" />
            <span className="para">IOS app</span>
            <FaCircle className="text-[6px] text-orange" />
            <span className="para">Mobile</span>
            <span className="para">App design</span>
            <FaCircle className="text-[6px] text-orange" />
            <span className="para">Development</span>
            <span className="para">Collaboration</span>
            <FaCircle className="text-[6px] text-orange" />
            <span className="para">Download</span>
          </div>
          {/* ===========Tags====== */}
        </div>
      </Container>
    </div>
  );
};

export default blogDetails;
