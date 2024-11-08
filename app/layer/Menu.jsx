import React from "react";
import Li from "@/app/layer/Li";
import Dot from "@/app/layer/Dot";

const Menu = () => {
  return (
    <ul className="flex gap-[30px] items-center">
      <Li href="/" liText="Features" />
      <Dot className="after:w-1 after:h-1 after:bg-white" />
      <Li href="/download" liText="Download app" />
      <Dot className="after:w-1 after:h-1 after:bg-white" />
      <Li href="/ui" liText="UI screens" />
      <Dot className="after:w-1 after:h-1 after:bg-white" />
      <Li href="/testimonial" liText="Testimonials" />
      <Dot className="after:w-1 after:h-1 after:bg-white" />
      <Li href="/faq" liText="FAQ" />
      <Dot className="after:w-1 after:h-1 after:bg-white" />
      <li>
        <button className="border-2 text-base font-medium leading-[170%] text-orange border-orange font-roboto rounded-[20px] px-5 py-1 hover:bg-orange hover:text-white duration-300 transition-all">
          Free trial
        </button>
      </li>
    </ul>
  );
};

export default Menu;
