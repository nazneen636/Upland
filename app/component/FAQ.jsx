"use client";
import React from "react";
import Container from "../layer/Container";
import Heading from "../layer/Heading";
import { FaPlus } from "react-icons/fa6";

const FAQ = () => {
  return (
    <div>
      <Container>
        <div className="left"></div>
        <div className="right">
          <Heading headingText="Frequently Asked Questions" />
          <div className="">
            <div className="flex items-center">
              <h3 className="">How to start using Upland Application?</h3>
              <FaPlus />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
