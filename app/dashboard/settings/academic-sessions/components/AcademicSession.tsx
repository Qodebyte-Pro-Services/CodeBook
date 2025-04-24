"use client"
import DashboardHeader from '@/app/dashboard/components/DashboardHeader';
import { ChevronsLeft, CalendarPlus } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/en-gb'; 
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);
import Toast from '@/app/components/Toast'; 
import Input from '@/app/dashboard/teachers/add-teacher/compoenent/Input';

interface AcademicSessionType {
  id: string;
  name: string;
}

interface ToastState {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

const initialSessions: AcademicSessionType[] = [
  { id: '1', name: '2023/2024 Academic session' },
  { id: '2', name: '2022/2023 Academic session' },
  { id: '3', name: '2021/2022 Academic session' },
  { id: '4', name: '2020/2021 Academic session' },
];

const AcademicSession = () => {
  const [sessions, setSessions] = useState<AcademicSessionType[]>(initialSessions);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newSessionDate, setNewSessionDate] = useState<dayjs.Dayjs | null>(null);
const [toast, setToast] = useState<ToastState | null>(null);


  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
    setNewSessionDate(null);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = dayjs(e.target.value);
    setNewSessionDate(selectedDate.isValid() ? selectedDate : null);
  };

  const handleCreateSession = () => {
    if (newSessionDate) {
      const formattedDate = `${newSessionDate.format('YYYY')}/${newSessionDate.add(1, 'year').format('YYYY')} Academic session`;
      const newSession: AcademicSessionType = { id: Date.now().toString(), name: formattedDate };
      setSessions((prevSessions) => [...prevSessions, newSession]);
      closeCreateModal();
      setToast({ message: 'Academic session created successfully!', type: 'success' });
      // In a real application, you would also send this to your backend
    } else {
      setToast({ message: 'Please select a date to create the session.', type: 'error' });
    }
  };

  const handleCloseToast = () => {
    setToast(null);
  };

  return (
    <div className="flex-1 md:p-8 overflow-hidden ">
      <DashboardHeader />

      <div className='flex flex-col gap-5 w-full '>
        <h3 className='mb-2 text-xl font-bold'>Settings</h3>
        <div className='w-full bg-[#FFFFFF] md:h-[55px] h-[60px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
          <div className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
            <ChevronsLeft />
            <p>Settings</p>
          </div>
        </div>
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
                      index === 1
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
              <p className="font-medium text-sm">Academic Session</p>
              <span className="text-gray-700 text-xs">Manage the school&apos;s academic sessions</span>
            </div>
          </div>

          <div className='grid gap-4 w-full  bg-white rounded-lg shadow-md py-3 px-3'>
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-4 w-full '>
              {sessions.map((session) => (
                <div key={session.id} className='bg-white border-2 border-gray-500 rounded-lg px-3 flex cursor-pointer gap-3 py-3'>
                  <input type="checkbox" />
                  {session.name}
                </div>
              ))}
            </div>

            <div onClick={openCreateModal} className=' border-1 border-dashed border-blue-400 lg:w-1/3 w-1/2 cursor-pointer py-2 px-3 rounded-lg flex justify-center items-center gap-2'>
              <CalendarPlus className='h-4 w-4 text-blue-500' /> Create a New Session
            </div>
          </div>
        </div>
      </div>

     
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-gray-500/75 transition-opacity bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 max-w-md">
            <h5 className="text-lg font-semibold mb-4">Create New Academic Session</h5>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleCreateSession();
            }} className="flex flex-col gap-4">
              <Input
                label="Start Year"
                placeholder="YYYY-MM-DD"
                type="date"
                value={newSessionDate ? newSessionDate.format('YYYY-MM-DD') : ''}
                onChange={handleDateChange}
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeCreateModal}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                >
                  Create Session
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

export default AcademicSession;