"use client"
import Toggle from '@/app/components/Toggle'
import DashboardHeader from '@/app/dashboard/components/DashboardHeader'
import Input from '@/app/dashboard/teachers/add-teacher/compoenent/Input'
import { ChevronsLeft, Edit } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const General = () => {
  return (
  <div className="flex-1 md:p-8 overflow-hidden ">
    <DashboardHeader />
    <div className="flex flex-col gap-5 w-full ">
      <h3 className="mb-2 text-xl font-bold">Settings</h3>
      <div className="w-full bg-[#FFFFFF] md:h-[55px] h-[60px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll">
        <div className="flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] ">
          <ChevronsLeft />
          <p>Settings</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full ">
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
             index === 10
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
     <p className="font-medium text-sm">General Prefrence</p>
     <span className="text-gray-700 text-xs">Manage your details and personal preferences</span>
   </div>
        </div>

        <div className="p-6 bg-white rounded-lg w-full shadow">
          <div className='flex justify-between items-center'>
          <h2 className="text-xl font-semibold mb-6">General Settings</h2>
          <Edit/>
          </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <Input
          placeholder='Date Format'
          label='Date Format'
          type='date'
          value='dd/mm/yyyy'
          onChange={() => {}}
          />

          <Input
          placeholder='Currency' 
          value='Naira'
          label='Currency Display'
          onChange={() => {}}
          type='text'
          />

          <Input
          label='Language'
          placeholder='Language'
            type='text'
            value='English'
            onChange={() => {}}
          />

          <Input
          label='timezone'
          placeholder='Timezone'
            type='text'
            value='Africa/Lagos'
            onChange={() => {}}
          />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-4'>
              <div>
                <h6>Advance Settings</h6>
                <p className='text-blue-500'>Enable & Disable Features</p>
              </div>

             <div className='grid gap-4 w-full '>
             <div className='flex items-center gap-2'>
              <Toggle
              isEnabled={true}
              onToggle={() => {}}
              />
              <div>
                <p>Academic Session</p>
                <span className='text-gray-500'>Enable/Disable the academic session feature </span>
              </div>
              </div>

              <div className='flex items-center gap-2'>
              <Toggle
              isEnabled={true}
              onToggle={() => {}}
              />
              <div>
                <p>Academic Session</p>
                <span className='text-gray-500'>Enable/Disable the academic session feature </span>
              </div>
              </div>


              <div className='flex items-center gap-2'>
              <Toggle
              isEnabled={true}
              onToggle={() => {}}
              />
              <div>
                <p>Academic Session</p>
                <span className='text-gray-500'>Enable/Disable the academic session feature </span>
              </div>
              </div>
             </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default General
