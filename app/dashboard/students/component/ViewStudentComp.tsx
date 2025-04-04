import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ViewStudentComp = () => {
  return (
    <>
     <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        
        <Link href='/dashboard' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <ChevronsLeft />
              <p>Dashboard</p>
          </Link>
        </div>

        <div className='flex flex-col gap-5 w-full'>
            <Link href='/dashboard/students/view-session-classes' className='flex justify-between items-center md:w-1/2 w-full bg-[#FFFFFF] h-[55px] py-2 px-4 rounded-lg'>
                <p>Session 2021/2022</p>
                <ChevronsRight />
            </Link>

            <Link href='/dashboard/students/view-session-classes' className='flex justify-between items-center md:w-1/2 w-full bg-[#FFFFFF] h-[55px] py-2 px-4 rounded-lg'>
                <p>Session 2021/2022</p>
                <ChevronsRight />
            </Link>

            <Link href='/dashboard/students/view-session-classes' className='flex justify-between items-center md:w-1/2 w-full bg-[#FFFFFF] h-[55px] py-2 px-4 rounded-lg'>
                <p>Session 2021/2022</p>
                <ChevronsRight />
            </Link>
        </div>
      
    </>
  )
}

export default ViewStudentComp
