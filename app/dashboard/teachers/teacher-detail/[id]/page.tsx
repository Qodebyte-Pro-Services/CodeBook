"use client"
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'

import { ChevronsLeft } from 'lucide-react'

import TeacherDetailPage from './compoenent/TeacherDetailPage'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import DashboardNavBar from '@/app/dashboard/components/DashboardNavBar'
import DashboardHeader from '@/app/dashboard/components/DashboardHeader'

const Page = () => {
  const { id } = useParams() as { id: string }; 
  return (
    <>
      <MaxWidthWrapper>
          <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
          <DashboardNavBar />
          <div className="flex-1 md:p-8 overflow-hidden ">
          <DashboardHeader /> 
          <h3 className='mb-2 text-xl font-bold'>Teachers</h3>
          <div className='w-full bg-[#FFFFFF] h-[55px] mb-3 py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
          <div className='flex gap-2  sm:w-1/2 w-full items-center justify-start md:text-md text-[12px] '>
            <ChevronsLeft />
            <Link href='/dashboard/teachers' className='text-[9px] cursor-pointer md:text-md'>All Teachers List</Link>
            <ChevronsLeft className='text-gray-400 w-[20px]' />
            <p>Teacher</p>
           </div>

          </div>
          <TeacherDetailPage teacherId={id} />
          </div>

          </div>
      </MaxWidthWrapper>
    </>
  )
}

export default Page
