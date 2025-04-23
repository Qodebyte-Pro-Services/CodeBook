"use client"
import { Edit } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import UploadImage from '../../teachers/add-teacher/compoenent/UploadInput'
import Input from '../../teachers/add-teacher/compoenent/Input'
import TextAreaInput from '../../teachers/add-teacher/compoenent/TextAreaInput'

const SettingsPage = () => {
  return (
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
             index === 0
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
     <p className="font-medium text-sm">School Settings</p>
     <span className="text-gray-700 text-xs">Manage your details and personal preferences</span>
   </div>
        </div>

        <div className='grid gap-4 w-full '>
        <div className='bg-white rounded-xl w-full px-3 flex flex-col gap-3 py-3'>
        <div className='flex justify-between w-full'>
          <p>School Logo</p>
          <Edit/>
        </div>

        <div className='xl:w-1/3 md:w-1/2 w-full '>
       <UploadImage 
       onChange={(e) => console.log(e)}
       />
        </div>
        </div>

        <div className='bg-white rounded-xl w-full px-3 flex flex-col gap-3 py-3'>
        <div className='flex justify-between w-full'>
          <p>School</p>
          <Edit/>
        </div>

        <div className='w-full flex flex-col gap-2 ' > 
       <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2'>
       <Input
       label='School Name'
        placeholder='Enter School Name'
        type='text'
        value='Qodebyte Nursery and Primary School'
        onChange={(e) => console.log(e)}
       />

       <TextAreaInput
       label='School Motto'
        placeholder='Enter School Motto'
        value='Qodebyte Nursery and Primary School focus on nurturing young learners through creativity and play based education.'
        onChange={(e) => console.log(e)}
       />
       </div>
       <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
       <Input
       label='School Type 1'
        placeholder='Enter School Type 1'
        type='text'
        value='Nursery'
        onChange={(e) => console.log(e)}
       />

      <Input
       label='School Type 2'
        placeholder='Enter School Type 2'
        type='text'
        value='Primary'
        onChange={(e) => console.log(e)}
       />

      <Input
       label='CAC Registration Number'
        placeholder='Enter CAC Registration Number'
        type='text'
        value='5940459'
        onChange={(e) => console.log(e)}
       />
       </div>
        </div>
        </div>

        <div className='bg-white rounded-xl w-full px-3 flex flex-col gap-3 py-3'>
        <div className='flex justify-between w-full'>
          <p>Address</p>
          <Edit/>
        </div>

        <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-2 ' > 
        <Input
        label='Street No'
        placeholder='Enter Street No'
        type='text'
        value='No 1'
        onChange={(e) => console.log(e)}
        />

        <Input
        label='Street Name'
        placeholder='Enter Street Name'
        type='text'
        value='Qodebyte Street'
        onChange={(e) => console.log(e)}
        />

        <Input
        label='City'
        placeholder='Enter City'
        type='text'
        value='Lagos'
        onChange={(e) => console.log(e)}
        />

        <Input
        label='State'
        placeholder='Enter State'
        type='text'
        value='Lagos'
        onChange={(e) => console.log(e)}
        />

        <Input
        label='Nationality'
        placeholder='Enter National'
        type='text'
        value='Nigeria'
        onChange={(e) => console.log(e)}
        />

        <Input 
        label='Postal Code'
        placeholder='Enter Postal Code'
        type='text'
        value='100001'
        onChange={(e) => console.log(e)}
        />
        </div>
        </div>


        <div className='bg-white rounded-xl w-full px-3 flex flex-col gap-3 py-3'>
        <div className='flex justify-between w-full'>
          <p>Principal</p>
          <Edit/>
        </div>

        <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-2 ' > 
        <Input
        label='principal name'
        placeholder='Enter principal name'
        type='text'
        value='Mr. Qodebyte'
        onChange={(e) => console.log(e)}
        />
        <Input 
        label='Contact Number'
        placeholder='Enter Contact Number'
        type='text'
        value='08012345678'
        onChange={(e) => console.log(e)}
        />

        <Input
        label='Email Address'
        placeholder='Enter Email Address'
        type='text'
        value='qodebyte@email.com'
        onChange={(e) => console.log(e)}
        />

      <TextAreaInput
      label='Address'
      placeholder='Enter Address'
      value='3 Presidential Road Enugu, Enugu State, Nigeria'
      onChange={(e) => console.log(e)}
      />
        </div>
        </div>

        <div className='bg-white rounded-xl w-full px-3 flex flex-col gap-3 py-3'>
        <div className='flex justify-between w-full'>
          <p>Contact Information</p>
          <Edit/>
        </div>

        <div className='w-full grid grid-cols-2 gap-2 ' > 
        <Input 
        label='Contact Number'
        placeholder='Enter Contact Number'
        type='text'
        value='08012345678'
        onChange={(e) => console.log(e)}
        />

        <Input
        label='Email Address'
        placeholder='Enter Email Address'
        type='text'
        value='qodebyte@email.com'
        onChange={(e) => console.log(e)}
        />

     <Input
     label='Website'
      placeholder='Enter Website'
      type='text'
      value='www.qodebyte.com'
      onChange={(e) => console.log(e)}
     />
        </div>
        </div>

        </div>
      
    </div>
  )
}

export default SettingsPage
