"use client"
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ViewSessionClass = () => {
  return (
    <>
         <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        
        <Link href='/dashboard/students' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <ChevronsLeft />
              <p>View Session</p>
          </Link>
        </div>
 <div className='bg-white px-2 py-2 rounded-xl md:w-1/2 w-full'>
      <Select
                  label="School Type"
                  options={[
                    { value: 'nursery', label: 'Nursery School' },
                  ]}
                  value=""
                  onChange={(value) => console.log(value)}
                />
 </div>
        <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 w-full'>
     
            <Link href='/dashboard/students/view-session-classes/student-list' className='flex justify-between items-center  bg-[#FFFFFF] h-[55px] py-2 px-4 rounded-lg'>
                <p>Nursery 1</p>
                <ChevronsRight />
            </Link>

            <Link href='/dashboard/students/view-session-classes/student-list' className='flex justify-between items-center  bg-[#FFFFFF] h-[55px] py-2 px-4 rounded-lg'>
            <p>Nursery 1</p>
                <ChevronsRight />
            </Link>

            <Link href='/dashboard/students/view-session-classes/student-list' className='flex justify-between items-center  bg-[#FFFFFF] h-[55px] py-2 px-4 rounded-lg'>
            <p>Nursery 1</p>
                <ChevronsRight />
            </Link>
        </div>
    </>
  )
}

export default ViewSessionClass
