import { ChevronsLeft, ChevronsRight, PlusCircle } from 'lucide-react'
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

          <Link href='/' className='flex gap-2  w-1/2 items-center text-blue-500  justify-end md:text-md text-[12px] '>
              <PlusCircle />
              <p>Add Student</p>
          </Link>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 py-2 gap-3'>
      <div className='h-[120px] bg-blue-300 rounded-xl flex flex-col justify-center pl-4 py-3'>
      <h6>Total Students</h6>
      <span>200</span>
      </div>

      <div className='h-[120px] bg-yellow-200 rounded-xl flex flex-col justify-center pl-4 py-3'>
      <h6>Boys</h6>
      <span>20</span>
      </div>

      <div className='h-[120px] bg-blue-300 rounded-xl flex flex-col justify-center pl-4 py-3'>
      <h6>Girls</h6>
      <span>20</span>
      </div>


      <div className='h-[120px] bg-yellow-200 rounded-xl flex flex-col justify-center pl-4 py-3'>
      <h6>Active</h6>
      <span>20</span>
      </div>

      <div className='h-[120px] bg-blue-300 rounded-xl flex flex-col justify-center pl-4 py-3'>
      <h6>Graduated</h6>
      <span>20</span>
      </div>
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
