"use client"
import { ChevronRight, ChevronsLeft } from 'lucide-react'
import React from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import Select from '../../teachers/add-teacher/compoenent/Select'
import Link from 'next/link'

const TimeTableMgt = () => {
  return (
    <div className="flex-1 md:p-8 overflow-hidden ">
    <DashboardHeader />   

        <div className='flex flex-col gap-5 w-full '>
            <h3  className='mb-2 text-xl font-bold'>Time Table</h3>

            <div className='w-full bg-[#FFFFFF] md:h-[55px] h-[60px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        
        <div className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <ChevronsLeft />
              <p>Schools TimeTable</p>
          </div>
             </div>

             <div className='w-full flex flex-col gap-3 bg-white px-2 py-3 '>
              <div className='w-full md:w-1/2'>
              <Select
                label="Select School Type"
                options={[
                  { label: 'Select School Type', value: '' },
                  { label: 'Primary', value: 'primary' },
                  { label: 'Secondary', value: 'secondary' },
                ]}
                name="schoolType"
                value=''
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  console.log(e.target.value);
                }}
                />
              </div>


                <div className=' w-full grid grid-cols-2 lg:grid-cols-3 gap-3'>
                    <Link href="/dashboard/time-table/time-table-class-room" className='flex px-2 py-2 justify-between items-center cursor-pointer  bg-blue-400 text-white rounded-xl h-[50px] w-full'>
                      <p> Primary 1</p>
                      <ChevronRight/>
                    </Link>

                    <Link href="/dashboard/time-table/time-table-class-room"  className='flex px-2 py-2 justify-between items-center cursor-pointer  bg-blue-400 text-white   rounded-xl h-[50px] w-full'>
                      <p> Primary 2</p>
                      <ChevronRight/>
                    </Link>

                    <Link href="/dashboard/time-table/time-table-class-room"  className='flex px-2 py-2 justify-between items-center cursor-pointer  bg-blue-400 text-white   rounded-xl h-[50px] w-full'>
                      <p> Primary 3</p>
                      <ChevronRight/>
                    </Link>
                </div>
             </div>

             </div>
      
    </div>
  )
}

export default TimeTableMgt
