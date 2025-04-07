"use client";
import { ChevronLeft, Edit, LocateIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const SchoolDetail = () => {
  const [activeTab, setActiveTab] = useState('General');

  const tabs = [
    { name: 'General', href: '/dashboard/manage-school'},
    { name: 'Classes', href: '/dashboard/manage-school/manage-class'},
    { name: 'Subjects', href: '/dashboard/manage-school/manage-class/mange-class-subects' },
   { name: 'Timetable', href: '/dashboard/manage-school/timetable' },
    { name: 'Fee Mangement', href: '/dashboard/manage-school/fee-management' },
    { name: 'Grading', href: '/dashboard/manage-school/grading' },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-3">
      <div className="w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll">
      <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md"
          >
            <ChevronLeft className="text-blue-500" />
            <p className="text-[10px] md:text-md">Dashboard</p>
      </Link>
      <div className="flex gap-3 w-1/2 items-center justify-end text-md">
         
      <Link
            href="/dashboard/manage-school/school-detail/update-school-details"
            className="flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md"
          >
            <Edit className="text-blue-500" />
            <p className="text-[10px] md:text-md">Make Changes to School</p>
      </Link>
       
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll  justify-between">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                onClick={() => setActiveTab(tab.name)}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === tab.name
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className='flex flex-col gap-1 px-2 py-2'>
          <p className='font-medium text-sm'>General</p>
          <span className='text-gray-700 text-xs'>Manage & edit the details of your school</span>
        </div>
      </div>

      <div className='bg-white rounded-lg shadow flex gap-2'>
        <Image src="/imagelogo.png" alt="logo" width={200} height={200} className=' object-cover' />

        <div className='flex flex-col gap-2 justify-center'>
            <h2>
            Qodebyte Nursery and Primary School
            </h2>
            <div className='flex gap-2'>
              <LocateIcon className='text-gray-500' />
              <p className='text-gray-500'>Enugu, Nigeria</p>
            </div>
            <p>
            Little stars academy is a nursery and
             primary school that focuses on nurturing young learners through creativity and play-based education.
            </p>
        </div>
      </div>

      <div className='bg-white rounded-lg shadow flex flex-col gap-2 px-2 py-2'>
      <h4>Address</h4>
      <div className='xl:grid-cols-3 grid md:grid-cols-2 grid-cols-1 gap-2 px-2 py-2'>
              <div className='flex flex-col gap-2 ' >
              <p>Country</p>
              <span>Nigeria</span>
              </div>

              <div className='flex flex-col gap-2 ' >
              <p>City</p>
              <span>Enugu</span>
              </div>

              <div className='flex flex-col gap-2 ' >
              <p>School Address</p>
              <span>3 Presidential road Enugu state Nigeria 400106</span>
              </div>
      </div>
      </div>

      <div className='bg-white rounded-lg shadow flex flex-col gap-2 px-2 py-2'>
      <h4>School Contact Info</h4>
      <div className='xl:grid-cols-3 grid md:grid-cols-2 grid-cols-1 gap-2 px-2 py-2 '>
              <div className='flex flex-col gap-2 ' >
              <p>Email Address</p>
              <span>school@email.com</span>
              </div>

              <div className='flex flex-col gap-2 ' >
              <p>Contact Phone Number</p>
              <span>123456789</span>
              </div>

              <div className='flex flex-col gap-2 ' >
              <p>Postal Code</p>
              <span>849504</span>
              </div>
      </div>
      </div>


    </div>
  );
};

export default SchoolDetail;