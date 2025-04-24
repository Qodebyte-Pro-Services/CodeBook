"use client";
import Toggle from '@/app/components/Toggle';
import DashboardHeader from '@/app/dashboard/components/DashboardHeader';
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select';
import { ChevronsLeft, Ellipsis } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500/75 transition-opacity bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-auto max-w-md">
                {title && <h5 className="text-lg font-semibold mb-4">{title}</h5>}
                {children}
                <div className="flex justify-end">
                    <button onClick={onClose} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const StaffMgt = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isEditDetailsModalOpen, setIsEditDetailsModalOpen] = useState(false);
    const [workSchedule, setWorkSchedule] = useState({
        duration: 'mon-fri',
        totalWorkingHours: '40',
        earlyClockIn: '08:00',
        lateClockIn: '09:00',
        dailyWorkingHours: '08:00-17:00'
    });

    const durationOptions = [
        { value: 'mon-fri', label: 'Mon - Fri' },
        { value: 'mon-sat', label: 'Mon - Sat' },
        { value: 'sun-sat', label: 'Sun - Sat' },
    ];

    const totalWorkingHoursOptions = [
        { value: '40', label: '40 hours a Week' },
        { value: '48', label: '48 hours a Week' },
        { value: '56', label: '56 hours a Week' },
    ];

    const timeOptions = [
        { value: '07:00', label: '07:00 AM' },
        { value: '08:00', label: '08:00 AM' },
        { value: '09:00', label: '09:00 AM' },
        { value: '10:00', label: '10:00 AM' },
        { value: '17:00', label: '05:00 PM' },
        { value: '18:00', label: '06:00 PM' },
    ];

    const dailyWorkingHoursOptions = [
        { value: '08:00-17:00', label: '08:00 AM - 05:00 PM' },
        { value: '09:00-18:00', label: '09:00 AM - 06:00 PM' },
    ];

    const handleEllipsisClick = () => {
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
    };

    const handleEditDetailsClick = () => {
        setIsEditDetailsModalOpen(true);
        setIsEditModalOpen(false); 
    };

    const handleCloseEditDetailsModal = () => {
        setIsEditDetailsModalOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setWorkSchedule(prev => ({ ...prev, [name]: value }));
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
                                    <button onClick={handleEllipsisClick} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                        <Ellipsis className="h-5 w-5" />
                                    </button>
                                    <Toggle isEnabled={true} onToggle={() => console.log('Work Schedule Toggled')} />
                                </div>
                            </div>
                            <div className='pt-3 flex px-5 flex-col gap-2'>
                                <div className='border border-gray-400'></div>
                                <div className='grid gap-2'>
                                    <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                                        <span className='text-gray-500'>Standard working hours</span>
                                        <p>08:00am - 05:00pm</p>
                                    </div>

                                    <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                                        <span className='text-gray-500'>Total working hours/week</span>
                                        <p>08:00am - 05:00pm</p>
                                    </div>

                                    <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                                        <span className='text-gray-500'>Early Clock In</span>
                                        <p>08:00am - 05:00pm</p>
                                    </div>

                                    <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                                        <span className='text-gray-500'>Late Clock In</span>
                                        <p>08:00am - 05:00pm</p>
                                    </div>

                                    <div className='grid md:md:grid-cols-2 grid-cols-1 gap-2'>
                                        <span className='text-gray-500'>Daily working hours</span>
                                        <div className='grid  gap-2'>
                                            <div className='grid md:grid-cols-2 grid-cols-1 '>
                                                <span className='text-gray-500'>Monday</span>
                                                <p>08:00am - 05:00pm</p>
                                            </div>

                                            <div className='grid md:grid-cols-2 grid-cols-1 '>
                                                <span className='text-gray-500'>Tuesday</span>
                                                <p>08:00am - 05:00pm</p>
                                            </div>

                                            <div className='grid md:grid-cols-2 grid-cols-1 '>
                                                <span className='text-gray-500'>Wednesday</span>
                                                <p>08:00am - 05:00pm</p>
                                            </div>


                                            <div className='grid md:grid-cols-2 grid-cols-1 '>
                                                <span className='text-gray-500'>thursday</span>
                                                <p>08:00am - 05:00pm</p>
                                            </div>


                                            <div className='grid md:grid-cols-2 grid-cols-1 '>
                                                <span className='text-gray-500'>Friday</span>
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

            {/* Edit Work Schedule Modal */}
            <Modal isOpen={isEditModalOpen} onClose={handleCloseEditModal} title="Edit Work Schedule">
                <div className="flex flex-col gap-4">
                    <p>Do you want to edit the work schedule?</p>
                    <div className="flex justify-end gap-2">
                        <button
                            onClick={handleCloseEditModal}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleEditDetailsClick}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                        >
                            Edit Details
                        </button>
                    </div>
                </div>
            </Modal>

           
            <Modal isOpen={isEditDetailsModalOpen} onClose={handleCloseEditDetailsModal} title="Edit Work Schedule Details">
                <div className="flex flex-col gap-4">
                    <Select
                        label="Duration"
                        options={durationOptions}
                        value={workSchedule.duration}
                        onChange={handleInputChange}
                        name="duration"
                    />
                    <Select
                        label="Total Working Hours/Week"
                        options={totalWorkingHoursOptions}
                        value={workSchedule.totalWorkingHours}
                        onChange={handleInputChange}
                        name="totalWorkingHours"
                    />
                    <Select
                        label="Early Clock In"
                        options={timeOptions}
                        value={workSchedule.earlyClockIn}
                        onChange={handleInputChange}
                        name="earlyClockIn"
                    />
                    <Select
                        label="Late Clock In"
                        options={timeOptions}
                        value={workSchedule.lateClockIn}
                        onChange={handleInputChange}
                        name="lateClockIn"
                    />
                    <Select
                        label="Daily Working Hours"
                        options={dailyWorkingHoursOptions}
                        value={workSchedule.dailyWorkingHours}
                        onChange={handleInputChange}
                        name="dailyWorkingHours"
                    />
                    <div className="flex justify-end gap-2">
                        <button
                            onClick={handleCloseEditDetailsModal}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                               
                                console.log('Saving work schedule:', workSchedule);
                                handleCloseEditDetailsModal();
                            }}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default StaffMgt;
