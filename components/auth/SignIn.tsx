"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type Props = {
  setRegisterPage: (state: boolean) => void;
};

type Inputs = {
  email: string;
  password: string;
};

const SignIn = ({ setRegisterPage }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {};

  return (
    <div className="flex flex-col bg-[#F7F7F7] px-7 py-6 rounded-2xl max-w-2xl w-full mx-4 items-center gap-6">
      <h1 className="text-2xl font-medium">Log in</h1>
      <form className="flex flex-col w-full gap-6 items-center">
        <Input
          id="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: "Email is required!" })}
        />
        {errors.email && (
          <p role="alert" className="input-error">
            {errors.email.message}
          </p>
        )}

        <Input
          id="password"
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Enter your account password.",
          })}
        />
        {errors.password && (
          <p role="alert" className="input-error">
            {errors.password.message}
          </p>
        )}

        <p className="font-normal text-sm">
          New user? Register{" "}
          <span
            onClick={() => setRegisterPage(true)}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            here
          </span>
        </p>

        <Button className="w-full" type="submit">
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin transition-all" />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
