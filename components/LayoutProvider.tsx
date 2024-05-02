"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const LayoutProvider = ({ children }: Props) => {
  const pathname = usePathname();
  const isAfterDashboard = pathname.startsWith("/dashboard");
  return (
    <div>
      {isAfterDashboard ? <Header /> : <Navbar />}
      {children}
      {isAfterDashboard ? null : <Footer />}
    </div>
  );
};

export default LayoutProvider;
