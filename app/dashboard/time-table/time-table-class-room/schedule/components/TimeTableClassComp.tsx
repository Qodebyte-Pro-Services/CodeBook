import DashboardHeader from '@/app/dashboard/components/DashboardHeader'
import { ChevronsLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import TimeTable from './TimeTable'

const TimeTableClassComp = () => {
  return (
    <div className="flex-1 md:p-8 overflow-hidden ">
    <DashboardHeader />   

        <div className='flex flex-col gap-5 w-full '>
            <h3  className='mb-2 text-xl font-bold'>Class Time Table</h3>

            <div className='w-full bg-[#FFFFFF] md:h-[55px] h-[60px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        
            <Link href="/dashboard/time-table/time-table-class-room" className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <ChevronsLeft />
              <p>Class TimeTable </p>
            </Link>
             </div>

             <div className='w-full bg-white rounded-xl px-2 py-4 '>
             <TimeTable />
             </div>

             </div>
      
    </div>
  )
}

export default TimeTableClassComp
