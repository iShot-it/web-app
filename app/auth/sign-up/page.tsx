"use client"

import React, { useState } from 'react'
import { Eye, EyeOff, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Ishot from "@/assets/ishot.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterPayload } from "@/types/type";
import { useRegister } from "@/app/api/auth";
import { useToast } from "@/hooks/use-toast";
import { setAuthCookie } from "@/lib/auth";

const SignUpForm = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterPayload>();

  const { signup, isRegistering } = useRegister();

  const handleOnSubmit: SubmitHandler<IRegisterPayload> = async (data) => {
    try {
      console.log("testing");
      const response = await signup({ ...data ,userType:"USER"});
      console.log(response, "response");

      if (response.success) {
        setAuthCookie(response.data.token);

        console.log(true);
        toast({
          description:
            "You have successfully created your account, kindly check your email inbox or spam folder to get verification link.",
        });
        // router.push("/");
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error?.message,
      });
      console.log(error);
    }
  };

  return (
    <section className=" w-full min-h-screen py-8 ">
      <div className="grid place-items-center  h-full  max-w-lg mx-auto ">
        <form
          action=""
          className=" w-[80%] "
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <div className="">
            <h1 className="text-center text-4xl font-bold tracking-widest ">
              <Image src={Ishot} alt="Ishot" className="mx-auto" />
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="firstname"
                className="block  font-medium  text-md"
              >
                First name
              </label>

              <input
                {...register("firstname", {
                  required: "Firstname is required",
                })}
                type="text"
                id="firstname"
                placeholder="emmycruz12"
                className="mt-1 w-full rounded-md border border-gray-900 shadow-sm sm:text-sm  px-3  py-2.5 outline-none "
              />
              {errors.firstname && (
                <p className="text-red-500">{errors.firstname.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastname" className="block  font-medium  text-md">
                Last name
              </label>

              <input
                {...register("lastname", {
                  required: "lastname is required",
                })}
                type="text"
                id="lastname"
                placeholder="emmycruz12"
                className="mt-1 w-full rounded-md border border-gray-900 shadow-sm sm:text-sm  px-3  py-2.5 outline-none "
              />
              {errors.lastname && (
                <p className="text-red-500">{errors.lastname.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="username" className="block  font-medium  text-md">
                User name
              </label>

              <input
                {...register("username", {
                  required: "username is required",
                })}
                type="text"
                id="username"
                placeholder="emmycruz12"
                className="mt-1 w-full rounded-md border border-gray-900 shadow-sm sm:text-sm  px-3  py-2.5 outline-none "
              />
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="useremail"
                className="block  font-medium  text-md"
              >
                Email Address
              </label>

              <input
                {...register("email", {
                  required: "email is required",
                })}
                type="email"
                id="UserEmail"
                placeholder="john@rhcp.com"
                className="mt-1 w-full rounded-md border border-gray-900 shadow-sm sm:text-sm  px-3  py-2.5 outline-none "
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-md font-medium ">
                Password
              </label>

              <div className=" flex mt-1 w-full rounded-md border border-gray-900 shadow-sm sm:text-sm  p-2.5 outline-none ">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password", {
                    required: "password is required",
                  })}
                  placeholder="Enter your password"
                  className=" bg-transparent outline-none border-none w-full"
                />

                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Eye /> : <EyeOff />}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div className="space-y-2 text-center">
              <button
                type="submit"
                className="w-full px-5 py-3 bg-blue-900 text-white rounded-md mt-4"
              >
                {isRegistering ? (
                  <Loader className="animate-spin mx-auto" />
                ) : (
                  "Sign up"
                )}
              </button>
              <p>
                Aready have an account?{" "}
                <Link href="/auth/sign-in" className="text-blue-500">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpForm