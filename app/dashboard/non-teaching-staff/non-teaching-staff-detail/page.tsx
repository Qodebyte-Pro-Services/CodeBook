import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../../components/DashboardNavBar'
import DashboardHeader from '../../components/DashboardHeader'
import { ChevronsLeft } from 'lucide-react'
import NonTeachersDetail from './component/NonTeachersDetail'
import Link from 'next/link'

const page = () => {
  return (
    <MaxWidthWrapper>
          <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
          <DashboardNavBar />
          <div className="flex-1 md:p-8 overflow-hidden ">
          <DashboardHeader /> 
          <h3 className='mb-2 text-xl font-bold'>Non Teachers</h3>
          <div className='w-full bg-[#FFFFFF] h-[55px] mb-3 py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
          <div className='flex gap-2  sm:w-1/2 w-full items-center justify-start md:text-md text-[12px] '>
            <ChevronsLeft />
            <Link href='/dashboard/non-teaching-staff' className='text-[9px] cursor-pointer md:text-md'>All Non-Teachers List</Link>
            <ChevronsLeft className='text-gray-400 w-[20px]' />
            <p>Non Teachers</p>
           </div>

          </div>
         <NonTeachersDetail/>
          </div>

          </div>
      </MaxWidthWrapper>
  )
}

export default page
