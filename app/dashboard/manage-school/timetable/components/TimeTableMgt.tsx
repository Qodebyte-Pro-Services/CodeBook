"use client"
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select';
import { ChevronsLeft, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const TimeTableMgt = () => {
    const tableData = [
        {
          day: 'Monday',
          periods: [
            'Civic Education',
            'Civic Education',
            'Civic Education',
            'Break Time',
            'Civic Education',
            'Civic Education',
          ],
        },
        {
          day: 'Tuesday',
          periods: [
            'Civic Education',
            'Civic Education',
            'Civic Education',
            'Break Time',
            'Civic Education',
            'Civic Education',
          ],
        },
        {
          day: 'Wednesday',
          periods: [
            'Civic Education',
            'Civic Education',
            'Civic Education',
            'Break Time',
            'Civic Education',
            'Civic Education',
          ],
        },
        {
          day: 'Thursday',
          periods: [
            'Civic Education',
            'Civic Education',
            'Civic Education',
            'Break Time',
            'Civic Education',
            'Civic Education',
          ],
        },
        {
          day: 'Friday',
          periods: [
            'Civic Education',
            'Civic Education',
            'Civic Education',
            'Break Time',
            'Civic Education',
            'Civic Education',
          ],
        },
      ];
    
      const timeSlots = [
        '08:00 AM - 09:00 AM',
        '08:00 AM - 09:00 AM',
        '08:00 AM - 09:00 AM',
        '11:00 AM - 12:00 PM',
        '08:00 AM - 09:00 AM',
        '08:00 AM - 09:00 AM',
      ];
  return (
    <>
    <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        
        <Link href='/dashboard/manage-school/school-detail' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <ChevronsLeft />
              <p>School Details</p>
          </Link>
          <div className='flex gap-3 w-1/2 items-center justify-end text-md'>
         <button className='flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md bg-blue-500 text-white'>
        Make changes
         </button>
        <Link href='/dashboard/manage-school/manage-class-room/manage-class-room-detail/timetable/add-timetable' className='flex gap-2 text-blue-600  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <PlusCircle />
              <p>Add Timetable</p>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg mt-2 shadow overflow-hidden">
    
        <div className="border-b border-gray-200">
        <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
  {[
    { name: "Nursery 1A", href: `/dashboard/manage-school/manage-class-room/class-room-detail/` },
    { name: "Students", href: `/dashboard/manage-school/manage-class-room/class-room-detail/students` },
    { name: "Subject/Performance", href: `/dashboard/manage-school/manage-class-room/class-room-detail/subjects-performance` },
    { name: "Timetable", href: `/dashboard/manage-school/manage-class-room/class-room-detail/timetable` },
    { name: "Assesment on Students", href: `/dashboard/manage-school/manage-class-room/class-room-detail/assesment-students` },
  
  ].map((tab, index) => (
    <Link
      key={index}
      href={tab.href}
      className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
        index === 3
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
          <p className="font-medium text-sm">Nursery 1A Timetable</p>
          <span className="text-gray-700 text-xs">Manage & edit the details of your Classrooms</span>
        </div>
      </div>
      <div className="overflow-x-auto mt-3 bg-gray-50 px-2 py-2 rounded-lg">
      <div className='px-2 py-2 md:w-1/2 w-full'>
        <Select
        label=""
        options={[
          { label: 'Primary', value: '1' },
        ]}
        name="class"
        value=''
        onChange={(e) => (e.target.value)}
        />
        </div>
      <table className="min-w-full divide-y      divide-blue-600">
        <thead>
          <tr>
            <th className="px-3 py-3  border-1 border-blue-600 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            {timeSlots.map((time, index) => (
              <th
                key={index}
                className="px-3 py-3 border-1 border-blue-600 bg-gray-50 text-left text-[10px] w-full font-medium text-gray-500 uppercase tracking-wider"
              >
                {time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-blue-600">
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}> 
              <td className="px-3 py-4 border-1 border-blue-600 whitespace-nowrap">
                <div className="text-sm text-gray-900">{row.day}</div>
              </td>
              {row.periods.map((period, periodIndex) => (
                <td key={periodIndex} className="px-6 py-4 border-1 border-blue-600 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{period}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default TimeTableMgt
