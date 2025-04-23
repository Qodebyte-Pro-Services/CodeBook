import DashboardHeader from '@/app/dashboard/components/DashboardHeader'
import { ChevronRight, ChevronsLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const BroadcastMessages = () => {
  return (
    <div className='flex lg:w-[75%] w-full  flex-col gap-2 '>
    <DashboardHeader/>
  <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
   <Link href='/dashboard' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
     <ChevronsLeft />
     <p>Dashboard</p>
   </Link>
 </div>

 <div className="bg-white rounded-lg mt-2 shadow overflow-hidden">
   <div className="border-b border-gray-200">
     <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
       {[
         { name: "Compose Message", href: `/dashboard/messages` },
         { name: "Sent Messages ", href: `/dashboard/messages/sent-messages` },
         { name: "Broadcast Messages", href: `/dashboard/messages/broadcast-messages` },
       ].map((tab, index) => (
         <Link
           key={index}
           href={tab.href}
           className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
             index === 2
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
     <p className="font-medium text-sm">Broadcast Messages</p>
     <span className="text-gray-700 text-xs">View and send messages</span>
   </div>
 </div>

 <div className='flex flex-col gap-4 py-2 px-2 bg-white rounded-lg shadow-md'> 
       <h4 className='border-b-3 xl:w-1/7 lg:w-1/5 md:w-1/4 w-full border-b-blue-400'>Broadcast Messages</h4>

       <div className='flex justify-between hover:bg-gray-100 hover:rounded-xl cursor-pointer  px-5 xl:w-1/2 md:w-2/3 w-full items-center border-b-2 border-gray-800 py-2'>
       <div className='flex flex-col gap-2 '>
        <p>Students</p>
        <span>Send Messages to all the students of your school</span>
       </div>
       <ChevronRight className='text-gray-500'/>
       </div>

       <div className='flex justify-between hover:bg-gray-100  cursor-pointer hover:rounded-xl  px-5 xl:w-1/2 md:w-2/3 w-full items-center border-b-2 border-gray-800 py-2'>
       <div className='flex flex-col gap-2 '>
        <p>Teachers</p>
        <span>Send Messages to all the teachers of your school</span>
       </div>
       <ChevronRight className='text-gray-500'/>
       </div>


       <div className='flex justify-between hover:bg-gray-100 hover:rounded-xl  cursor-pointer  px-5 xl:w-1/2 md:w-2/3 w-full items-center border-b-2 border-gray-800 py-2'>
       <div className='flex flex-col gap-2 '>
        <p>Staffs</p>
        <span>Send Messages to all the staffs of your school</span>
       </div>
       <ChevronRight className='text-gray-500'/>
       </div>
 </div>
      
    </div>
  )
}

export default BroadcastMessages
