"use client";

import Image from "next/image";
import React, { useState } from "react";
import WILogo from "@/public/workplace-insights-logo.png";
import SignIn from "@/components/auth/SignIn";
import Register from "@/components/auth/Register";
import Link from "next/link";

type Props = {};

const Auth = (props: Props) => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center mt-20 gap-12">
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image src={WILogo} alt="logo" width={72} />
        </Link>
        <h1 className="font-medium text-2xl">
          Workplace <br />
          Insights
        </h1>
      </div>
      {isRegister ? (
        <Register setRegisterPage={setIsRegister} />
      ) : (
        <SignIn setRegisterPage={setIsRegister} />
      )}
    </div>
  );
};

export default Auth;
