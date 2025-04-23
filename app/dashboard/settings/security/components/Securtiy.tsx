"use client";
import DashboardHeader from '@/app/dashboard/components/DashboardHeader'
import { ChevronsLeft, MonitorSmartphone, ShieldCheck, SquareMousePointer, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Securtiy = () => {
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
                      index === 9
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
              <p className="font-medium text-sm">Security</p>
              <span className="text-gray-700 text-xs">Manage your details and personal preferences</span>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg w-full shadow">
            <div className="bg-blue-100 rounded-lg p-4 flex xl:flex-row flex-col xl:items-center xl:gap-0 gap-3 justify-between mb-6">
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">Your account security is 90%</p>
                  <p className="text-sm text-gray-600">
                    Please review your account security settings regularly and update your password
                  </p>
                </div>
              </div>
              <div className='flex'>
                <button className="text-blue-500 mr-2">Dismiss</button>
                <button className="bg-blue-500 text-white sm:px-4 sm:py-2 px-1 py-2 rounded-lg">Review security</button>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">Basics</h2>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold">Password</p>
                  <p className="text-sm text-gray-600">Set a password to protect your account</p>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">
                  <ShieldCheck />
                  </span>
                  <span className="text-sm text-green-500 mr-4">Very secure</span>
                  <button className="text-blue-500">Edit</button>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold">Two-step verification</p>
                  <p className="text-sm text-gray-600 sm:w-full w-[90%]">We recommend requiring a verification code in addition to your password</p>
                </div>
                <div className="flex sm:flex-row flex-col  items-center">
                  <label className="inline-flex  relative items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    <span className="ml-3 xl:block hidden text-sm font-medium text-gray-900">Two-step verification</span>
                  </label>
                  <button className="text-blue-500 ml-4">Edit</button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Browsers and devices</h2>
              <p className="text-sm text-gray-600 mb-4">These browsers and devices are currently signed in to your account. Remove any unauthorized devices.</p>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-orange-500 mr-2">
                    <SquareMousePointer />
                    </span>
                    <div>
                      <p className="font-semibold md:text-sm text-[12px]">Brave on Mac OS X</p>
                      <p className="text-sm text-gray-600">Enugu, Enugu State</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 mr-4">Current session</span>
                    <button className="text-red-500">
                    <Trash/>
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-2">
                    <MonitorSmartphone />
                    </span>
                    <div>
                      <p className="font-semibold md:text-sm text-[12px]">iPhone 13 Pro</p>
                      <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 mr-4">Active 2 days ago</span>
                    <button className="text-red-500">
                    <Trash/>
                    </button>
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

export default Securtiy
