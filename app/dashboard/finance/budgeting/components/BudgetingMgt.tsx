"use client";
import React, { useState } from 'react';
import {
    ChevronDown,
    ChevronsLeftIcon,
    ChevronUp,
    Printer,
    Trash,
    PlusCircle,
    XCircle,
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';
import BudgetChart from './BudgetChart';
import BudgetPieChart from './BudgetPieChart';

import TextAreaInput from '@/app/dashboard/teachers/add-teacher/compoenent/TextAreaInput';
import Pagination from '@/app/dashboard/teachers/components/Pagination';
import Link from 'next/link';
import Input from '@/app/dashboard/teachers/add-teacher/compoenent/Input';
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select';
import Image from 'next/image';
import DashboardHeader from '@/app/dashboard/components/DashboardHeader';

interface BudgetRecord {
    budgetCategoryRecord: string;
    amountSpent: number;
    description: string;
    date: string;
    amountUnspent: number;
    allocatedBudget: number;
}

const BudgetingMgt = () => {
    const budgetData = {
        totalAmount: 800000,
        month: 'January',
        categories: [
            { name: 'Salaries', value: 82640, color: '#22C55E' },
            { name: 'Maintenance', value: 82640, color: '#3B82F6' },
            { name: 'School Supplies', value: 82640, color: '#FACC15' },
            { name: 'Transport', value: 82640, color: '#F97316' },
            { name: 'Others', value: 470040, color: '#A78BFA' },
        ],
    };

    const initialBudgetData: BudgetRecord[] = [
        {
            budgetCategoryRecord: 'Salaries',
            amountSpent: 82640,
            description: 'Monthly salaries for staff',
            date: '2023-01-15',
            amountUnspent: 0,
            allocatedBudget: 1000000,
        },
    ];

    const [budgetRecords, setBudgetRecords] = useState(initialBudgetData);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const budgetRecordsPerPage = 5;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newBudgetRecord, setNewBudgetRecord] = useState<Partial<BudgetRecord>>({
        budgetCategoryRecord: '',
        amountSpent: 0,
        description: '',
        date: '',
        allocatedBudget: 0,
    });
    const totalPages = Math.ceil(budgetRecords.length / budgetRecordsPerPage);

    const handleSearchChange = (e: { target: { value: string } }) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filteredRecords = initialBudgetData.filter((record) =>
            record.budgetCategoryRecord.toLowerCase().includes(term) ||
            record.description.toLowerCase().includes(term) ||
            record.date.toLowerCase().includes(term) ||
            record.amountSpent.toString().toLowerCase().includes(term) ||
            record.allocatedBudget.toString().toLowerCase().includes(term)
        );
        setBudgetRecords(filteredRecords);
    };

    const handlePageChange = (page: React.SetStateAction<number>) => {
        setCurrentPage(page);
    };

    const handleAddNewBudget = () => {
        if (
            newBudgetRecord.budgetCategoryRecord &&
            newBudgetRecord.amountSpent &&
            newBudgetRecord.description &&
            newBudgetRecord.date &&
            newBudgetRecord.allocatedBudget
        ) {
            const updatedRecord: BudgetRecord = {
                budgetCategoryRecord: newBudgetRecord.budgetCategoryRecord,
                amountSpent: newBudgetRecord.amountSpent,
                description: newBudgetRecord.description,
                date: newBudgetRecord.date,
                amountUnspent: newBudgetRecord.allocatedBudget - newBudgetRecord.amountSpent,
                allocatedBudget: newBudgetRecord.allocatedBudget,
            };

            setBudgetRecords([...budgetRecords, updatedRecord]);
            setIsModalOpen(false);
            setNewBudgetRecord({}); 
            setCurrentPage(1);
        } else {
            alert('Please fill in all fields!'); 
        }
    };

    const availableCategories = [
      { label: 'Salaries', value: 'Salaries' },
      { label: 'Maintenance', value: 'Maintenance' },
      { label: 'School Supplies', value: 'School Supplies' },
      { label: 'Transport', value: 'Transport' },
      { label: 'Others', value: 'Others' },
    ];

    
    const indexOfLastBudgetRecord = currentPage * budgetRecordsPerPage;
    const indexOfFirstBudgetRecord = indexOfLastBudgetRecord - budgetRecordsPerPage;
    const currentBudgetRecords = budgetRecords.slice(indexOfFirstBudgetRecord, indexOfLastBudgetRecord);


    return (
        <div className="w-full xl:w-full  lg:w-[75%] px-4 sm:px-6 lg:px-4  flex flex-col gap-2">
              <DashboardHeader/>
            <h4>Finance</h4>
            <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
                <Link href='/dashboard' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
                    <ChevronsLeftIcon />
                    <p>Dashboard</p>
                </Link>
            </div>

            <div className="bg-white rounded-lg mt-2 shadow overflow-hidden">
                <div className="border-b border-gray-200">
                    <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
                        {[
                            { name: "Overview", href: `/dashboard/finance` },
                            { name: "Payroll Management", href: `/dashboard/finance/payroll-mgt` },
                            { name: "Student Fees", href: `/dashboard/finance/student-fees` },
                            { name: "Expenses", href: `/dashboard/finance/expenses` },
                            { name: "Budgeting", href: `/dashboard/finance/budgeting` },
                        ].map((tab, index) => (
                            <Link
                                key={index}
                                href={tab.href}
                                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${index === 4
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
                    <p className="font-medium text-sm">Finance Management</p>
                    <span className="text-gray-700 text-xs">View and manage School Finance</span>
                </div>
            </div>


            <div className='flex flex-col gap-2'>
                <div className='grid xl:grid-cols-4 w-full gap-3 md:grid-cols-3 grid-cols-'>
                    <div className='h-[160px] rounded-xl bg-white py-3 px-3 flex flex-col gap-2'>
                        <div className='bg-blue-200 justify-center flex items-center w-10 h-20 rounded-full'>
                            <Image src="/Frame-3618869711.png" width={30} height={30} alt="" />
                        </div>
                        <div className='flex justify-center text-green-700 border-gray-400 items-center  rounded-full w-20 h-10 border '>
                            <ChevronUp />
                            <p> 12%</p>
                        </div>
                        <span className='text-gray-400 '>Total Budget</span>
                        <h5>N29,389,382.00</h5>
                    </div>

                    <div className='h-[160px] rounded-xl bg-white py-3 px-3 flex flex-col gap-2'>
                        <div className='bg-blue-200 justify-center flex items-center w-10 h-20 rounded-full'>
                            <Image src="/Frame-3618869711.png" width={30} height={30} alt="" />
                        </div>
                        <div className='flex justify-center text-green-700 border-gray-400 items-center  rounded-full w-20 h-10 border '>
                            <ChevronUp />
                            <p> 12%</p>
                        </div>
                        <span className='text-gray-400 '>Total Spent</span>
                        <h5>N29,389,382.00</h5>
                    </div>

                    <div className='h-[160px] rounded-xl bg-white py-3 px-3 flex flex-col gap-2'>
                        <div className='bg-blue-200 justify-center flex items-center w-10 h-20 rounded-full'>
                            <Image src="/Frame-3618869711.png" width={30} height={30} alt="" />
                        </div>
                        <div className='flex justify-center text-green-700 border-gray-400 items-center  rounded-full w-20 h-10 border '>
                            <ChevronUp />
                            <p> 12%</p>
                        </div>
                        <span className='text-gray-400 '>Remaining Budget</span>
                        <h5>N29,389,382.00</h5>
                    </div>

                    <div className='h-[160px] rounded-xl bg-white py-3 px-3 flex flex-col gap-2'>
                        <div className='bg-blue-200 justify-center flex items-center w-10 h-20 rounded-full'>
                            <Image src="/Frame-3618869711.png" width={30} height={30} alt="" />
                        </div>
                        <div className='flex justify-center text-blue-500 border-gray-400 items-center  rounded-full w-20 h-10 border '>
                            <ChevronDown />
                            <p> 12%</p>
                        </div>
                        <span className='text-gray-400 '>Overspent Categories</span>
                        <h5>300</h5>
                    </div>

                </div>


                <div className='grid xl:grid-cols-2 grid-cols-1 gap-2'>
                    <BudgetChart />
                    <BudgetPieChart {...budgetData} />
                </div>

                <div className=' overflow-x-auto  bg-white rounded-xl py-2 px-2'>
                    <div className='flex md:flex-row flex-col justify-between md:items-center w-full'>
                        <div className='flex gap-2 items-center  w-full  md:w-1/2'>
                            <h6>Budget Records</h6>
                            <form className="md:mx-auto w-1/2">
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 0 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <Input
                                        type="search"
                                        label=''
                                        placeholder="Search by, student name Name or School Id and gender"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                        required
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='flex  w-full  md:w-1/2  justify-end'>
                           <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg  flex justify-center items-center gap-2"
                            >
                                <PlusCircle className="w-4 h-4" />
                                <p className='text-white'>Add New Budget</p>
                            </button>
                        </div>
                    </div>

                    <table className="min-w-full divide-y divide-gray-200">

                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Allocated Budget</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amounrt Spent</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount Unspent</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className=" divide-y divide-gray-200">
                            {currentBudgetRecords.map((record, index) => (
                                <tr className='pr-1' key={index}>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">
                                        <input type="checkbox" className="form-checkbox" />
                                    </td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{record.budgetCategoryRecord}</div>
                                    </td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{record.allocatedBudget}</div>
                                    </td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{record.amountSpent}</div>
                                    </td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{record.amountUnspent}</div>
                                    </td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{record.description}</div>
                                    </td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{record.date}</div>
                                    </td>
                                    <td className="px-6 py-4 text-center whitespace-nowrap">
                                        <div className="text-sm text-gray-900 flex items-center gap-2">
                                            <button className='flex items-center justify-center border-0 hover:bg-gray-200 rounded-full p-1'>
                                                <Printer className="w-4 h-4" />
                                            </button>
                                            <button className='flex items-center justify-center border-0 hover:bg-red-500/20 rounded-full p-1'>
                                                <Trash className="w-4 h-4 text-red-500" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>

           
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0  bg-gray-500/75 transition-opacity bg-opacity-50 flex items-center justify-center z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: -20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-lg p-6 w-full max-w-md space-y-4"
                        >
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold">Add New Budget Record</h2>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="hover:bg-red-500/20 rounded-full p-1"
                                >
                                    <XCircle className="w-5 h-5 text-red-500" />
                                </button>
                            </div>

                            <div className="space-y-2">
                              
                                <Select
                                    label="Budget Category"
                                    options={availableCategories}
                                    value={newBudgetRecord.budgetCategoryRecord || ''}
                                    onChange={(e: { target: { value: string; }; }) => setNewBudgetRecord({ ...newBudgetRecord, budgetCategoryRecord: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                               
                                <Input
                                    label="Allocated Budget"
                                    type="number"
                                    placeholder="Enter allocated budget"
                                    value={(newBudgetRecord.allocatedBudget || 0).toString()}
                                    onChange={(e: { target: { value: string; }; }) => setNewBudgetRecord({ ...newBudgetRecord, allocatedBudget: Number(e.target.value) })}
                                />
                            </div>

                            <div className="space-y-2">
                              
                                <Input
                                  label="Amount Spent"
                                    type="number"
                                    placeholder="Enter amount spent"
                                    value={(newBudgetRecord.amountSpent || 0).toString()}
                                    onChange={(e: { target: { value: string; }; }) => setNewBudgetRecord({ ...newBudgetRecord, amountSpent: Number(e.target.value) })}
                                />
                            </div>

                            <div className="space-y-2">
                              
                                <TextAreaInput
                                    label = "Description"
                                    placeholder="Enter description"
                                    value={newBudgetRecord.description || ''}
                                    onChange={(e: { target: { value: string; }; }) => setNewBudgetRecord({ ...newBudgetRecord, description: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                               
                                <Input
                                    label = "Date"
                                    type="date"
                                    placeholder="Enter date"
                                    value={newBudgetRecord.date || ''}
                                    onChange={(e: { target: { value: string; }; }) => setNewBudgetRecord({ ...newBudgetRecord, date: e.target.value })}
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    onClick={handleAddNewBudget}
                                    className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                                >
                                    Add Record
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BudgetingMgt;

