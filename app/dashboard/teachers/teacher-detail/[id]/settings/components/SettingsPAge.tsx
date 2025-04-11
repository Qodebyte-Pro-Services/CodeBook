"use client";
import Link from "next/link";
import React from "react";

import { Laptop, Trash } from "lucide-react";
import Image from "next/image";
import Input from "@/app/dashboard/teachers/add-teacher/compoenent/Input";

const SettingsPAge = () => {
  return (
    <div className="flex flex-col gap-6 w-full p-4">
     
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
            {[
              { name: "General", href: "/dashboard/teachers/teacher-detail" },
              { name: "Employment Details", href: "/dashboard/teachers/teacher-detail/employment-details" },
              { name: "Attendance/Leave record", href: "/dashboard/teachers/teacher-detail/attendance-leave" },
              { name: "Reviews", href: "/dashboard/teachers/teacher-detail/reviews" },
              { name: "Communication", href: "/dashboard/teachers/teacher-detail/communication" },
              { name: "Settings", href: "/dashboard/teachers/teacher-detail/settings" },
            ].map((tab, index) => (
              <Link
                key={index}
                href={tab.href}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  index === 5
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-1 px-4 py-3">
          <p className="font-medium text-sm">Settings Section</p>
          <span className="text-gray-700 text-xs">
            Make Changes To your Teachers Settings
          </span>
        </div>
      </div>

     
      <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-6">
      
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-4">
          <div>
            <h3 className="font-medium text-sm">Email</h3>
            <p className="text-sm text-gray-600">
              Make changes to the email used to log in to a teacher&apos;s account.
            </p>
          </div>
          <Input
            label=""
            placeholder="Enter Email"
            value=""
            onChange={() => {}}
            type="text"
            name="email"
          />
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 text-sm">
            Edit
          </button>
        </div>

      
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-4">
          <div>
            <h3 className="font-medium text-sm">Password</h3>
            <p className="text-sm text-gray-600">
              Make changes to the password used to log in to a teacher&apos;s account.
            </p>
          </div>
          <Input
            label=""
            placeholder="Enter Password"
            value=""
            onChange={() => {}}
            type="password"
            name="password"
          />
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 text-sm">
            Edit
          </button>
        </div>

       
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-sm">Browsers and Devices</h3>
          <p className="text-sm text-gray-600">
            These browsers and devices are currently signed in to your account. Remove any unauthorized devices.
          </p>
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-4 border-b pb-4"
            >
              <div className="flex items-center gap-2">
                <Laptop className="text-gray-500" />
                <p className="text-sm text-gray-600">Brave on Mac OS X</p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/naija.png"
                  alt="Location"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="text-sm text-gray-600">Umuahia, Abia State</p>
              </div>
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm text-gray-600">10:20am - 15 mins</p>
                <Trash className="text-red-500 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPAge;