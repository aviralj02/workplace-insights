import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const PageWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-xl px-8 md:px-20", className)}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
