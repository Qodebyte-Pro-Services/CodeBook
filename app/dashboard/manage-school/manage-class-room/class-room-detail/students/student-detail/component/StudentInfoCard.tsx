"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { CalendarDays, DoorOpen, Ellipsis, IdCard,MapPin, VenusAndMars } from 'lucide-react';

const StudentInfoCard = () => {
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const updateStudentData = () => {
    
    console.log('Teacher Data Updated');
    setIsDropdownOpen(false); 
  };


  return (
    <div className="bg-white rounded-lg p-4 shadow-md w-full flex md:flex-row flex-col gap-2 justify-between">
      <div className="flex items-center justify-between mb-4">
        <Image src="/Ellipse-703.png" alt="Student Profile" width={126} height={126} className="rounded-full" />
      
      </div>
      <div className='flex-col flex md:justify-center relative'>
      <Ellipsis className='justify-end flex ' onClick={toggleDropdown} />

      {isDropdownOpen && (
                    <div className="absolute gap-3 flex flex-col top-[20%] md:left-[50%] left-[40%] transform -translate-x-1/2  bg-white   p-3 rounded-md shadow-md mt-2 w-48 z-10">
                      <button
                        className="block w-full text-left px-4 py-2  text-black  rounded-lg"
                        onClick={updateStudentData}
                      >
                        Edit Profile
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2  text-black  rounded-lg"
                       
                      >
                       Suspend
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2  text-black  rounded-lg"
                       
                      >
                        Expel
                      </button>

                      <button
                        className="block w-full text-left px-4 py-2  text-black  rounded-lg"
                       
                      >
                      Advance To Next Class
                      </button>

                      <button
                        className="block w-full text-left px-4 py-2  text-black  rounded-lg"
                       
                      >
                     Delete Student
                      </button>
                    </div>
                  )}
      <h3 className="text-lg xl:text-[14px] font-semibold mb-2">Qodebyte Ogumekpon</h3>
     <div className='flex flex-col gap-2'>
     <div className="flex items-center mb-2">
      <IdCard className="mr-2 text-gray-500" />
        <span className="text-sm  xl:text-[12px] text-gray-600">2347-ABJ-9</span>
      </div>

     <div className="flex items-center mb-2">
        <VenusAndMars className="mr-2 text-gray-500" />
        <span className="text-sm xl:text-[12px] text-gray-600">Male</span>
      </div>
      
     </div>
      <div className='flex  flex-col gap-2'>
      <div className="flex items-center mb-2">
        <CalendarDays className="mr-2 text-gray-500" />
        <span className="text-sm xl:text-[12px] text-gray-600">19/00/1989</span>
      </div>
      </div>
      <div className='flex  flex-col gap-2'>
      <div className="flex items-center">
      <MapPin className="mr-1 text-gray-500" />
      <span className="text-sm xl:text-[12px] text-gray-600">Presdentail Road</span>
      </div>
      <div className="flex flex-col mb-2">
       <div className='flex'>
       <DoorOpen className="mr-2 text-gray-500" />
       <p className="text-sm xl:text-[12px] mr-1 text-gray-600">Year of Class Exit:</p>
       </div>
        <span className="text-sm xl:text-[12px] md:text-center pl-8 md:pl-0 text-gray-600">19/00/1989</span>
      </div>
      </div>
      </div>
    </div>
  );
};

export default StudentInfoCard;