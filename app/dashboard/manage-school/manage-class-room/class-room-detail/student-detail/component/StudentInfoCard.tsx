"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { CalendarDays, Ellipsis, IdCard,UserRound, VenusAndMars } from 'lucide-react';

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
                    <div className="absolute gap-3 flex flex-col top-[20%] md:left-[50%] left-[40%] transform -translate-x-1/2  bg-white border-2 border-blue-500 p-3 rounded-md shadow-md mt-2 w-48 z-10">
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 border-2 border-blue-500 bg-blue-500 text-white hover:text-black rounded-lg"
                        onClick={updateStudentData}
                      >
                        Update Student Data
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-teal-500 border-2 border-black bg-teal-300 rounded-lg"
                       
                      >
                        Graduate Student
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-yellow-500 border-2 border-blue-500 bg-yellow-300 rounded-lg"
                       
                      >
                        Suspend Student
                      </button>

                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-red-600 border-2 border-black bg-red-400 rounded-lg"
                       
                      >
                        Expel Student
                      </button>
                    </div>
                  )}
      <h3 className="text-lg xl:text-[14px] font-semibold mb-2">Qodebyte Ogumekpon</h3>
     <div className='flex md:flex-row flex-col gap-2'>
     <div className="flex items-center mb-2">
      <IdCard className="mr-2 text-gray-500" />
        <span className="text-sm  xl:text-[12px] text-gray-600">2347-ABJ-9</span>
      </div>

     <div className="flex items-center mb-2">
        <VenusAndMars className="mr-2 text-gray-500" />
        <span className="text-sm xl:text-[12px] text-gray-600">Male</span>
      </div>
      
     </div>
      <div className='flex md:flex-row flex-col gap-2'>
      <div className="flex items-center mb-2">
        <CalendarDays className="mr-2 text-gray-500" />
        <span className="text-sm xl:text-[12px] text-gray-600">19/00/1989</span>
      </div>
      <div className="flex items-center">
        <UserRound className="mr-1 text-gray-500" />
        <span className="text-sm xl:text-[12px] text-gray-600">Mr. Qodebyte</span>
      </div>
      </div>
      </div>
    </div>
  );
};

export default StudentInfoCard;