"use client"

import { ChevronsLeft, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

type SchoolType = 'nursery' | 'primary' | 'secondary';

const SchoolMode = () => {
    const [selectedSchool, setSelectedSchool] = useState<SchoolType>('nursery');

  const schoolData = {
    nursery: {
      title: 'Nursery School',
      description:
        'Manage your nursery school operations with ease. Stay updated on academics, pupils, teachers, and more—all in one place. Let\'s keep shaping a brighter future together!',
    },
    primary: {
      title: 'Primary School',
      description:
        'Manage your primary school operations with ease. Stay updated on academics, pupils, teachers, and more—all in one place. Let\'s keep shaping a brighter future together!',
    },
    secondary: {
      title: 'Secondary School',
      description:
        'Manage your secondary school operations with ease. Stay updated on academics, pupils, teachers, and more—all in one place. Let\'s keep shaping a brighter future together!',
    },
  };

  const handleSchoolSelect = (schoolType: SchoolType) => {
    setSelectedSchool(schoolType);
  };

  return (
    <>
      <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
        <div className='flex gap-2 w-1/2 items-center justify-start md:text-md text-[12px] '>
          <ChevronsLeft />
          <p>All School Type</p>
        </div>

        <Link href='/dashboard/manage-school/add-school-type' className='flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md'>       
                    <Plus className='text-blue-500' />
                    <p className='text-[10px] md:text-md'>Create School Type</p>    
        </Link>

      </div>

      <div className='mt-4 p-4'>
        <div className='flex space-x-4 items-center gap-1 md:gap-3 '>
          <div
            onClick={() => handleSchoolSelect('nursery')}
            className={`flex items-center md:gap-3 gap-1 cursor-pointer ${
              selectedSchool === 'nursery' ? 'text-blue-800' : 'text-gray-600'
            }`}
          >
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center ${
                selectedSchool === 'nursery'
                  ? 'bg-blue-100 text-[12px] lg:text-lg'
                  : 'bg-gray-200 text-[12px] lg:text-lg'
              }`}
            >
              1
            </div>
            <div className='font-semibold text-[12px] lg:text-lg'>Nursery School</div>
          </div>

          <div
            onClick={() => handleSchoolSelect('primary')}
            className={`flex items-center md:gap-3 gap-1 cursor-pointer ${
              selectedSchool === 'primary' ? 'text-blue-800' : 'text-gray-600'
            }`}
          >
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center ${
                selectedSchool === 'primary'
                  ? 'bg-blue-100 text-[12px] lg:text-lg'
                  : 'bg-gray-200 text-[12px] lg:text-lg'
              }`}
            >
              2
            </div>
            <div className='text-[12px] lg:text-lg'>Primary School</div>
          </div>

          <div
            onClick={() => handleSchoolSelect('secondary')}
            className={`flex items-center md:gap-3 gap-1 cursor-pointer ${
              selectedSchool === 'secondary' ? 'text-blue-800' : 'text-gray-600'
            }`}
          >
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center ${
                selectedSchool === 'secondary'
                  ? 'bg-blue-100 text-[12px] lg:text-lg'
                  : 'bg-gray-200 text-[12px] lg:text-lg'
              }`}
            >
              3
            </div>
            <div className='text-[10px] lg:text-lg'>Secondary School</div>
          </div>
        </div>

        <div className='mt-6 bg-white flex flex-col gap-3  rounded-lg lg:p-6 p-3 w-full xl:w-1/2 '>
         <div className='flex flex-col lg:flex-row w-full'>
         <div className='lg:w-3/4 w-full '>
            <h2 className='text-2xl font-semibold mb-4'>
              {schoolData[selectedSchool].title}
            </h2>
            <p className='text-gray-600'>
              {schoolData[selectedSchool].description}
            </p>
          </div>
          <div className='lg:w-1/4 w-full lg:flex hidden lg:justify-end'>
            <div className='w-40 h-40 relative'>
              <Image src='/school.png' alt='School Building' fill />
            </div>
          </div>
         </div>

              <div className='flex flex-col md:flex-row gap-4 w-1/2'>
    <Link href="/dashboard/manage-school/school-detail" className='p-4  h-[50px] md:h-[40px]  flex items-center text-[12px] rounded-lg bg-blue-400 text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-400 hover:border-blue-400 hover:border-2 hover:-translate-y-1 hover:shadow-md hover:scale-105'>
          <p >View School details</p>
    </Link>
    <Link href="/dashboard/manage-school/manage-class" className='p-4 rounded-lg h-[50px] md:h-[40px]  flex items-center text-[12px] bg-blue-400 text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-400 hover:border-blue-400 hover:border-2 hover:-translate-y-1 hover:shadow-md hover:scale-105'>
         <p> Manage Classes</p>
    </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default SchoolMode;