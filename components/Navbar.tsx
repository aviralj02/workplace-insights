import Image from "next/image";
import React from "react";
import WILogo from "@/public/workplace-insights-logo.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex ">
      <div>
        <Image src={WILogo} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
