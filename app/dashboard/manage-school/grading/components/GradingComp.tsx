"use client"
import { ChevronsLeft, Edit, Plus, Trash } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'
import AddGradingModal from './AddGradingModal';

const GradingComp = () => {
        const gradingSystem = [
            {
                grade: 'A',
                totalScore: '90 - 100',
                remark: 'Excellent',

            },
        ]

        
        const [activeTab, setActiveTab] = useState('Grading');
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [grading, setGrading] = useState(gradingSystem);
        const [editingGrade, setEditingGrade] = useState<{
            grade: string;
            totalScore: string;
            remark: string;
          } | null>(null);
        

        const currentClasses = grading.slice();

            
              const tabs = [
                { name: 'General', href: '/dashboard/manage-school'},
                { name: 'Classes', href: '/dashboard/manage-school/manage-class'},
              { name: 'School-Subjects', href: '/dashboard/manage-school/manage-class-subjects' },
                { name: 'Timetable', href: '/dashboard/manage-school/timetable' },
                // { name: 'Fee Mangement', href: '/dashboard/manage-school/fee-management' },
                { name: 'Grading', href: '/dashboard/manage-school/grading' },
              ];
            
              
              const handleAddGradingSystem = (newGrading: {
                grade: string;
                totalScore: string;
                remark: string;
              }) => {
                if (editingGrade) {
                  // Update existing grade
                  setGrading((prev) =>
                    prev.map((item) =>
                      item.grade === editingGrade.grade ? newGrading : item
                    )
                  );
                } else {
                  // Add new grade
                  setGrading([...grading, newGrading]);
                }
                setIsModalOpen(false);
                setEditingGrade(null);
              };
            
              const handleEdit = (grading: { grade: string; totalScore: string; remark: string }) => {
                setEditingGrade(grading);
                setIsModalOpen(true);
              };
            
             
  return (
    <>
    
                <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="border-b border-gray-200">
                        <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
                            {tabs.map((tab) => (
                            <Link
                                key={tab.name}
                                href={tab.href}
                                onClick={() => setActiveTab(tab.name)}
                                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                                activeTab === tab.name
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                {tab.name}
                            </Link>
                            ))}
                        </nav>
                        </div>

                        <div className='flex flex-col gap-1 px-2 py-2'>
                        <p className='font-medium text-sm'>Grading/Marking</p>
                        <span className='text-gray-700 text-xs'>Manage & edit the details of your school</span>
                        </div>
                </div>

                <div className='w-full bg-[#FFFFFF] mt-2 h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'> 
        
        <Link href='/dashboard/manage-school/' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
              <ChevronsLeft />
              <p>Manage school</p>
          </Link>
          <div className='flex gap-3 w-1/2 items-center justify-end text-md'>

          
          <div className='flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md'>
                    <button onClick={() => {
                setEditingGrade(null);
                setIsModalOpen(true);
              }} className="flex items-center gap-2">
                    <Plus className='text-blue-500' />
                    <p className='text-[10px] md:text-md'>Add A Grade</p>
                  </button>
          </div>

          <AddGradingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddGradingSystem}
      />
     </div>
                </div>

                <div className="overflow-x-auto mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Total Score{" "}</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remark</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {currentClasses.map((grading, index) => (
              <tr className='pr-1' key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{grading.grade}</div>
                 
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{grading.totalScore}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{grading.remark}</div>
                </td>
               
                <td className="px-6 flex gap-1 py-4 whitespace-nowrap">
                <button
                    onClick={() => handleEdit(grading)}
                    className="text-gray-50 flex bg-blue-500 px-3 py-2 rounded-lg mr-4"
                  >
                    <Edit />
                  </button>
                  <button className="text-gray-50  flex bg-red-500 px-3 py-2 rounded-lg mr-4">
                    <Trash/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
                </div>

                <div className='xl:w-1/2 w-full flex flex-col gap-2 mt-4 rounded-xl bg-white p-4'>
                <div className='flex justify-between'>
                <p>Grading Overview</p>
                <Edit/>
                </div>

                <div className='grid md:grid-cols-3 grid-cols-2  gap-2 px-2 py-2'>
                <div className=''>
                    <div className='flex gap-1'>
                   
                    <h3>Exams</h3>
                    </div>
                    <p>50%</p>
                </div>

                <div className=''>
                    <div className='flex gap-1'>
                    
                    <h3>Test</h3>
                    </div>
                    <p>30%</p>
                </div>

                <div className=''>
                    <div className='flex gap-1 '>
                    <h3>Assignment</h3>
                    </div>
                    <p>20%</p>
                </div>
                </div>
                </div>
      
    </>
  )
}

export default GradingComp
