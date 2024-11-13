import React, { useState } from "react";
import Container from "../../layer/Container";
import flower from "../../../public/flower.png";
import Image from "next/image";
import Btn from "../../layer/Btn";

const PopUp = ({ closePopUp }) => {
  let [name, setName] = useState("");
  let [nameErr, setNameErr] = useState("");
  let [email, setEmail] = useState("");
  let [emailErr, setEmailErr] = useState("");

  let nameHandle = (e) => {
    let n = e.target.value;
    setName(n);
    setNameErr("");
  };

  let emailHandle = (e) => {
    let em = e.target.value;
    setEmail(em);
    setEmailErr("");
  };

  let handleBtn = () => {
    if (!name) {
      setNameErr("Name is required");
    }
    if (!email) {
      setEmailErr("Email is required");
    } else {
      closePopUp();
    }
  };
  return (
    <Container className="max-w-[600px]  py-[200px] relative z-50">
      <div className="bg-trialPopUp rounded-[20px] bg-no-repeat bg-center bg-cover pt-20 pb-[110px] px-[70px] flex flex-col gap-4">
        <button
          onClick={closePopUp}
          className="absolute top-[18%] right-[4%] text-white font-bold text-lg"
        >
          ✕
        </button>
        <Image
          src={flower}
          alt="Flower"
          className="absolute top-[238px] left-[-132px] -z-10"
        />
        <h2 className="text-white font-Semibold text-[50px] leading-[110%] font-grotesque mt-3 mb-2 max-w-[426px]">
          Get a free trial for <span className="text-orange">30</span> days
        </h2>
        <p className="para !text-white max-w-[457px] opacity-80 mb-6">
          Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt
          dolore ipsum tempor duis do ullamc.
        </p>
        <div className="relative w-[460px]">
          <input
            type="text"
            onChange={nameHandle}
            value={name}
            placeholder="Name"
            className="py-[18px] px-[30px] rounded-full outline-none w-full"
          />
          <p className="text-red-500 absolute left-0 top-full">{nameErr}</p>
        </div>
        <div className="relative w-[460px] my-3">
          <input
            type="email"
            onChange={emailHandle}
            value={email}
            placeholder="Email"
            className="py-[18px] px-[30px] rounded-full outline-none w-full"
          />
          <p className="text-red-500 absolute left-0 top-full">{emailErr}</p>
        </div>
        <textarea
          name=""
          id=""
          placeholder="Message"
          className="py-[18px] px-[30px] h-[150px] rounded-[20px] outline-none w-full"
        ></textarea>
        <Btn
          onClick={handleBtn}
          className="w-[200px] mt-1"
          btnText="get a free trial"
        />
      </div>
    </Container>
  );
};

export default PopUp;
