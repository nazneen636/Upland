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
import nineNine from "../../public/nineNine.png";
import line from "../../public/line.png";
import bigLine from "../../public/bigLine.png";
import BredCumb from "../component/BredCumb";
import postText from "../../public/postText.png";
import clientShadowCircle from "../../public/clientShadowCircle.png";
import dew from "../../public/bgDew2.png";
import { IoChatbubbleOutline } from "react-icons/io5";
import Link from "next/link";
import Calendar from "../component/Calender";
import Dot from "../layer/Dot";
import { BsArrow90DegLeft } from "react-icons/bs";
import Btn from "../layer/Btn";

const post = () => {
  let [searchShow, setSearchShow] = useState("");

  let searchBlog = (e) => {
    let search = e.target.value;
    setSearchShow(search);
  };
  return (
    <div>
      <BredCumb src={postText} />
      <Container className="relative pt-[90px] pb-[45px] grid grid-cols-4 gap-12">
        <Image src={dew} className="absolute top-[297px] left-[-310px]" />
        <Image src={dew} className="absolute bottom-[37%] right-[-266px]" />
        <Image src={dew} className="absolute bottom-[4%] right-[-266px]" />

        <div className="left flex flex-col gap-12 col-span-3">
          <div className="">
            <div className="relative">
              <Image src={blog} className="mb-[30px] rounded-lg" />
              <div className="w-[60px] h-[80px] bg-orange rounded-t-[5px] absolute bottom-0 left-10 flex flex-col items-center justify-center">
                <span className="font-medium text-white leading-[120%] text-sm tracking-wider font-roboto">
                  Dec
                </span>
                <span className="font-bold text-white leading-[120%] text-[28px] tracking-wider font-roboto">
                  10
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-[30px]">
              <div className="flex gap-3 items-center">
                <Image src={client} className="w-5" />
                <p className="!text-sm para">Annette Black</p>
                <FaCircle className="text-orange text-[5px]" />
                <CiShare2 />
                <p className="!text-sm para">Share</p>
              </div>
            </div>
            <Image src={bigLine} />
          </div>
          <h2 className="title capitalize !text-[36px] font-grotesque ">
            a selection of the best apps for 2020
          </h2>
          <p className="para">
            There’s such a thing as “too much information”, especially for the
            companies scaling out their sales operations. That’s why Attentive
            was born in 2015 help sales teams make their increasing pipelines
            simpler to manage. Indeed, the small, Portugal-based team is itself
            focused on scaling, having much participated in accelerator <br />{" "}
            <br />
            In this episode, Attentive founder Robert Fox talks about what it
            takes to build a tech new product from the ground up. Discover their
            approach to running an engineering team, from adopting new open
            source technologies, to onboarding junior developers and learning .
          </p>
          <div className="py-[50px] mb-10 px-10 shadow-md rounded-[20px] bg-white mt-10 shadow-md shadow-[#30158728] rounded-[20px]">
            <p className="font-grotesque text-[25px] leading-[150%] text-[#888888] font-medium ">
              “Ullamco exercitation incididunt ut fugiat ex velit nulla. Lorem
              amet ut ad aute irure exercitation elit exercitation Lorem non
              aliqua occaecat ea sunt. Commodo non duis aute mollit sint. Mollit
              veniam dolor aliqua nulla sit est do mollit esse ut amet.”
            </p>
            <div className="flex justify-between items-center mt-1">
              <span className="font-semibold text-[22px] leading-[120%] font-grotesque text-black">
                Robert Fox
              </span>
              <Image src={nineNine} />
            </div>
          </div>
          <div className="">
            <h2 className="title !text-[28px] mb-[30px]">
              Better Security and faster Server
            </h2>
            <p className="para tracking-wide mb-10">
              There’s such a thing as “too much information”, especially for the
              companies scaling out their sales operations. That’s why Attentive
              was born in 2015 help sales teams make their increasing pipelines
              simpler to manage. Indeed, the small.
            </p>
            <div className="flex gap-4 items-center">
              <FaCircle className="text-orange text-[4px]" />
              <p className="para">
                We’ve been supporting WordPress since the beginning.
              </p>
            </div>
            <div className="flex gap-4 items-center my-5">
              <FaCircle className="text-orange text-[4px]" />
              <p className="para">
                Our easy-to-use control panel and API let you spend.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <FaCircle className="text-orange text-[4px]" />
              <p className="para">
                Perfect for large sites or agencies managing multiple clients.
              </p>
            </div>
            <p className="para my-10">
              There’s such a thing as “too much information”, especially for the
              companies scaling out their sales operations. That’s why Attentive
              was born in 2015 help sales teams make their increasing pipelines
              simpler to manage. Indeed, the small, Portugal-based team is
              itself focused on scaling, having much participated in accelerator
            </p>
            <p className="para mb-10">
              In this episode, Attentive founder Robert Fox talks about what it
              takes to build a tech new product from the ground up. Discover
              their approach to running an engineering team, from adopting new
              open source technologies, to onboarding junior developers and
              learning.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-5">
              <h4 className="mr-[14px] text-base font-medium leading-[170%]">
                Tags:
              </h4>
              <span className="para">Android app</span>
              <FaCircle className="text-orange text-[4px]" />
              <span className="para">IOS app</span>
              <FaCircle className="text-orange text-[4px]" />
              <span className="para">Mobile</span>
            </div>
            <Image src={bigLine} />

            {/* =============card======= */}
            <div className="flex items-center gap-9 mt-10 py-5 px-10 shadow-md shadow-[#30158728] rounded-[20px] mb-[90px]">
              <Image src={clientShadowCircle} alt="" />
              <div>
                <h4 className="font-semibold text-[22px] leading-[120%] font-grotesque mb-4">
                  Robert Fox
                </h4>
                <p className="para mb-[38px]">
                  Ullamco exercitation incididunt ut fugiat ex velit nulla.
                  Lorem amet ut ad aute irure exercitation elit exercitation
                  Lorem non accaecat ea sunt.
                </p>
                <div className="flex items-center gap-3">
                  <span className="para">FB</span>
                  <FaCircle className="text-orange text-[4px]" />
                  <span className="para">TW</span>
                  <FaCircle className="text-orange text-[4px]" />
                  <span className="para">IN</span>
                </div>
              </div>
            </div>
            {/* =============card======= */}

            {/* =============comments======= */}
            <div>
              <h2 className="font-semibold leading-[100%] text-[36px]">
                Comments (3)
              </h2>
              <div className="comment">
                <div className="mt-10 flex items-center gap-3">
                  <Image src={client} className="w-5" />
                  <h4 className="font-medium text-base leading-[170%]">
                    Jacob Jones
                  </h4>
                  <FaCircle className="text-orange text-[4px]" />
                  <span className="para">Dec 10, 2020</span>
                  <FaCircle className="text-orange text-[4px]" />
                  <BsArrow90DegLeft className="text-orange" />
                  <h5 className="text-orange text-sm leading-[170%]">Reply</h5>
                </div>
                <p className="para mt-5">
                  Ullamco exercitation incididunt ut fugiat ex velit nulla.
                  Lorem amet ut ad aute irure exercitation elit exercitation
                  Lorem non aliqua occaecat ea sunt.
                </p>
              </div>
              <Image src={bigLine} alt="" className="my-10" />
              <div className="comment ml-[50px]">
                <div className="mt-10 flex items-center gap-3">
                  <Image src={client} className="w-5" />
                  <h4 className="font-medium text-base leading-[170%]">
                    Arlene McCoy
                  </h4>
                  <FaCircle className="text-orange text-[4px]" />
                  <span className="para">Dec 10, 2020</span>
                  <FaCircle className="text-orange text-[4px]" />
                  <BsArrow90DegLeft className="text-orange" />
                  <h5 className="text-orange text-sm leading-[170%]">Reply</h5>
                </div>
                <p className="para mt-5">
                  Ullamco exercitation incididunt ut fugiat ex velit nulla.
                  Lorem amet ut ad aute irure exercitation elit exercitation
                  Lorem non aliqua occaecat ea sunt.
                </p>
              </div>
              <Image src={bigLine} alt="" className="my-10" />
              <div className="comment">
                <div className="mt-10 flex items-center gap-3">
                  <Image src={client} className="w-5" />
                  <h4 className="font-medium text-base leading-[170%]">
                    Ronald Richards
                  </h4>
                  <FaCircle className="text-orange text-[4px]" />
                  <span className="para">Dec 10, 2020</span>
                  <FaCircle className="text-orange text-[4px]" />
                  <BsArrow90DegLeft className="text-orange" />
                  <h5 className="text-orange text-sm leading-[170%]">Reply</h5>
                </div>
                <p className="para mt-5">
                  Ullamco exercitation incididunt ut fugiat ex velit nulla.
                  Lorem amet ut ad aute irure exercitation elit exercitation
                  Lorem non aliqua occaecat ea sunt.
                </p>
              </div>
              <Image src={bigLine} alt="" className="mt-10" />
            </div>
            {/* =============comments======= */}

            {/* =============leave reply======= */}
            <div className="form w-[828px]">
              <h2 className="capitalize text-[36px] font-grotesque font-semibold leading-[100%] mt-[90px] mb-10">
                leave a reply
              </h2>
              <div className="flex flex-wrap gap-4 justify-between">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-[404px] py-[18px] px-[30px] rounded-[50px] border border-[#E6EBFC] outline-none"
                  />
                  <p></p>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-[404px] py-[18px] px-[30px] rounded-[50px] border border-[#E6EBFC] outline-none"
                  />
                  <p></p>
                </div>
                <div>
                  <textarea
                    className="h-[150px] w-[828px] py-[18px] px-[30px] rounded-[20px] border border-[#E6EBFC] outline-none resize-none"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <Btn btnText="Post comment" className="mt-9" />
            </div>
            {/* =============leave reply======= */}
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

export default post;
