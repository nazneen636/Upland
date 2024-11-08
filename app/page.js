import Image from "next/image";
import { Banner } from "./component/banner/Banner";
import Blog from "./component/Blog";
import AboutUs from "./component/AboutUs";
import EasyDownload from "./component/EasyDownload";
import FreeTrial from "./component/freeTrial/FreeTrial";
import Popular from "./component/Popular";
import WhatGet from "./component/WhatGet";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhatGet />
      <Popular />
      <EasyDownload />
      <AboutUs />
      <FreeTrial />
      <Blog />
    </div>
  );
}
