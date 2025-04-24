"use client";
import DashboardHeader from '@/app/dashboard/components/DashboardHeader'
import Input from '@/app/dashboard/teachers/add-teacher/compoenent/Input';
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select'
import { ChevronsLeft, Edit, Plus, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
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
            <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 max-w-2xl">
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

interface BonusDeduction {
    id: string;
    purpose: string;
    amount: string;
    date: string;
}

const PayDetails = () => {
    const [isAddBonusModalOpen, setIsAddBonusModalOpen] = useState(false);
    const [bonusDeductionType, setBonusDeductionType] = useState<'bonus' | 'deduction'>('bonus');
    const [newBonusDeduction, setNewBonusDeduction] = useState<Omit<BonusDeduction, 'id'>>({
        purpose: '',
        amount: '',
        date: '',
    });
    const [bonusDeductions, setBonusDeductions] = useState<BonusDeduction[]>([
        { id: '1', purpose: 'Employee of the Month', amount: 'N10,000.00', date: '03/04/2025' },
    ]);
    const [salaryHistory] = useState<{
        id: string;
        employeeName: string;
        transactionId: string;
        amount: string;
        date: string;
        status: 'Paid' | 'Pending';
    }[]>([
        {
            id: 'sh1',
            employeeName: 'Ekoil Qodebyte',
            transactionId: '1234567890',
            amount: 'N50,000.00',
            date: '03/04/2025',
            status: 'Paid',
        }
    ])
    const handleAddBonusDeduction = () => {
        const newRecord: BonusDeduction = {
            id: crypto.randomUUID(),
            ...newBonusDeduction,
        };
        setBonusDeductions([...bonusDeductions, newRecord]);
        setIsAddBonusModalOpen(false);
        setNewBonusDeduction({ purpose: '', amount: '', date: '' }); 
    };

    const handleBonusDeductionInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewBonusDeduction(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="w-full xl:w-full lg:w-[75%] px-4 sm:px-6 lg:px-4 py-8 flex flex-col gap-3">
            <DashboardHeader />
            <h4>Finance</h4>
            <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
                <Link href='/dashboard/finance/payroll-mgt' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
                    <ChevronsLeft />
                    <p>Payroll Management</p>
                </Link>
            </div>



            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 w-full '>
                <div className='grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-4 w-full '>
                    <div className='flex md:flex-row flex-col gap-2 bg-white rounded-xl py-3 px-3'>
                        <div className=''>
                            <Image src="/Ellipse-702.png" width={50} height={50} alt="" />
                        </div>
                        <div>
                            <p>Ekoil Qodebyte</p>
                            <span>teacher</span>
                            <div className='grid mt-3 md:grid-cols-2 grid-cols-1 gap-2'>
                                <div className='flex gap-2 items-center'>
                                    <p className='text-gray-400'>Employment Status</p>
                                    <h5 className='text-gray-900'>Active</h5>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <p className='text-gray-400'>Salary</p>
                                    <h5 className='text-gray-900'>N 50,000.00</h5>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <p className='text-gray-400'>Employment </p>
                                    <h5 className='text-gray-900'>Teacher</h5>
                                </div>

                                <div className='flex gap-2 items-center'>
                                    <p className='text-gray-400'>Status </p>
                                    <h5 className='text-gray-900'>Paid</h5>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <p className='text-gray-400'>Date Employed </p>
                                    <h5 className='text-gray-900'>12 March 2025</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex  flex-col gap-2 bg-white rounded-xl py-3 px-3'>
                        <div className='flex justify-between items-center'>
                            <h5 className='text-gray-900'>Bank Information</h5>
                            <p className='text-blue-600'>
                                <Edit />
                            </p>
                        </div>
                        <div className='grid mt-3 gap-2'>
                            <div className='flex gap-2 items-center'>
                                <p className='text-gray-400'>Bank Name</p>
                                <p>First Bank</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <p className='text-gray-400'>Account Number</p>
                                <p>1234567890</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <p className='text-gray-400'>Account Name</p>
                                <p>Qodebyte</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 bg-white rounded-xl py-3 px-3'>
                    <div className='flex justify-between items-center'>
                        <Select
                            onChange={(e) => setBonusDeductionType(e.target.value as 'bonus' | 'deduction')}
                            label=""
                            options={[
                                { label: 'Bonuses', value: 'bonus' },
                                { label: 'Deductions', value: 'deduction' },
                            ]}
                            name=''
                            value={bonusDeductionType}
                        />

                        <button onClick={() => setIsAddBonusModalOpen(true)} className='flex gap-2 items-center  text-blue-600 '>
                            <Plus />
                            <p className='text-gray-950'> Add {bonusDeductionType === 'bonus' ? 'Bonus' : 'Deduction'}</p>
                        </button>
                    </div>

                    <div className='overflow-x-auto mt-2 max-h-[400px] overflow-y-scroll'>
                        <table className='min-w-full divide-y divide-gray-200'>
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                                {bonusDeductions.map((item) => (
                                    <tr className='pr-1' key={item.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input type="checkbox" className="form-checkbox" />
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {item.purpose}
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {item.amount}
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {item.date}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>

                    </div>
                </div>
            </div>


            <div className='overflow-x-auto mt-2'>
                <div className='flex justify-between items-center bg-white rounded-t-xl py-3 px-3'>
                    <h5 className='text-gray-900'>Salary History</h5>
                    <div className='relative flex  w-1/2 items-center'>
                        <input type="text" placeholder='Search by Category/ Transaction ID' className='w-full border border-gray-800 rounded-xl h-10 py-2 pl-7' />
                        <SearchIcon className='absolute top-2 left-1' />
                    </div>
                </div>
                <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-white'>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {salaryHistory.map((item) => (
                            <tr className='pr-1' key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input type="checkbox" className="form-checkbox" />
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {item.employeeName}
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {item.transactionId}
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {item.amount}
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {item.date}
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className='flex gap-2 items-center bg-teal-500 text-teal-700 w-25 rounded-full px-2 py-1'>
                                        <p className='text-white'>{item.status}</p>
                                        <div className='bg-white rounded-full w-2 h-2'></div>
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className='text-blue-600'>Reciept</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

         
            <Modal
                isOpen={isAddBonusModalOpen}
                onClose={() => setIsAddBonusModalOpen(false)}
                title={`Add ${bonusDeductionType === 'bonus' ? 'Bonus' : 'Deduction'}`}
            >
                <div className="space-y-4">
                    <div>
                        
                        <Input
                            label={bonusDeductionType === 'bonus' ? 'Bonus Purpose' : 'Deduction Purpose'}
                            type="text"
                            name="purpose"
                            value={newBonusDeduction.purpose}
                            onChange={handleBonusDeductionInputChange}
                            placeholder={`Enter ${bonusDeductionType === 'bonus' ? 'bonus' : 'deduction'} purpose`}
                           
                        />
                    </div>
                    <div>
                      
                        <Input
                         label='Amount'
                            name="amount"
                            value={newBonusDeduction.amount}
                            onChange={handleBonusDeductionInputChange}
                            placeholder="Enter amount"
                            type='string'
                        />
                    </div>
                    <div>
                        
                        <Input
                          label="Date"
                            type="date"
                            name="date"
                            value={newBonusDeduction.date}
                            onChange={handleBonusDeductionInputChange}
                            placeholder=''
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            onClick={() => setIsAddBonusModalOpen(false)}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleAddBonusDeduction}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default PayDetails
