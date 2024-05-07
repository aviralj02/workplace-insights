import React from "react";
import WILogo from "@/public/workplace-insights-logo.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex items-center py-7 px-20">
      <Image src={WILogo} alt="logo" width={36} />
      <div>
        <Link href="/home">Home</Link>
      </div>
    </div>
  );
};

export default Header;
