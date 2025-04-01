import React from 'react'
import DashboardHeader from './DashboardHeader'
import Image from 'next/image'
import { ChevronDown, Ellipsis } from 'lucide-react'
import Calendar from '@/app/dashboard/components/Calender'

const StudentDashboard = () => {
  return (
    <div className="flex-1 md:p-8 overflow-hidden ">
      <DashboardHeader />

      <div className='w-full flex lg:flex-row flex-col gap-2'>
        <div className='w-full xl:w-[70%] flex flex-col gap-4'>
        <div className='bg-white rounded-xl w-full py-2 h-[40px] pl-2 '>
            Dashboard
        </div>

        <div className='bg-white rounded-xl w-full flex xl:flex-row flex-col  p-2 '>

        <div className='flex-col flex gap-2 xl:w-1/2'>
        <div className=' flex gap-2  items-center'>
        <Image src='/Waving-Hand-Emoji.png' alt='' width={30} height={30} />
        <h2 className='text-xl font-bold'>Welcome, Qodebyte</h2>
        </div>
        <p>
        Manage your school operations with ease. 
        Stay updated on academics, attendance, grades, announcements and more—all in one place. 
        Let’s keep shaping a brighter future together!
        </p>
        </div>
        <Image src='/Group-30044.png' alt='' width={300} height={300} />
        </div>

       <div className='w-full grid grid-cols-2 gap-3 '>
       <div className='bg-white rounded-xl  w-full flex flex-col gap-2 p-2'>
      <div className='flex justify-between w-full'>
      <h3>Attendance</h3>
      <Ellipsis/>
      </div>
        <div className='w-full gap-5 flex items-center md:justify-center'>
          <Image src="/Frame-1618869711.png" alt='' width={20} height={20} />
          <div className=''>
          <h2>90%</h2>
          <h3>Attendance</h3>
          </div>
        </div>
        </div>

      <div className='bg-white rounded-xl  w-full flex flex-col gap-2 p-2'>
      <div className='flex justify-between w-full'>
      <h3>School Fees</h3>
      <Ellipsis/>
      </div>
        <div className='w-full gap-5 flex items-center md:justify-center'>
          <Image src="/Frame-1618869712.png" alt='' width={20} height={20} />
          <div className=''>
          <h2>90%</h2>
          <h3>Paid</h3>
          </div>
        </div>
        </div>
       </div>

       <div className='w-full flex gap-2 flex-col  bg-white rounded-xl p-2'>
        <h2>Class Time Table</h2>
        <p>Subjects For the Day</p>
        <ul className='grid grid-cols-1 gap-3 w-full max-h-[300px] overflow-y-scroll '>
          <li className='w-full flex justify-between'>
          <span>1.</span>
          <h4>Geography</h4>
          <p>
            Time: 08:00AM - 09:00AM
          </p>
          </li>

          <li className='w-full flex justify-between'>
          <span>2.</span>
          <h4>Geography</h4>
          <p>
            Time: 08:00AM - 09:00AM
          </p>
          </li>


          <li className='w-full flex justify-between'>
          <span>3.</span>
          <h4>Geography</h4>
          <p>
            Time: 08:00AM - 09:00AM
          </p>
          </li>

          <li className='w-full flex justify-between'>
          <span>4.</span>
          <h4>Geography</h4>
          <p>
            Time: 08:00AM - 09:00AM
          </p>
          </li>
        </ul>
       </div>
        </div>

        <div className='w-full xl:w-[30%] flex flex-col gap-4'>
          <Calendar/>

          <div className='w-full rounded-xl flex flex-col gap-3 bg-white  p-2 '> 
          <h3>HomeWork</h3>
          <div className='bg-blue-100 items-center w-full flex gap-2 pl-2 rounded-xl h-[50px]'>
            <p>Mathematics</p>
            <ChevronDown/>
          </div>

        <div className='max-h-[300px] overflow-y-scroll w-full mt-3 flex flex-col gap-4 justify-between '>
        <div className='border-l-blue-900 flex flex-col gap-1 border-l-3 pl-2'>
        <p className='text-gray-400 text-sm'>Pythagoras Theory </p>
       <div className='p-1 rounded-lg bg-green-200 flex text-green-400 items-center'>
         <p className=' text-md font-medium'>Submitted</p>
       </div>
        <p className='text-gray-400 text-sm'>Due date: Monday - March 20, 2025</p>
        </div>

        <div className='border-l-orange-900 flex flex-col gap-1 border-l-3 pl-2'>
        <p className='text-gray-400 text-sm'>Pythagoras Theory </p>
       <div className='p-1 rounded-lg bg-rose-200 flex text-rose-400 items-center'>
         <p className=' text-md font-medium'>Not Submitted</p>
       </div>
        <p className='text-gray-400 text-sm'>Due date: Monday - March 20, 2025</p>
        </div>

        <div className='border-l-red-900 flex flex-col gap-1 border-l-3 pl-2'>
        <p className='text-gray-400 text-sm'>Pythagoras Theory </p>
       <div className='p-1 rounded-lg bg-red-200 flex text-red-400 items-center'>
         <p className=' text-md font-medium'>Missed</p>
       </div>
        <p className='text-gray-400 text-sm'>Due date: Monday - March 20, 2025</p>
        </div>

        <div className='border-l-blue-900 flex flex-col gap-1 border-l-3 pl-2'>
        <p className='text-gray-400 text-sm'>Pythagoras Theory </p>
       <div className='p-1 rounded-lg bg-green-200 flex text-green-400 items-center'>
         <p className=' text-md font-medium'>Submitted</p>
       </div>
        <p className='text-gray-400 text-sm'>Due date: Monday - March 20, 2025</p>
        </div>

        <div className='border-l-orange-900 flex flex-col gap-1 border-l-3 pl-2'>
        <p className='text-gray-400 text-sm'>Pythagoras Theory </p>
       <div className='p-1 rounded-lg bg-rose-200 flex text-rose-400 items-center'>
         <p className=' text-md font-medium'>Not Submitted</p>
       </div>
        <p className='text-gray-400 text-sm'>Due date: Monday - March 20, 2025</p>
        </div>

        <div className='border-l-red-900 flex flex-col gap-1 border-l-3 pl-2'>
        <p className='text-gray-400 text-sm'>Pythagoras Theory </p>
       <div className='p-1 rounded-lg bg-red-200 flex text-red-400 items-center'>
         <p className=' text-md font-medium'>Missed</p>
       </div>
        <p className='text-gray-400 text-sm'>Due date: Monday - March 20, 2025</p>
        </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
