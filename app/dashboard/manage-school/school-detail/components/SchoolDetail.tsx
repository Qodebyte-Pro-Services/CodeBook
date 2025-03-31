"use client";

import React, { useMemo } from 'react';
import Image from 'next/image';
import { ChevronsLeft, Edit, BadgeInfo, Calendar } from 'lucide-react';
import Link from 'next/link';

interface SchoolDetailProps {
  schoolData: {
    schoolName: string;
    schoolType: string;
    schoolAddress: string;
    schoolCity: string;
    schoolState: string;
    schoolDescription: string;
    schoolPhone: string;
    ownerName: string;
    schoolEmail: string;
    schoolMotto: string;
    establishmentDate: string;
    schoolLogo: string | null;
    postalCode: string;
    country: string;
  };
}

const SchoolDetail: React.FC<SchoolDetailProps> = ({ schoolData }) => {
  const {
    schoolName,
    schoolType,
    schoolAddress,
    schoolCity,
    schoolState,
    schoolDescription,
    schoolPhone,
    ownerName,
    schoolEmail,
    schoolMotto,
    establishmentDate,
    schoolLogo,
    postalCode,
    country,
  } = schoolData;

  const schoolTypeDisplay = useMemo(() => {
    switch (schoolType) {
      case 'nursery':
        return 'Nursery School';
      case 'primary':
        return 'Primary School';
      case 'secondary':
        return 'Secondary School';
      default:
        return 'School';
    }
  }, [schoolType]);

  return (
    <>
      <div className="w-full bg-[#FFFFFF] mb-3  h-[75px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll">
        <div className="flex gap-2 md:w-1/2 w-full items-center justify-start md:text-md text-[12px]">
          <ChevronsLeft />
          <Link href="/dashboard/manage-school" className='cursor-pointer'>School Types</Link>
          <ChevronsLeft className="text-gray-400 w-[20px]" />
          <p>Nursery School details</p>
        </div>
        <div className='flex gap-2 py-1'>
            <Link href='/dashboard/manage-school/school-detail/view-students' className='bg-blue-500 text-[12px] h-[50px] flex items-center text-white rounded-md p-2'>View Students</Link>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 shadow-md w-full flex flex-col xl:flex-row">
            <div className=' justify-between xl:w-[60%] w-full items-start'> 
              <div className='flex  flex-col md:flex-row gap-3 xl:justify-normal justify-between w-full '>
                {schoolLogo && (
                  <Image
                    src={schoolLogo}
                    alt="School Logo"
                    width={200}
                    height={200}
                    priority
                  />
                )}
                <div className='md:px-10 px-2 py-8'>
                 <div className='flex gap-4 '>
                  <BadgeInfo/>
                <div className='flex flex-col'>
                <h3 className="text-2xl font-semibold">{schoolName}</h3>
                <h3 className='text-xl font-semibold'>{schoolTypeDisplay}</h3>
                <p className='text-lg font-semibold'>{schoolMotto}</p>
                </div>
                 </div>
                
                </div>
              </div> 
            </div>
           <div className='xl:w-[40%] w-full flex'>
           <p className="text-sm text-gray-600 mt-4">{schoolDescription}</p>
            <div className="text-gray-500 cursor-pointer">
                <Edit />
              </div>
           </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md w-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <div className="text-gray-500 cursor-pointer">
                  <Edit />
                </div>
              </div>
              <div className='grid grid-cols-1 gap-2'>
                <div className="flex md:flex-col xl:flex-row flex-row md:items-start xl:items-center items-centermb-2">
                  <span className="text-sm text-gray-600 font-semibold">Country</span>
                  <span className="text-sm text-gray-600 ml-2">{country}</span>
                </div>
                <div className="flex md:flex-col xl:flex-row flex-row md:items-start xl:items-center items-centermb-2">
                  <span className="text-sm text-gray-600 font-semibold">City</span>
                  <span className="text-sm text-gray-600 ml-2">{schoolCity}</span>
                </div>

                <div className="flex md:flex-col xl:flex-row flex-row md:items-start xl:items-center items-centermb-2">
                  <span className="text-sm text-gray-600 font-semibold">Location</span>
                  <span className="text-sm text-gray-600 ml-2">{schoolAddress}, {schoolCity}, {schoolState}</span>
                </div>

                <div className="flex items-center">
                  <span className="text-sm text-gray-600 font-semibold">Postal Code</span>
                  <span className="text-sm text-gray-600 ml-2">{postalCode}</span>
                </div>


              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-md w-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                <div className="text-gray-500 cursor-pointer">
                  <Edit />
                </div>
              </div>
              <div className='grid grid-cols-1 gap-2'>
                <div className="flex md:flex-col xl:flex-row flex-row md:items-start xl:items-center items-center mb-2">
                  <span className="text-sm text-gray-600 font-semibold">Email Address</span>
                  <span className="text-sm text-gray-600 ml-2">{schoolEmail}</span>
                </div>
                <div className="flex md:flex-col xl:flex-row flex-row md:items-start xl:items-center items-center mb-2">
                  <span className="text-sm text-gray-600 font-semibold">Contact Number</span>
                  <span className="text-sm text-gray-600 ml-2">{schoolPhone}</span>
                </div>
                <div className="flex md:flex-col xl:flex-row flex-row md:items-start xl:items-center items-center">
                  <span className="text-sm text-gray-600 font-semibold">Postal Code</span>
                  <span className="text-sm text-gray-600 ml-2">{postalCode}</span>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-lg p-4 shadow-md w-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold mb-2">Further School Detail</h3>
                <div className="text-gray-500 cursor-pointer">
                  <Edit />
                </div>
              </div>
              <div className='grid grid-cols-1 gap-2'>
                <div className="flex md:flex-col xl:flex-row flex-row md:items-start xl:items-center items-center mb-2">
                  <span className="text-sm text-gray-600 font-semibold">School Owner</span>
                  <span className="text-sm text-gray-600 ml-2">{ownerName}</span>
                </div>
                <div className="flex flex-col xl:flex-row items-start xl:items-center ">
                  <span className="text-sm text-gray-600 font-semibold">School Establishment Date</span>
                  <span className="text-sm flex text-gray-600 ml-2"> <Calendar/> {establishmentDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolDetail;