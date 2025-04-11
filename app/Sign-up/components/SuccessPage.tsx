"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from "axios";

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    const fetchAdminData = async () => {
      const authToken = sessionStorage.getItem("authToken");

      if (!authToken) {
        console.error("Auth token not found in session storage.");
        return;
      }

      try {
        const response = await axios.get("https://sch-mgt-03yw.onrender.com/auth/user/", {
          headers: {
            Authorization: `Token ${authToken}`,
            "Content-Type": "application/json",
          },
        });

        const { role,pk, ...adminData } = response.data;

       
        sessionStorage.setItem("AdminData", JSON.stringify(adminData));
        sessionStorage.setItem("adminId", pk);
        sessionStorage.setItem("adminRole", role);
      
        router.push("/dashboard");
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchAdminData();
  }, [router]);

  return (
    <div className="flex w-full justify-center py-[1.5rem]">
      <div className="lg:w-[70%] xl:h-[854px] w-full h-auto flex lg:flex-row rounded-[20px] bg-white">
        <div className="lg:flex hidden lg:w-1/2 bg-[#DAF2FF] w-0 h-full rounded-bl-[20px] shadow-bl-2xl items-center justify-center overflow-hidden">
          <div className="w-[500px] h-[450px] relative py-auto">
            <Image src="/Authentication-bro-1.png" alt="login" fill />
          </div>
        </div>
        <div className="lg:w-1/2 h-full w-full flex flex-col text-center px-2 py-[1rem] justify-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-gray-950 font-medium md:text-2xl text-xl">
              Account Created Successfully
            </h1>
            <h4 className="text-gray-950 font-medium md:text-lg text-md">
              Welcome aboard! Start your management journey with
            </h4>
            <div className="relative w-[200px] h-[200px] mx-auto mt-3">
              <Image src="/Success.png" alt="Success" fill />
            </div>
            <Link
              href="/dashboard"
              className="bg-[#0A92DD] text-white w-[200px] h-[50px] py-3 rounded-[10px] mx-auto mt-3"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;