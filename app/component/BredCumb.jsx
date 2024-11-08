import React, { useEffect, useState } from "react";
import Container from "../layer/Container";
import Dot from "../layer/Dot";
import { FaCircle } from "react-icons/fa";

const BredCumb = () => {
  const [path, setPath] = useState("");

  useEffect(() => {
    // Check if window is defined and set the pathname
    if (typeof window !== "undefined") {
      setPath(window.location.pathname.split("/")[1]);
    }
  }, []);

  return (
    <div className="bg-bannerBg2 pt-[159px] bg-no-repeat bg-bottom bg-cover pb-[181px]">
      <Container>
        <h2 className="text-[60px] font-semibold capitalize leading-[100%] text-white font-grotesque">
          {path}
        </h2>
        <div className="mt-[30px] flex items-center gap-3">
          <span className="capitalize font-roboto text-sm leading-[170%] text-[#B3B1B7]">
            Home
          </span>
          <FaCircle className="text-[#B3B1B7] text-[4px]" />
          <span className="capitalize font-roboto text-sm leading-[170%] text-[#B3B1B7]">
            {path}
          </span>
        </div>
      </Container>
    </div>
  );
};

export default BredCumb;
