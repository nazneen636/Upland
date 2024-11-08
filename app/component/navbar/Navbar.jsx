import React from "react";
import Menu from "@/app/layer/Menu";
import Image from "next/image";
import Link from "next/link";
import { LuSmartphone } from "react-icons/lu";
import Container from "@/app/layer/Container";
import logo from "../../../public/logo.png";

const Navbar = () => {
  return (
    <nav className="px-[70px] pt-[50px] w-full absolute">
      <Container className="max-w-[1780px] flex justify-between items-center">
        <div className="logo">
          <Image src={logo} alt="logo" />
        </div>
        <div className="menu ml-[-284px]">
          <Menu />
        </div>
        <div className="contact flex gap-[6px] items-center justify-center">
          <LuSmartphone className="text-orange text-xl" />
          <Link className="font-medium text-xl text-white font-roboto" href="/">
            +1 742 65 84 122
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
