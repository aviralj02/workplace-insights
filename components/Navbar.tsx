import Image from "next/image";
import React from "react";
import WILogo from "@/public/workplace-insights-logo.png";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {};

type Link = {
  title: string;
  to: string;
};

const Navbar = (props: Props) => {
  const links: Link[] = [
    {
      title: "Write a review",
      to: "/",
    },
    {
      title: "Features",
      to: "/",
    },
    {
      title: "About",
      to: "/",
    },
    {
      title: "FAQs",
      to: "/",
    },
  ];
  return (
    <div className="flex w-full lg:px-28 px-5 py-8 justify-between items-center">
      <Link href="/" className="flex gap-5 ">
        <Image src={WILogo} alt="logo" width={48} />
        <h1 className="font-medium text-md">
          Workplace <br />
          Insights
        </h1>
      </Link>

      <ul className="hidden font-normal gap-12 lg:flex">
        {links.map((link: Link, i: number) => (
          <li key={i}>
            <Link href={link.to}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <div className="hidden gap-7 items-center lg:flex">
        <Link href="/">Log in</Link>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Navbar;
