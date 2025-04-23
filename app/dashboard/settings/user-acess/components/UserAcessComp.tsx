"use client";
import DashboardHeader from '@/app/dashboard/components/DashboardHeader';
import { ChevronsLeft, ChevronsUp, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const users = [
  {
    id: '1',
    name: 'Qodebyte Ogunmekpon',
    username: '@Qodebyte357',
    jobPosition: 'Head Mistress',
    contactNumber: '+23476859494750',
    emailAddress: 'qodebyte347@gmail.com',
    password: '12345678',
    isActive: true,
    profileImage: '/Ellipse-702.png',
  },
  {
    id: '2',
    name: 'Qodebyte Ogunmekpon',
    username: '@Qodebyte357',
    jobPosition: 'Head Mistress',
    contactNumber: '+23476859494750',
    emailAddress: 'qodebyte347@gmail.com',
    password: '12345678',
    isActive: true,
    profileImage: '/Ellipse-702.png',
  },
];

const UserAcessComp = () => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [userStatuses, setUserStatuses] = useState(
    users.reduce((acc, user) => {
      acc[user.id] = user.isActive;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const toggleDropdown = (userId: string) => {
    setOpenDropdownId((prevId) => (prevId === userId ? null : userId));
  };

  const handleRemoveUser = (userId: string) => {
  
    console.log(`Removing user with ID: ${userId}`);
    setOpenDropdownId(null);
  };

  const handleToggleActive = (userId: string) => {
   
    setUserStatuses((prevStatuses) => ({
      ...prevStatuses,
      [userId]: !prevStatuses[userId],
    }));
    console.log(`Toggling active state for user ID: ${userId} to ${!userStatuses[userId]}`);
  };

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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            + Add New Access
          </button>
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
                      index === 3
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
              <p className="font-medium text-sm">User Access</p>
              <span className="text-gray-700 text-xs">Manage users with access to the system</span>
            </div>
          </div>

          <div className='bg-white rounded-lg md:w-1/3 w-full px-3 grid gap-3 py-3'>
            <Image src='/lock.png' alt='' className='rounded-full' width={40} height={20}/>
            <div className='h-10 w-15 text-green-600 px-2 flex items-center justify-center border border-gray-400 rounded-full'>
                <ChevronsUp/>
                12%
            </div>
            <span>Total Users With Access</span>
            <p>15</p>
          </div>

          <div className="flex flex-col gap-4">
            {users.map((user) => (
              <div key={user.id} className="bg-white rounded-lg lg:w-1/3 md:w-1/2 w-full   shadow p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={user.profileImage}
                        alt={user.name}
                        width={40}
                        height={40}
                        className=" object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-md">{user.name}</h4>
                      <p className="text-gray-500 text-sm">{user.username}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(user.id)}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                      >
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                      {openDropdownId === user.id && (
                        <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-md z-10">
                          <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Edit
                          </Link>
                          <button
                            onClick={() => handleRemoveUser(user.id)}
                            className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100 text-left w-full focus:outline-none"
                          >
                            Remove User Access
                            
                          </button>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => handleToggleActive(user.id)}
                      className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        userStatuses[user.id] ? 'bg-blue-600' : 'bg-gray-400'
                      }`}
                      role="switch"
                      aria-checked={userStatuses[user.id]}
                    >
                      <span className="sr-only">{userStatuses[user.id] ? 'Active' : 'Inactive'}</span>
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200 ${
                          userStatuses[user.id] ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-y-2 text-sm text-gray-600">
                  <div><span className="font-medium">Name:</span> {user.name}</div>
                  <div><span className="font-medium">Job Position:</span> {user.jobPosition}</div>
                  <div><span className="font-medium">Contact Number:</span> {user.contactNumber}</div>
                  <div><span className="font-medium">Email Address:</span> {user.emailAddress}</div>
                  <div><span className="font-medium">Username:</span> {user.username}</div>
                  <div><span className="font-medium">Password:</span> {user.password}</div>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAcessComp;