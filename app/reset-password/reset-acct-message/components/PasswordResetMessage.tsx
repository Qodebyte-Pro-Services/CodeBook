"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PasswordResetMessage = () => {
  const router = useRouter();
  const [resetEmail, setResetEmail] = useState("");

  useEffect(() => {
   
    if (typeof window !== "undefined") {
      setResetEmail(sessionStorage.getItem("resetEmail") || "");
      
      const timeout = setTimeout(() => {
        sessionStorage.removeItem("resetEmail"); 
        router.push("/Sign-in");
      }, 300000); 

      return () => clearTimeout(timeout);
    }
  }, [router]);

  return (
    <div className="flex w-full justify-center py-[1.5rem]">
      <div className="lg:w-[70%] xl:h-[854px] w-full h-auto flex lg:flex-row rounded-[20px] bg-white">
        <div className="lg:flex hidden lg:w-1/2 bg-[#DAF2FF] w-0 h-full rounded-bl-[20px] shadow-bl-2xl items-center justify-center overflow-hidden">
          <div className="w-[500px] h-[450px] relative py-auto">
            <Image src="/Authentication-bro-1.png" alt="email" fill />
          </div>
        </div>
        <div className="lg:w-1/2 h-full w-full flex flex-col text-center px-2 py-[1rem] justify-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-gray-950 font-medium md:text-2xl text-xl">
              Check Your Email
            </h1>
            <h4 className="text-gray-950 font-medium md:text-lg text-md">
              We&apos;ve sent a password reset link to <span className="font-bold">{resetEmail}</span>.
              Please check your inbox or spam folder.
            </h4>
            <div className="relative w-[200px] h-[200px] mx-auto mt-3">
              <Image src="/Success.png" alt="Success" fill />
            </div>
            <p className="text-gray-600 text-sm mt-3">
              You will be redirected to the sign-in page in 5 minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetMessage;