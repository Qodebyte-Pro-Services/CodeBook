"use client";
import Toast from '@/app/components/Toast';
import DashboardHeader from '@/app/dashboard/components/DashboardHeader';
import Input from '@/app/dashboard/teachers/add-teacher/compoenent/Input';
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select';
import { ChevronsLeft, ChevronsUp, MoreHorizontal, PlusCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';


interface ToastState {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

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

const jobPositionOptions = [
  { value: 'Head Mistress', label: 'Head Mistress' },
  { value: 'Teacher', label: 'Teacher' },
  { value: 'Admin', label: 'Admin' },
  { value: 'Accountant', label: 'Accountant' },
  
];

const UserAcessComp = () => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [newUser, setNewUser] = useState({
    name: '',
    contactNumber: '',
    jobPosition: '',
    emailAddress: '',
    password: '',
  });
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

  const openAddUserModal = () => {
    setIsAddUserModalOpen(true);
    setNewUser({ name: '', contactNumber: '', jobPosition: '', emailAddress: '', password: '' }); 
  };

  const closeAddUserModal = () => {
    setIsAddUserModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = () => {
 
    if (!newUser.name || !newUser.contactNumber || !newUser.jobPosition || !newUser.emailAddress || !newUser.password) {
      setToast({message: 'Please fill in all the fields.', type: 'error'});
      return;
    }

    const newUserWithId = { ...newUser, id: Date.now().toString(), isActive: true, profileImage: '/Ellipse-702.png', username: newUser.emailAddress.split('@')[0] };
    console.log('Adding new user:', newUserWithId);
    
    closeAddUserModal();
  };

  const handleCloseToast = () => {
    setToast(null);
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
          <button onClick={openAddUserModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <PlusCircle className="h-4 w-4 mr-2 inline-block" /> Add New Access
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
            <Image src='/lock.png' alt='' className='rounded-full' width={40} height={20} />
            <div className='h-10 w-15 text-green-600 px-2 flex items-center justify-center border border-gray-400 rounded-full'>
              <ChevronsUp />
              12%
            </div>
            <span>Total Users With Access</span>
            <p>15</p>
          </div>

          <div className="flex flex-col gap-4">
            {users.map((user) => (
              <div key={user.id} className="bg-white rounded-lg lg:w-2/3 md:w-1/2 w-full  shadow p-4">
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

      {/* Add New User Modal */}
      {isAddUserModalOpen && (
        <div className="fixed inset-0 bg-gray-500/75 transition-opacity bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 max-w-md">
            <h5 className="text-lg font-semibold mb-4">Add New User Access</h5>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleAddUser();
            }} className="flex flex-col gap-4">
              <Input
                label="Name"
                placeholder="Full Name"
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                required
              />
              <Input
                label="Phone Number"
                placeholder="Contact Number"
                type="tel"
                name="contactNumber"
                value={newUser.contactNumber}
                onChange={handleInputChange}
                required
              />
              <Select
                label="Job Position"
                options={jobPositionOptions}
                value={newUser.jobPosition}
                onChange={handleInputChange}
                name="jobPosition"
                required
              />
              <Input
                label="Email Address"
                placeholder="Email"
                type="email"
                name="emailAddress"
                value={newUser.emailAddress}
                onChange={handleInputChange}
                required
              />
              <Input
                label="Password"
                placeholder="Password"
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleInputChange}
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeAddUserModal}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
       {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleCloseToast}
        />
      )}
    </div>
  );
};

export default UserAcessComp;