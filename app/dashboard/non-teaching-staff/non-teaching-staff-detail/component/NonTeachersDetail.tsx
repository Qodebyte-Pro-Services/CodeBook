"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Cake, Calendar, CreativeCommons, Ellipsis, LocateIcon, Mail, Phone, University, VenusAndMars, Workflow } from 'lucide-react';
import Link from 'next/link';

const NonTeachersDetail = () => {
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };
  
      const updateStaffData = () => {
        setIsDropdownOpen(false); 
      };
  return (
    <div className="p-4 w-full min-h-screen">
      <div className="w-full flex flex-col xl:flex-row gap-1">
        <div className="w-full xl:w-2/3 flex flex-col gap-2">
          <div className=" gap-2 flex flex-col lg:flex-row items-start justify-between">
            <div className="flex   justify-between lg:w-[60%] w-full bg-white rounded-lg shadow md:p-6 p-2 relative"> 
             <div className="flex lg:flex-col  md:flex-row flex-col gap-5 ">
             <Image src="/Ellipse-702.png" alt="Profile" width={80} height={80} className="rounded-full" />
              <div className=" flex flex-col gap-4">
                <h2 className="text-xl font-semibold">Ekoli Qodebyte</h2>
                <div className='flex md:flex-row flex-col md:items-center gap-4'>
              <div className='flex'>
                  <Workflow/>
                <div className='ml-4 flex flex-col gap-1'>
                <p  className="text-sm">Job: </p>
                <p className="text-gray-500 text-sm">Librarian</p>
                </div>
              </div>
               <div className='flex'>
               <Calendar/>
                <div className='ml-4 flex flex-col gap-1'>
                <p className="text-sm">Date of Onboarding: </p>
                <p className="text-gray-500 text-sm">8 November 2021</p>
                </div>
               </div>
                </div>
              </div>
             </div>
             <Ellipsis  onClick={toggleDropdown}  />
             {isDropdownOpen && (
                    <div className="absolute gap-3 flex flex-col top-12 md:left-[80%] left-[65%] transform -translate-x-1/2  bg-white border-2 border-blue-500 p-3 rounded-md shadow-md mt-2 w-48 z-10">
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 border-2 border-blue-500 bg-teal-300 rounded-lg"
                        onClick={updateStaffData}
                      >
                        Update Staff Data
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 border-2 border-blue-500 bg-yellow-300 rounded-lg"
                       
                      >
                        Suspend Staff 
                      </button>

                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 border-2 border-black bg-red-400 rounded-lg"
                       
                      >
                        Sack Staff
                      </button>
                    </div>
                  )}
            </div>
            <div className="flex flex-col lg:flex-col md:flex-row  lg:w-[40%] w-full p-2 justify-between gap-2">
              <div className="flex flex-col bg-white h-[110px] rounded-lg shadow  w-full lg:w-full md:w-1/2 justify-between">
              <div className='flex  justify-between p-2 w-full'>
                    <div className='flex flex-row lg:flex-col xl:flex-row xl:gap-3 lg:gap-1 gap-3 justify-center items-center h-full xl:my-4 lg:my-2 my-4 w-[90%]'>
                             <div className='relative w-[34px] h-[34px]'>
                              <Image src='/Frame-1618869712.png' alt='' fill/>
                             </div>

                             <div className='flex flex-col xl:flex-col lg:flex-row  gap-2 text-sm'>
                              <p>100,0000</p>
                              <p className='text-gray-300'>Income</p>
                             </div>
                          </div>
                        <Link href='/students'>
                        <Ellipsis />
                        </Link>
                    </div>
              </div>

              <div className="flex flex-col bg-white h-[110px] rounded-lg shadow   w-full lg:w-full justify-between md:w-1/2">
              <div className='flex  justify-between p-2 w-full'>
                    <div className='flex flex-row lg:flex-col xl:flex-row xl:gap-3 lg:gap-1 gap-3 justify-center items-center h-full xl:my-4 lg:my-2 my-4 w-[90%]'>
                             <div className='relative w-[34px] h-[34px]'>
                              <Image src='/Frame-1618869711.png' alt='' fill/>
                             </div>

                             <div className='flex flex-col xl:flex-col lg:flex-row gap-2 text-sm'>
                              <p>98%</p>
                              <p className='text-gray-300'>Atendance</p>
                             </div>
                          </div>
                        <Link href='/'>
                        <Ellipsis />
                        </Link>
                    </div>

              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className='w-full sm:flex sm:justify-between '>
            <h3 className="text-lg font-semibold mb-4">Payment Summary</h3>
            <Link href="/" className="text-blue-500">View all</Link>
            </div>
            <ul className="space-y-4">
              {Array(5).fill(0).map((_, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-green-500 p-2 rounded-full">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p>A payment of ₦25,500 was successfully made via Bank Transfer (Transaction ID: TXN-567890)</p>
                      <p className="text-gray-500">November 10, 2025</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full xl:w-1/3 flex flex-col gap-2">
          <div className="bg-white rounded-lg shadow p-6 w-full" > 
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <ul className="space-y-2 w-full text-sm ">
              <li className='w-full flex justify-between md:flex-row flex-col'>
                <div className='  xl:gap-1 items-center gap-3  flex'>
                    <Mail/>
                     <span className="font-semibold xl:text-[11px]">Email Address</span>
                      </div>
                      <p className='xl:text-[14px] w-1/2 text-right  font-semibold text-gray-400'>qodebyte@gmail.com</p>
                      </li>
              <li className='w-full flex justify-between  md:flex-row flex-col'>
                <div className='  xl:gap-1 items-center gap-3  flex'>
                    <Phone/>
                    <span className="font-semibold xl:text-[11px]">Phone Number</span> 
                    </div>
                    <p className='xl:text-[14px] font-semibold text-gray-400'>+2349049932929</p>
                    </li>
              <li className='w-full flex justify-between md:flex-row flex-col'> 
                <div className='  xl:gap-1 items-center gap-3  flex'>
                    <VenusAndMars />
                    <span className="font-semibold xl:text-[11px]">Gender</span>
                    </div>
                     <p className='xl:text-[14px] font-semibold text-gray-400'>Male</p>
                     </li>
              <li className='w-full flex justify-between md:flex-row flex-col'>
                <div  className='  xl:gap-1 items-center gap-3  flex'>
                    <Cake/>
                    <span className="font-semibold xl:text-[11px]">Birthdate</span>
                    </div> 
                    <p className='xl:text-[14px] font-semibold text-gray-400'> 10-09-1970</p>
                    </li>
              <li className='w-full flex justify-between  md:flex-row flex-col'>
                <div   className='  xl:gap-1 items-center gap-3  flex'>
                     <LocateIcon />
                     <span className="font-semibold xl:text-[11px]">Address</span>
                      </div>
                      <p className='xl:text-[14px] md:text-right md:w-1/2 font-semibold text-gray-400'>3 Presidential road Enugu, Enugu state</p>
                      </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Educational Background</h3>
            <ul className="space-y-2">
              <li className='w-full flex justify-between md:flex-row flex-col'>
                <div className='  xl:gap-1 items-center gap-3  flex'><University/
                ><span className="font-semibold xl:text-[11px]">University</span>
                </div>
                 <p className='xl:text-[11px] text-gray-400  font-semibold'>University</p>
                 </li>
              <li className='w-full flex justify-between md:flex-row flex-col'> 
                <div className='  xl:gap-1 items-center gap-3  flex'>
                     <CreativeCommons/>
                      <span className="font-semibold xl:text-[11px]">Qualification Held</span>
                      </div>
                       <p className='xl:text-[11px] text-gray-400 font-semibold'>Bachelor of Science</p>
                       </li>
              <li className='w-full flex justify-between md:flex-row flex-col'>
                 <div className='  xl:gap-1 items-center gap-3  flex'><University/> 
                 <span className="font-semibold xl:text-[11px]">Graduation Year</span>
                 </div>
                  <p className='xl:text-[11px] text-gray-400 font-semibold'>2019</p>
                  </li>
            </ul>
          </div>

          <div className='bg-white rounded-lg shadow p-5'>
          <h3 className="text-lg font-semibold mb-4">Job Info</h3>
          <ul className="space-y-2">
                <li className='w-full flex justify-between md:flex-row flex-col'>
                    <div className='  xl:gap-1 items-center gap-3  flex'>
                        <span className="font-semibold xl:text-[11px]">
                            Job
                        </span>
                    </div>
                    <p className='xl:text-[11px] text-gray-400  font-semibold'>
                    Librarian
                    </p>
                </li>

                <li className='w-full flex justify-between md:flex-row flex-col'>
                    <div className='  xl:gap-1 items-center gap-3  flex'>
                        <span className="font-semibold xl:text-[11px]">
                        Employee ID
                        </span>
                    </div>
                    <p className='xl:text-[11px] text-gray-400  font-semibold'>
                    AGS-1289-QB
                    </p>
                </li>

                <li className='w-full flex justify-between md:flex-row flex-col'>
                    <div className='  xl:gap-1 items-center gap-3  flex'>
                        <span className="font-semibold xl:text-[11px]">
                            Department
                        </span>
                    </div>
                    <p className='xl:text-[11px] text-gray-400  font-semibold'>
                    Academics
                    </p>
                </li>

                <li className='w-full flex justify-between md:flex-row flex-col'>
                    <div className='  xl:gap-1 items-center gap-3  flex'>
                        <span className="font-semibold xl:text-[11px]">
                            Department Role
                        </span>
                    </div>
                    <p className='xl:text-[11px] text-gray-400  font-semibold'>
                    Senior Librarian
                    </p>
                </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonTeachersDetail;