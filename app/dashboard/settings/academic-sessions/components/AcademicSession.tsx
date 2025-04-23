import DashboardHeader from '@/app/dashboard/components/DashboardHeader'
import { ChevronsLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AcademicSession = () => {
  return (
    <div className="flex-1 md:p-8 overflow-hidden ">
    <DashboardHeader />   

        <div className='flex flex-col gap-5 w-full '>
            <h3  className='mb-2 text-xl font-bold'>Settings</h3>
            <div className='w-full bg-[#FFFFFF] md:h-[55px] h-[60px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
            <div className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <ChevronsLeft />
              <p>Settings</p>
             </div>
            </div>
            <div className='flex flex-col gap-5 w-full '>
          
            <div className="bg-white rounded-lg mt-2 shadow overflow-hidden">
   <div className="border-b border-gray-200">
     <nav className="flex -mb-px  overflow-x-scroll justify-between">
       {[
          { name: "School Profile", href: `/dashboard/settings/` },
          { name: "Academic Sessions", href: `/dashboard/settings/academic-sessions` },
          { name: "Subject Config", href: `/dashboard/settings/subject-config` },
          { name: "User Access", href: `/dashboard/settings/user-acess` },
          { name: "Fee Structure", href: `/dashboard/settings/fee-structure` },
          { name: "Communication", href: `/dashboard/settings/communications` },
          { name: "Staffs", href: `/dashboard/settings/staffs` },
          { name: "Students", href: `/dashboard/settings/students` },
          { name: "Grading & Results", href: `/dashboard/settings/grading-results` },
          { name: "Security", href: `/dashboard/settings/security` },
          { name: "General Prefrence", href: `/dashboard/settings/general` },
       ].map((tab, index) => (
         <Link
           key={index}
           href={tab.href}
           className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
             index === 1
               ? "border-blue-500 text-blue-600"
               : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
           }`}
         >
           {tab.name}
         </Link>
       ))}
     </nav>
   </div>
   <div className="flex flex-col gap-1 px-2 py-2">
     <p className="font-medium text-sm">Academic Session</p>
     <span className="text-gray-700 text-xs">Manage your details and personal preferences</span>
   </div>
            </div>

           <div className='grid gap-4 w-full  bg-white rounded-lg shadow-md py-3 px-3'>
           <div className='grid lg:grid-cols-3 grid-cols-2 gap-4 w-full '>
            <div className='bg-white border-2 border-gray-500 rounded-lg px-3 flex cursor-pointer gap-3 py-3'>
            <input type="checkbox" />
            2023/2024 Academic session
            </div>

            <div className='bg-white border-2 border-gray-500  rounded-lg px-3 flex cursor-pointer gap-3 py-3'>
            <input type="checkbox" />
            2023/2024 Academic session
            </div>


            <div className='bg-white border-2 border-gray-500  rounded-lg px-3 flex cursor-pointer gap-3 py-3'>
            <input type="checkbox" />
            2023/2024 Academic session
            </div>


            <div className='bg-white border-2 border-gray-500  rounded-lg px-3 flex cursor-pointer gap-3 py-3'>
            <input type="checkbox" />
            2023/2024 Academic session
            </div>
            </div>

            <div className=' border-1 border-dashed border-blue-400 lg:w-1/3 w-1/2 cursor-pointer py-2 px-3 rounded-lg flex justify-center items-center gap-2'>
                Create a New Session
            </div>
           </div>
            </div>
             </div>
    </div>
  )
}

export default AcademicSession
