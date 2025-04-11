
import CalendarComp from '@/app/dashboard/teachers/teacher-detail/[id]/compoenent/CalendarComp'
import { ChevronDown, ChevronsLeft, Edit, Ellipsis } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SubjectDetail = () => {
  return (
    <>
      <div className='w-full bg-[#FFFFFF] h-[55px] mb-3 py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
          <div className='flex gap-2  sm:w-1/2 w-full items-center justify-start md:text-md text-[12px] '>
            <ChevronsLeft />
            <Link href='/dashboard/manage-school/' className='text-[9px] cursor-pointer md:text-md'>School Detail</Link>
            <ChevronsLeft className='text-gray-400 w-[20px]' />
            <p>Subject Detail</p>
           </div>

      </div>


      <div className='w-full gap-2  p-1 '>
        <div className='w-full flex gap-2 xl:flex-row flex-col'>
        <div className='flex-col flex xl:w-2/3 w-full gap-2 '>
          <div className='w-full xl:flex-row flex-col flex gap-2'>
                <div className='w-full xl:w-[70%] flex flex-col md:flex-row justify-between bg-white rounded-lg shadow p-3'>
                  <div className='flex flex-col xl:w-2/3 w-full  justify-start gap-2'>
                  <h3>Geography</h3>
                  <h4>Abj-C1D</h4>
                  <p className='text-sm'>It is the study of Earth’s landscapes, environments and people. 
                    It explores the spatial relationships and interconnections between physical and human phenomena.</p>
                  </div>
                  <div className='lg:w-1/3 w-full md:flex hidden md:justify-end'>
                     <Image src="/image-9.png" alt="school"  width={200} height={100} />
                  </div>
                </div>

                <div className='w-full xl:w-[30%] grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-3'>
                    <div className='h-[120px] w-full flex gap-1 bg-white rounded-lg py-3 px-3 '>
                     <div className='p-5 flex  justify-center items-center w-full gap-5'>
                     <Image src='/Frame-1618869711.png' width={34} height={34} alt=''/>
                      <div className='flex flex-col gap-2  '>
                      <div className='flex justify-center'>
                      <p className='text-sm'>234</p>
                      <ChevronDown />
                      </div>

                      <p className='text-sm'>
                      Classes
                      </p>
                      </div>
                     </div>

                      <Ellipsis/>
                    </div>

                    <div className='h-[120px] w-full flex gap-1 bg-white rounded-lg py-3 px-3 '>
                     <div className='p-5 flex  justify-center items-center w-full gap-5'>
                     <Image src='/Frame-1618869711.png' width={34} height={34} alt=''/>
                      <div className='flex flex-col gap-2  '>
                      <div className='flex justify-center'>
                      <p className='text-sm'>4</p>
                      <ChevronDown />
                      </div>

                      <p className='text-sm'>
                      Assigned Teachers
                      </p>
                      </div>
                     </div>

                      <Ellipsis/>
                    </div>
                </div>
          </div>
          <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-3'>
              <div className='w-full bg-white rounded-lg p-2 h-[190px] flex-col gap-4 flex'>
                <h2 className='text-md font-semibold'>Learning Objectives</h2>
                <ul className='px-2 flex-col flex gap-3'>
                  <li>1. Student Would have a better understanding on Geography.</li>
                </ul>
              </div>
              <div className='w-full bg-white rounded-lg p-2 h-[190px]  flex-col gap-2 flex'>
                <h2 className='text-md font-semibold'>Assessment Criteria</h2>
                <ul  className='px-2 flex-col flex gap-3 my-auto'>
                  <li>Exams 70%</li>
                  <li>Test 20%</li>
                  <li>Projects 10%</li>
                </ul>
              </div>
          </div>
        </div>

        <div className='flex flex-col w-full xl:w-[30%] gap-2 bg-[#FFFFFF] rounded-xl'>
        <CalendarComp/>

        <div className='flex justify-between px-2'>
          <p>Subjects</p>
          <Link href='' className='text-blue-300'>
          <Edit/>
          </Link>
        </div>

        <div className='mt-2 flex flex-col gap-3 p-3'>
        <div className='border-l-blue-900 flex flex-col gap-1 border-l-3 pl-2'>
        <p className='text-gray-400 text-sm'>Primary 3c</p>
        <p className='text-gray-950 text-md font-medium'>Basic-Technology</p>
        <p className='text-gray-400 text-sm'>Monday - March 20, 2025 08:00AM</p>
        </div>

        <div className='border-l-[#FF5C00] flex flex-col gap-1 border-l-3 pl-2'>
        <p className='text-gray-400 text-sm'>Primary 3c</p>
        <p className='text-gray-950 text-md font-medium'>Basic-Technology</p>
        <p className='text-gray-400 text-sm'>Monday - March 20, 2025 08:00AM</p>
        </div>

        <div className='border-l-[#FFBE66] flex flex-col gap-1 border-l-3 pl-2'>
        <p className='text-gray-400 text-sm'>Primary 3c</p>
        <p className='text-gray-950 text-md font-medium'>Basic-Technology</p>
        <p className='text-gray-400 text-sm'>Monday - March 20, 2025 08:00AM</p>
        </div>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default SubjectDetail
