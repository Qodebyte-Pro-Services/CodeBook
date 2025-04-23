"use client";
import DashboardHeader from '@/app/dashboard/components/DashboardHeader';
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select';
import { ChevronsLeft, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';


interface SubjectData {
  [key: string]: { id: string; name: string }[];
}


const classData = [
  { id: '1', headTeacher: 'Mr. Qodebyte Ogunmekpon', className: 'Nursery 1A' },
  { id: '2', headTeacher: 'Mr. Qodebyte Ogunmekpon', className: 'Nursery 1B' },
  { id: '3', headTeacher: 'Mr. Qodebyte Ogunmekpon', className: 'Nursery 1C' },
];

const subjectData: SubjectData = {
  '1': [{ id: 's1', name: 'Mathematics' }, { id: 's2', name: 'English' }],
  '2': [{ id: 's3', name: 'Science' }, { id: 's4', name: 'Art' }],
  '3': [{ id: 's5', name: 'Music' }, { id: 's6', name: 'Physical Education' }],
};


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500/75 transition-opacity bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-auto max-w-md">
        {title && <h5 className="text-lg font-semibold mb-4">{title}</h5>}
        {children}
        <button onClick={onClose} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Close
        </button>
      </div>
    </div>
  );
};

interface Subject {
  id: string;
  name: string;
}

const SubjectConfigcomp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>([]);
  const [modalTitle, setModalTitle] = useState('');

  const handleViewSubjects = (classId: string, className: string) => {
    const subjects = subjectData[classId] || [];
    setSelectedSubjects(subjects);
    setModalTitle(`Subjects for ${className}`);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSubjects([]);
    setModalTitle('');
  };

  const handleEditSubject = (subjectId: string) => {
    console.log(`Edit subject with ID: ${subjectId}`);
  };

  const handleDeleteSubject = (subjectId: string) => {
    console.log(`Delete subject with ID: ${subjectId}`);

    setSelectedSubjects(selectedSubjects.filter((subject) => subject.id !== subjectId));
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
                      index === 2
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
              <p className="font-medium text-sm">Subject Configuration</p>
              <span className="text-gray-700 text-xs">Manage your details and personal preferences</span>
            </div>
          </div>

          <div className='grid gap-4 w-full '>
                <div className='  w-1/2 py-2 px-3 bg-white rounded-lg shadow-md'> 
                    <Select 
                    onChange={(e) => console.log(e)}
                    options={[
                        { value: '1', label: 'Nursery' },
                        { value: '2', label: 'Primary' },
                    ]}
                    label=''
                    value=''
                    />
                </div>

            <div className="bg-white rounded-lg shadow overflow-x-auto">
                <div className='flex justify-between items-center p-4'>
                <p>Nursery</p>
                <Select
                options={
                    classData.map((classItem) => ({
                        value: classItem.id,
                        label: classItem.className,
                    }))
                }
               label=''
               value=''
               onChange={(e) => console.log(e)}
                />
                </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Head Teacher</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Classes</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subjects</th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {classData.map((classItem) => (
                    <tr key={classItem.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{classItem.headTeacher}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{classItem.className}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 hover:underline cursor-pointer">
                        <button onClick={() => handleViewSubjects(classItem.id, classItem.className)}>View</button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href="#" className="text-indigo-600 hover:text-indigo-900">
                          <Edit className="h-5 w-5 inline-block" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

           
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={modalTitle}>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject Name</th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {selectedSubjects.map((subject) => (
                      <tr key={subject.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{subject.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                          <button onClick={() => handleEditSubject(subject.id)} className="text-indigo-600 hover:text-indigo-900">
                            <Edit className="h-5 w-5 inline-block" />
                          </button>
                          <button onClick={() => handleDeleteSubject(subject.id)} className="text-red-600 hover:text-red-900">
                            <Trash2 className="h-5 w-5 inline-block" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {selectedSubjects.length === 0 && (
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center" colSpan={2}>
                          No subjects assigned to this class.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectConfigcomp;