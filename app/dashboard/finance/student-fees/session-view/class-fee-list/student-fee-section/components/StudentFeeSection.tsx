"use client";
import DashboardHeader from '@/app/dashboard/components/DashboardHeader'
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select'
import { ChevronsLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';

import React, { useState } from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center gap-2 mt-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="border rounded-md p-2 text-gray-500 disabled:opacity-50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`border rounded-md px-3 py-2 ${currentPage === page ? 'bg-blue-100 text-blue-800' : 'text-gray-600'
                        }`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="border rounded-md p-2 text-gray-500 disabled:opacity-50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
};

interface Fee {
    id: string;
    studentName: string;
    studentId: string;
    feeType: string;
    term: string;
    totalPaid: string;
    totalRemaining: string;
    actualFee: string;
}

const StudentFeeSection = () => {
    const [fees, ] = useState<Fee[]>([
        {
            id: '1',
            studentName: 'Ekoil Qodebyte',
            studentId: '183932SD',
            feeType: 'Tuition Fee',
            term: 'First Term',
            totalPaid: 'N5000',
            totalRemaining: 'N5000',
            actualFee: 'N10000',
            
        },
        {
            id: '2',
            studentName: 'Ekoil Qodebyte',
            studentId: '183932SD',
            feeType: 'PTA Levy',
            term: 'First Term',
            totalPaid: 'N2000',
            totalRemaining: 'N0',
            actualFee: 'N2000',
            
        },
     
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const [feesPerPage] = useState(5); 
    const indexOfLastFee = currentPage * feesPerPage;
    const indexOfFirstFee = indexOfLastFee - feesPerPage;
    const currentFees = fees.slice(indexOfFirstFee, indexOfLastFee);


    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="w-full lg:w-[85%] px-4 sm:px-6 lg:px-4 py-8 flex flex-col gap-3">
            <DashboardHeader />
            <h4>Finance</h4>
            <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
                <Link href='/dashboard/finance/student-fees/session-view/class-fee-list/' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
                    <ChevronsLeft />
                    <p>Student List</p>
                </Link>
            </div>

            <div className='flex md:flex-row flex-col gap-2 xl:w-2/3 w-full  bg-white rounded-xl py-3 px-3'>
                <div className=''>
                    <Image src="/Ellipse-702.png" width={50} height={50} alt="" />
                </div>
                <div>
                    <p>Ekoil Qodebyte</p>
                    <span>Student</span>
                    <div className='grid mt-3 md:grid-cols-2 grid-cols-1 w-full gap-2'>
                        <div className='flex gap-2 items-center'>
                            <p className='text-gray-400'>Student id</p>
                            <h5 className='text-gray-900'>183932SD</h5>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className='text-gray-400'>Current Class</p>
                            <h5 className='text-gray-900'>Primary 5 Luther King</h5>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <p className='text-gray-400'>Date of Enrollment </p>
                            <h5 className='text-gray-900'>19/04/2023</h5>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <p className='text-gray-400'>Contact Number </p>
                            <h5 className='text-gray-900'>+2349400430392</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-2  w-full bg-white rounded-xl py-3 px-3'>
                <div className='flex justify-between items-center'>
                    <p>Fees</p>
                    <div className='flex gap-2'>
                        <Select
                            label=""
                            options={[
                                { label: '2025-2026 Sessiion', value: '1' },
                            ]}
                            name=''
                            value=''
                            onChange={() => { }}
                        />

                        <Select
                            onChange={() => { }}
                            label=""
                            options={[
                                { label: 'First Term', value: '1' },
                            ]}
                            name=''
                            value=''
                        />
                    </div>
                </div>

                <div className='overflow-x-auto mt-2'>
                    <table className='w-full'>
                        <thead className='bg-gray-100'>
                            <tr className='text-left'>
                                <th className='py-2 px-4'></th>
                                <th className='py-2 px-4'>Fee Type</th>
                                <th className='py-2 px-4'>Payment Id</th>
                                <th className='py-2 px-4'>Amount</th>
                                <th className='py-2 px-4'>Amount Remaining</th>
                                <th className='py-2 px-4'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='mb-2 border-b border-gray-200'>
                                <td className='py-2 px-4'>  <input type="checkbox" className="form-checkbox" /></td>
                                <td className='py-2 px-4'>Tuition Fee</td>
                                <td className='py-2 px-4'>AJD-9201-TU</td>
                                <td className='py-2 px-4'>N5000</td>
                                <td className='py-2 px-4'>N5000</td>
                                <td className='py-2 px-4'>
                                    <div className='flex gap-2 items-center justify-center w-20 bg-green-500 rounded-xl h-8' >
                                        <div className='w-2 h-2 bg-white rounded-full'></div>
                                        <p className='text-white'>Paid</p>
                                    </div>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div className='flex flex-col gap-2  w-full bg-white rounded-xl py-3 px-3'>
                <div className='flex justify-between items-center'>
                    <p>Payment History</p>
                    <div className='flex gap-2'>
                        <Select
                            label=""
                            options={[
                                { label: '2025-2026 Sessiion', value: '1' },
                            ]}
                            name=''
                            value=''
                            onChange={() => { }}
                        />

                        <Select
                            onChange={() => { }}
                            label=""
                            options={[
                                { label: 'First Term', value: '1' },
                            ]}
                            name=''
                            value=''
                        />
                    </div>
                </div>


                <div className='overflow-x-auto mt-2'>
                    <table className='w-full'>
                        <thead className='bg-gray-100'>
                            <tr className='text-left'>
                                <th className='py-2 px-4'></th>
                                 <th className='py-2 px-4'>Student Name</th>
                                <th className='py-2 px-4'>Student ID</th>
                                <th className='py-2 px-4'>Fee Type</th>
                                <th className='py-2 px-4'>Term</th>
                                <th className='py-2 px-4'>Total Paid</th>
                                <th className='py-2 px-4'>Total Remaining</th>
                                 <th className='py-2 px-4'>Actual Fee</th>
                                <th className='py-2 px-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {currentFees.map((fee) => (
                                <tr key={fee.id} className='mb-2 border-b border-gray-200'>
                                    <td className='py-2 px-4'> <input type="checkbox" className="form-checkbox" /></td>
                                     <td className='py-2 px-4'>{fee.studentName}</td>
                                    <td className='py-2 px-4'>{fee.studentId}</td>
                                    <td className='py-2 px-4'>{fee.feeType}</td>
                                    <td className='py-2 px-4'>{fee.term}</td>
                                    <td className='py-2 px-4'>{fee.totalPaid}</td>
                                     <td className='py-2 px-4'>{fee.totalRemaining}</td>
                                    <td className='py-2 px-4'>{fee.actualFee}</td>
                                    <td className='py-2 px-4'>
                                      <p className='text-blue-400'> view Reciept</p>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(fees.length / feesPerPage)}
                    onPageChange={paginate}
                />
            </div>
            
           
        </div>
    )
}

export default StudentFeeSection
