'use client'
import React, { useState } from 'react'
import { Eye, EyeOff, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

import Ishot from "@/assets/ishot.svg";
import { ILoginPayload } from "@/types/type";
import { useLogin } from "@/app/api/auth";
import { setAuthCookie } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
const SignInForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { setLoggedInUser } = useAuth();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginPayload>();

  const { isLoggingIn, login } = useLogin();

  const handleOnSubmit: SubmitHandler<ILoginPayload> = async (data) => {
    try {
      console.log("testing");
      const response = await login(data);
      console.log(response, "response");

      if (response.success) {
        setAuthCookie(response.data.token);

        setLoggedInUser(response.data);
        console.log(true);
        toast({
          description: "Logged in Successfully",
        });
        router.push(callbackUrl);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: "Invalid credentials",
      });
      console.log(error);
    }
  };

  return (
    <section className=" w-full h-[100vh] ">
      <div className="grid place-items-center  h-full  max-w-lg mx-auto ">
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className=" w-[80%] mt-[-2rem]"
        >
          <div className="mb-6">
            <h1 className="text-center text-4xl font-bold tracking-widest py-4">
              <Image src={Ishot} alt="Ishot" className="mx-auto" />
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="UserEmail"
                className="block  font-medium  text-md"
              >
                Email Address
              </label>

              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                id="UserEmail"
                placeholder="john@rhcp.com"
                className="mt-1 w-full rounded-md border border-gray-900 shadow-sm sm:text-sm  px-3  py-3 outline-none "
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="UserEmail" className="block text-md font-medium ">
                Password
              </label>

              <div className=" flex mt-1 w-full rounded-md border border-gray-900 shadow-sm sm:text-sm  p-3 outline-none ">
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type={showPassword ? "text" : "password"}
                  id="password"
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
                disabled={isLoggingIn}
                type="submit"
                className="w-full px-5 py-3 bg-blue-900 text-white rounded-md mt-4"
              >
                {isLoggingIn ? (
                  <Loader className="animate-spin mx-auto" />
                ) : (
                  "Sign in"
                )}
              </button>
              <p>
                Dont have an account?{" "}
                <Link href="/auth/sign-up" className="text-blue-500 ">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignInForm