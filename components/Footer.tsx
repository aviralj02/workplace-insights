import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <hr />
      <div className="flex py-7 px-16 font-light text-xs justify-between">
        <p>@2024 Workplace Insights. All rights reserved.</p>
        <div className="flex gap-10">
          <Link href="/">Terms of Service</Link>
          <Link href="/">Privacy</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
