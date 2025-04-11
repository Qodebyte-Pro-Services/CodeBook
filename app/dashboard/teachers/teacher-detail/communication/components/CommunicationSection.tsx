"use client";
import Link from "next/link";
import React, { useState } from "react";
import {  MessageSquareCode, X } from "lucide-react";
import Image from "next/image";

const CommunicationSection = () => {
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);

  const openTemplateModal = () => setIsTemplateModalOpen(true);
  const closeTemplateModal = () => setIsTemplateModalOpen(false);

  return (
    <div className="flex flex-col gap-4 w-full p-4">
     
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
                  index === 4
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-1 px-2 py-2">
          <p className="font-medium text-sm">Communication Section</p>
          <span className="text-gray-700 text-xs">
            Communicate & Inform your Teachers to Pass Informations
          </span>
        </div>
      </div>

      <div className="flex-col md:flex-row flex gap-4 ">
 
       <div className="grid-cols-1 grid md:w-3/4 w-full gap-4">
       <div className="bg-white shadow rounded-lg p-4 overflow-y-scroll max-h-[400px]">
          <h3 className="font-medium text-sm mb-4">Emails/Notices</h3>
          <input
            type="text"
            placeholder="Search by title or date"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm mb-4"
          />
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col gap-2 mb-4">
                <div className="flex gap-2 items-center">
                <Image src="/ImageWork.png" alt="" width={40} height={40} className="rounded-full" />
                <p className="font-medium text-sm">Shortage of supplies</p>
                </div>
              <p className="text-sm text-gray-600">
                Good morning, Could I please request some more construction
                paper, dry-erase markers for my class? We&apos;re running low.
                Thanks!
              </p>
              <p className="text-xs text-gray-500">19 March 2025</p>
              <button className="text-blue-500 text-xs">Reply</button>
            </div>
          ))}
        </div>


        <div className="bg-white shadow rounded-lg p-4 overflow-y-scroll max-h-[400px]">
          <h3 className="font-medium text-sm mb-4">Meeting Notes</h3>
          <input
            type="text"
            placeholder="Search by title or date"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm mb-4"
          />
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col gap-2 mb-4">
              <div className="flex gap-2 items-center">
              <Image src="/ImageWork.png" alt="" width={40} height={40} className="rounded-full" />
              <p className="font-medium text-sm">Requesting Classroom resources</p>
              </div>
              <p className="text-sm text-gray-600">
                Good morning, Could I please request some more construction
                paper, dry-erase markers for my class? We&apos;re running low.
                Thanks!
              </p>
              <p className="text-xs text-gray-500">19 March 2025</p>
            </div>
          ))}
        </div>
       </div>

        <div className="bg-white shadow w-4/4 flex flex-col justify-between  rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2 items-center">
            <Image src="/ImageWork.png" alt="" width={40} height={40} className="rounded-full" />
          <h3 className="font-medium text-sm">Mr Qodebyte</h3>
          </div>
            <button
              className="text-blue-500 flex gap-2 text-sm"
              onClick={openTemplateModal}
            >
             <MessageSquareCode/> <p>Send a message</p>
            </button>
          </div>
             <div className="flex flex-col justify-end gap-2">
            <div className="bg-gray-100 rounded-lg  p-4 h-[200px] overflow-y-scroll">
            <p className="text-sm text-gray-600">
              Shortage of supplies: Good morning, Could I please request some
              more construction paper, dry-erase markers for my class? We&apos;re
              running low. Thanks!
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Image src="/ImageWork.png" alt="" width={40} height={40} className="rounded-full" />
            <input
              type="text"
              placeholder="Type a message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
              Send
            </button>
          </div>
            </div>
        </div>
      </div>

      {isTemplateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/75">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeTemplateModal}
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-4">Email Template</h3>
            <input
              type="text"
              placeholder="Search Template"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm mb-4"
            />
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-sm">Frequently Used</h4>
              {[...Array(4)].map((_, i) => (
                <p
                  key={i}
                  className="text-sm text-gray-600 bg-gray-100 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-200"
                >
                  Thank you for reaching out, we&apos;ll get back to you shortly
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunicationSection;