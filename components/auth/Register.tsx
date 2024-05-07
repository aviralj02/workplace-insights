"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "../ui/use-toast";

type Props = {
  setRegisterPage: (state: boolean) => void;
};

type Inputs = {
  userName: string;
  email: string;
  password: string;
};

const Register = ({ setRegisterPage }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await res.json();
      setIsLoading(false);

      if (res.ok) {
        setRegisterPage(false);
        toast({
          title: responseData.message,
          description: "Begin by signing in.",
        });
      } else {
        toast({
          title: responseData.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col bg-[#F7F7F7] px-7 py-6 rounded-2xl max-w-2xl w-full mx-4 items-center gap-6">
      <h1 className="text-2xl font-medium">Register</h1>
      <form
        className="flex flex-col w-full gap-6 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="userName"
          placeholder="User Name"
          type="text"
          {...register("userName", { required: "User Name is required!" })}
        />
        {errors.userName && (
          <p role="alert" className="input-error">
            {errors.userName.message}
          </p>
        )}

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
          Already have an account? Log in{" "}
          <span
            onClick={() => setRegisterPage(false)}
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

export default Register;
