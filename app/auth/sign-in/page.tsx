'use client'
import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';

import Ishot from "@/assets/ishot.svg"
const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className=" w-full h-[100vh] ">
    <div className="grid place-items-center  h-full  max-w-lg mx-auto ">
      <form action="" className=" w-[80%] mt-[-2rem]">
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
              type="email"
              id="UserEmail"
              placeholder="john@rhcp.com"
              className="mt-1 w-full rounded-md border border-gray-900 shadow-sm sm:text-sm  px-3  py-3 outline-none "
            />
          </div>
          <div>
            <label
              htmlFor="UserEmail"
              className="block text-md font-medium "
            >
              Password
            </label>

            <div className=" flex mt-1 w-full rounded-md border border-gray-900 shadow-sm sm:text-sm  p-3 outline-none ">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className=" bg-transparent outline-none border-none w-full"
              />

              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <Eye /> : <EyeOff />}
              </span>
            </div>
          </div>

          <div className='space-y-2 text-center'>
            <button
              type="submit"
              className="w-full px-5 py-3 bg-blue-900 text-white rounded-md mt-4"
            >
              Sign in
            </button>
            <p>Don't have an account?  <Link href="/auth/sign-up" className='text-blue-500 '>Sign up</Link></p>
          </div>
        </div>
      </form>
    </div>
  </section>

  )
}

export default SignInForm