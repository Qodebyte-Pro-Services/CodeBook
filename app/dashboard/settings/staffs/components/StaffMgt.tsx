"use client";
import Toggle from '@/app/components/Toggle';
import DashboardHeader from '@/app/dashboard/components/DashboardHeader';
import { ChevronsLeft, Ellipsis} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const StaffMgt = () => {
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
                  { name: 'School Profile', href: `/dashboard/settings/` },
                  { name: 'Academic Sessions', href: `/dashboard/settings/academic-sessions` },
                  { name: 'Subject Config', href: `/dashboard/settings/subject-config` },
                  { name: 'User Access', href: `/dashboard/settings/user-acess` },
                  { name: 'Fee Structure', href: `/dashboard/settings/fee-structure` },
                  { name: "Communication", href: `/dashboard/settings/communications` },
                  { name: 'Staffs', href: `/dashboard/settings/staffs` },
                  { name: 'Students', href: `/dashboard/settings/students` },
                  { name: 'Grading & Results', href: `/dashboard/settings/grading-results` },
                  { name: 'Security', href: `/dashboard/settings/security` },
                  { name: 'General Prefrence', href: `/dashboard/settings/general` },
                ].map((tab, index) => (
                  <Link
                    key={index}
                    href={tab.href}
                    className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                      index === 6
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-1 px-2 py-2">
              <p className="font-medium text-sm">Staffs</p>
              <span className="text-gray-700 text-xs">Manage your school&apos;s staff members</span>
            </div>
          </div>

          <div className="grid gap-1  w-full ">
          <div className="bg-gray-100 rounded-t-md px-4 py-3 font-semibold text-gray-700">
                Work Schedule
              </div>
              <div className="px-4 py-3 rounded-b-xl grid bg-white">
              <div className=' flex justify-between items-center'>
              <div>
                  <p className="text-sm text-gray-600">Mon - Fri, Duration:</p>
                  <p className="text-sm font-medium text-gray-900">40 hours a Week</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Ellipsis className="h-5 w-5 text-gray-500" />
                  <Toggle isEnabled={true} onToggle={() => console.log('Work Schedule Toggled')} />
                </div>
              </div>
              <div className='pt-3 flex px-5 flex-col gap-2'>
                <div className='border border-gray-400'></div>
                <div className='grid gap-2'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                <span  className='text-gray-500'>Standard working hours</span>
                <p>08:00am - 05:00pm</p>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                <span  className='text-gray-500'>Total working hours/week</span>
                <p>08:00am - 05:00pm</p>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                <span  className='text-gray-500'>Early Clock In</span>
                <p>08:00am - 05:00pm</p>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                <span  className='text-gray-500'>Late Clock In</span>
                <p>08:00am - 05:00pm</p>
                </div>

                <div className='grid md:md:grid-cols-2 grid-cols-1 gap-2'>
                <span  className='text-gray-500'>Daily working hours</span>
               <div className='grid  gap-2'>
                <div className='grid md:grid-cols-2 grid-cols-1 '>
                <span className='text-gray-500'>Monday</span>
                <p>08:00am - 05:00pm</p>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 '>
                <span  className='text-gray-500'>Tuesday</span>
                <p>08:00am - 05:00pm</p>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 '>
                <span  className='text-gray-500'>Wednesday</span>
                <p>08:00am - 05:00pm</p>
                </div>


                <div className='grid md:grid-cols-2 grid-cols-1 '>
                <span  className='text-gray-500'>thursday</span>
                <p>08:00am - 05:00pm</p>
                </div>


                <div className='grid md:grid-cols-2 grid-cols-1 '>
                <span  className='text-gray-500'>Friday</span>
                <p>08:00am - 05:00pm</p>
                </div>
               </div>
                </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffMgt;