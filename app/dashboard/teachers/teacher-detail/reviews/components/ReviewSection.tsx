"use client";
import { PlusCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Input from "../../../add-teacher/compoenent/Input";
import TextAreaInput from "../../../add-teacher/compoenent/TextAreaInput";

const ReviewSection = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [purpose, setPurpose] = useState("");
    const [date, setDate] = useState("");

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
      setIsModalOpen(false);
      setTitle("");
      setPurpose("");
      setDate("");
    };
  
  
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
                  index === 3
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
          <p className="font-medium text-sm">Reviews Details</p>
          <span className="text-gray-700 text-xs">Manage & edit the details of your Teachers</span>
        </div>
      </div>

   
      <div className="flex flex-col gap-6">
      
        <div className="flex items-center gap-4">
          <div className="text-5xl font-bold">5.0</div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
            </div>
            <p className="text-sm text-gray-600">100 ratings</p>
          </div>
        </div>

       
        <div className="flex flex-col gap-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{rating}.0</span>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${rating * 20}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600">{rating * 20} reviews</span>
            </div>
          ))}
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-medium text-sm mb-2">Students Reviews</h3>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-medium text-sm">Ogboteye Egumenjoon</p>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Professor Ogboteye made complex material easy to understand. The lectures were clear and well-organized, and I really appreciated the helpful examples. Highly recommend.
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="font-medium text-sm mb-2">Teachers Reviews</h3>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-medium text-sm">Ogboteye Egumenjoon</p>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Professor Ogboteye made complex material easy to understand. The lectures were clear and well-organized, and I really appreciated the helpful examples. Highly recommend.
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      
        <div className="bg-white shadow rounded-lg p-4 overflow-y-scroll max-h-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-sm">Accomplishments</h3>
            <button
            className="text-blue-500 text-sm flex items-center gap-2"
            onClick={openModal}
          >
            <PlusCircle />
            <p>Add Accomplishment</p>
          </button>
           </div>
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2">
            <Image src="/trophy.png" alt="" width={40} height={40} className=" rounded-full" />
            <p className="font-medium text-sm">Teacher of the Month</p>
            </div>
              <p className="text-sm text-gray-600">
                Mr. Ogboteye Egumenjoon was selected for their exceptional commitment to creating a positive and engaging learning environment. Students are satisfied about their specific Teaching Method/Quality.
              </p>
              <p className="text-xs text-gray-500">19 March 2025</p>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/75 transition-opacity bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-4">Add Accomplishment</h3>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                console.log({ title, purpose, date });
                closeModal();
              }}
            >
              <div>
               
                <Input
                  type="text"
                  name="title"
                  label="Title of Accomplishment"
                  placeholder="Teacher of the Month"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
               
                <TextAreaInput
                  name="purpose"
                  label="Purpose of Accomplishment"
                  placeholder="Mr Qodebyte Egunmekpon was selected for their exceptional commitment to creating a positive and engaging learning environment.
                   Students are satisfied about their specific Teaching Method/Quality"
                  rows={3}
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                ></TextAreaInput>
              </div>
              <div>
               
                <Input
                label="Date of Accomplishment"
                placeholder=""
                  type="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;