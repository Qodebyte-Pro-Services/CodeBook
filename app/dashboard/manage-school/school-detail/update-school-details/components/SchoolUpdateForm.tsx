"use client";
import Input from '@/app/dashboard/teachers/add-teacher/compoenent/Input';
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select';
import TextAreaInput from '@/app/dashboard/teachers/add-teacher/compoenent/TextAreaInput';
import UploadImage from '@/app/dashboard/teachers/add-teacher/compoenent/UploadInput';
import { ChevronLeft, Edit, LocateIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

const SchoolUpdateForm = () => {
     const [activeTab, setActiveTab] = useState('General');
    
      const tabs = [
        { name: 'General', href: '/dashboard/manage-school'},
        { name: 'Classes', href: '/dashboard/manage-school/manage-class'},
        { name: 'Subjects', href: '/dashboard/manage-school/mange-clss-subects' },
        { name: 'Timetable', href: '/dashboard/manage-school/timetable' },
        { name: 'Fee Mangement', href: '/dashboard/manage-school/fee-management' },
        { name: 'Grading', href: '/dashboard/manage-school/grading' },
      ];
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-3">
    <div className="w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll">
    <Link
          href="/dashboard/manage-school"
          className="flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md"
        >
          <ChevronLeft className="text-blue-500" />
          <p className="text-[10px] md:text-md">Manage School</p>
    </Link>
   
    </div>
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll  justify-between">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              onClick={() => setActiveTab(tab.name)}
              className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === tab.name
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className='flex flex-col gap-1 px-2 py-2'>
        <p className='font-medium text-sm'>General</p>
        <span className='text-gray-700 text-xs'>Manage & edit the details of your school</span>
      </div>
    </div>

    <div className='w-full rounded-xl px-2 py-2 bg-white'>
          <div className=' flex flex-col lg:flex-row gap-4 w-full justify-between  px-2 py-3'>
         <div className='w-1/3'>
         <UploadImage onChange={(file) => console.log(file)}  />
         </div>

          <div className='flex-col flex gap-3 justify-center w-1/2 '>
          <h1 className='text-2xl font-bold text-gray-800'>
          Qodebyte Nursery and Primary School
          </h1>

            <div className='flex gap-2'>
              <LocateIcon className='text-gray-500' />
              <p className='text-gray-500'>Enugu, Nigeria</p>
            </div>

        <TextAreaInput
              label="School Description"
              placeholder="Enter school description"
              value="Little stars academy is a nursery and primary school that focuses on nurturing young learners through creativity and play-based education."
              onChange={(e) => console.log(e.target.value)}
            />
          </div>

          <div className='flex rounded-full w-[50px] h-[50px] bg-blue-500 text-white items-center justify-center'>
          <Edit/>
          </div>
          
          </div>
    </div>

    <div className='bg-white rounded-lg shadow flex flex-col gap-2 px-2 py-2'>
      <h4>Address</h4>
      <div className='xl:grid-cols-3 grid md:grid-cols-2 grid-cols-1 gap-2 px-2 py-2'>
              <div className='flex flex-col gap-2 ' >
             <Input 
               label="Street No" 
               placeholder="Enter street number" 
               type="text" 
               value="02" 
               onChange={(e) => console.log(e.target.value)} 
             />
              </div>

              <div className='flex flex-col gap-2 ' >
              <Input 
               label="Street" 
               placeholder="Enter street" 
               type="text" 
               value="Presidental road" 
               onChange={(e) => console.log(e.target.value)} 
             />
              </div>

              <div className='flex flex-col gap-2 ' >
                <Select
                  label="City"
                  options={[
                    { value: 'enugu', label: 'Enugu' },
                    { value: 'lagos', label: 'Lagos' },
                    { value: 'abuja', label: 'Abuja' },
                  ]}
                  value="enugu"
                  onChange={(value) => console.log(value)}
                />
              </div>

              <div className='flex flex-col gap-2 ' >
              <Input 
               label="State" 
               placeholder="Enter State" 
               type="text" 
               value="Enugu State" 
               onChange={(e) => console.log(e.target.value)} 
             />
              </div>

              <div className='flex flex-col gap-2 ' >
                <Select
                  label="Country"
                  options={[
                    { value: 'nigeria', label: 'Nigeria' },
                    { value: 'ghana', label: 'Ghana' },
                    { value: 'england', label: 'England' },
                  ]}
                  value="nigeria"
                  onChange={(value) => console.log(value)}
                />
              </div>

              <div className='flex flex-col gap-2 ' >
              <Input 
               label="Postal Code" 
               placeholder="Enter PostalCode" 
               type="text" 
               value="453672" 
               onChange={(e) => console.log(e.target.value)} 
             />
              </div>
      </div>
      </div>

      <div className='bg-white rounded-lg shadow flex flex-col gap-2 px-2 py-2'>
      <h4>School Contact Info</h4>
      <div className='xl:grid-cols-3 grid md:grid-cols-2 grid-cols-1 gap-2 px-2 py-2 '>
      <div className='flex flex-col gap-2 ' >
             <Input 
               label="Email Address" 
               placeholder="Enter Email Address" 
               type="email" 
               value="qodebyte347@mail.com" 
               onChange={(e) => console.log(e.target.value)} 
             />
              </div>
              

              <div className='flex flex-col gap-2 ' >
              <Input 
               label="Phone Number" 
               placeholder="Enter Phone Number" 
               type="text" 
               value="1234567890" 
               onChange={(e) => console.log(e.target.value)} 
             />
              </div>
      </div>
      </div>

      <button className='bg-blue-500 text-white rounded-lg px-4 py-2 w-full md:w-1/2 flex justify-center mx-auto'>
        Save 
      </button>
      
    </div>
  )
}

export default SchoolUpdateForm
