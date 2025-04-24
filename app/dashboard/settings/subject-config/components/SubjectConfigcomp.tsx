"use client";
import Toast from '@/app/components/Toast';
import DashboardHeader from '@/app/dashboard/components/DashboardHeader';
import Input from '@/app/dashboard/teachers/add-teacher/compoenent/Input';
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select';
import TextAreaInput from '@/app/dashboard/teachers/add-teacher/compoenent/TextAreaInput';

import { ChevronsLeft, Edit, PlusCircle, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';


interface ToastState {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}


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
        <div className="fixed inset-0 bg-gray-500/75 transition-opacity bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 max-w-md">
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
    const [isAddClassroomModalOpen, setIsAddClassroomModalOpen] = useState(false);
    const [isAddSubjectModalOpen, setIsAddSubjectModalOpen] = useState(false);
    const [newClassroomData, setNewClassroomData] = useState({
        headTeacher: '',
        schoolType: 'nursery',
        className: '',
        hasMultipleClasses: 'no',
        numberOfClasses: '',
    });
    const [toast, setToast] = useState<ToastState | null>(null);
    const [newSubjectData, setNewSubjectData] = useState({
        schoolType: 'nursery',
        subjectName: '',
        description: '',
        learningObjectives: '',
        assessmentCriteria: '',
    });
    const [classes, setClasses] = useState(classData); 
    const [subjects, setSubjects] = useState(subjectData); 

    const teacherOptions = [ 
        { value: 'Mr. Qodebyte Ogunmekpon', label: 'Mr. Qodebyte Ogunmekpon' },
        { value: 'Mrs. Jane Doe', label: 'Mrs. Jane Doe' },
        { value: 'Mr. John Smith', label: 'Mr. John Smith' },
    ];

    const schoolTypeOptions = [
        { value: 'nursery', label: 'Nursery' },
        { value: 'primary', label: 'Primary' },
    ];

    const numberOfClassesOptions = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
    ];

    const handleViewSubjects = (classId: string, className: string) => {
        const subjectsForClass = subjects[classId] || [];
        setSelectedSubjects(subjectsForClass);
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
        setSelectedSubjects(prev => prev.filter(subject => subject.id !== subjectId));
    };

    
    const openAddClassroomModal = () => {
        setIsAddClassroomModalOpen(true);
    };

    const closeAddClassroomModal = () => {
        setIsAddClassroomModalOpen(false);
        setNewClassroomData({
            headTeacher: '',
            schoolType: 'nursery',
            className: '',
            hasMultipleClasses: 'no',
            numberOfClasses: '',
        });
    };

    const handleClassroomInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewClassroomData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddClassroom = () => {
      
        if (!newClassroomData.className || !newClassroomData.headTeacher) {
          setToast({message:'Please fill in all required classroom fields.', type:'error'});
            return; 
        }

        if (newClassroomData.hasMultipleClasses === 'yes' && !newClassroomData.numberOfClasses) {
          setToast({message:'Please select the number of classes.', type:'error'});
            return;
        }

        const newClasses: { id: string, headTeacher: string, className: string }[] = [];

        if (newClassroomData.hasMultipleClasses === 'yes') {
            for (let i = 1; i <= parseInt(newClassroomData.numberOfClasses); i++) {
                const className = `${newClassroomData.className}${String.fromCharCode(64 + i)}`; 
                newClasses.push({
                    id: Date.now().toString() + i, 
                    headTeacher: newClassroomData.headTeacher,
                    className: className,
                });
            }
        } else {
            newClasses.push({
                id: Date.now().toString(),
                headTeacher: newClassroomData.headTeacher,
                className: newClassroomData.className,
            });
        }

        setClasses(prevClasses => [...prevClasses, ...newClasses]);
        closeAddClassroomModal();
    };

    
    const openAddSubjectModal = () => {
        setIsAddSubjectModalOpen(true);
        setNewSubjectData({
            schoolType: 'nursery',
            subjectName: '',
            description: '',
            learningObjectives: '',
            assessmentCriteria: '',
        });
    };

    const closeAddSubjectModal = () => {
        setIsAddSubjectModalOpen(false);
    };

    const handleSubjectInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewSubjectData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddSubject = () => {
        
        if (!newSubjectData.subjectName) {
          setToast({message:'Please enter a subject name.', type:'error'});
            return; 
        }

        const newSubject: Subject = {
            id: Date.now().toString(),
            name: newSubjectData.subjectName,
        };

        
        if (subjects['1']) {
            setSubjects(prev => ({
                ...prev,
                '1': [...prev['1'], newSubject],
            }));
        } else {
            setSubjects(prev => ({
                ...prev,
                '1': [newSubject]
            }))
        }

        closeAddSubjectModal();
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
                        <div className=' w-1/2 py-2 px-3 bg-white rounded-lg shadow-md'>
                            <Select
                                onChange={(e: unknown) => console.log(e)}
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
                                <button onClick={openAddClassroomModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    <PlusCircle className="h-4 w-4 mr-2 inline-block" /> Add New Classroom
                                </button>

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
                                    {classes.map((classItem) => (
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
                                <div className='flex justify-end mb-2'>
                                    <button onClick={openAddSubjectModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        <PlusCircle className="h-4 w-4 mr-2 inline-block" /> Add New Subject
                                    </button>
                                </div>
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

           
            <Modal isOpen={isAddClassroomModalOpen} onClose={closeAddClassroomModal} title="Add New Classroom">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleAddClassroom();
                }} className="flex flex-col gap-4">
                    <Select
                        label="Head Teacher"
                        options={teacherOptions}
                        value={newClassroomData.headTeacher}
                        onChange={handleClassroomInputChange}
                        name="headTeacher"
                        required
                    />
                    <Select
                        label="School Type"
                        options={schoolTypeOptions}
                        value={newClassroomData.schoolType}
                        onChange={handleClassroomInputChange}
                        name="schoolType"
                        required
                    />
                    <Input
                        label="Classroom Name"
                        placeholder="e.g., Nursery 1, Primary 6"
                        type="text"
                        name="className"
                        value={newClassroomData.className}
                        onChange={handleClassroomInputChange}
                        required
                    />
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Multiple Classrooms?</label>
                        <div className="flex gap-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio h-5 w-5 text-blue-600"
                                    name="hasMultipleClasses"
                                    value="no"
                                    checked={newClassroomData.hasMultipleClasses === 'no'}
                                    onChange={handleClassroomInputChange}
                                />
                                <span className="ml-2">No</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio h-5 w-5 text-blue-600"
                                    name="hasMultipleClasses"
                                    value="yes"
                                    checked={newClassroomData.hasMultipleClasses === 'yes'}
                                    onChange={handleClassroomInputChange}
                                />
                                <span className="ml-2">Yes</span>
                            </label>
                        </div>
                    </div>

                    {newClassroomData.hasMultipleClasses === 'yes' && (
                        <Select
                            label="Number of Classes"
                            options={numberOfClassesOptions}
                            value={newClassroomData.numberOfClasses}
                            onChange={handleClassroomInputChange}
                            name="numberOfClasses"
                            required
                        />
                    )}

                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={closeAddClassroomModal}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"  
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                        >
                            Add Classroom
                        </button>
                    </div>
                </form>
            </Modal>

           
            <Modal isOpen={isAddSubjectModalOpen} onClose={closeAddSubjectModal} title="Add New Subject">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleAddSubject();
                }} className="flex flex-col gap-4">
                    <Select
                        label="School Type"
                        options={schoolTypeOptions}
                        value={newSubjectData.schoolType}
                        onChange={handleSubjectInputChange}
                        name="schoolType"
                        required
                    />
                    <Input
                        label="Subject Name"
                        placeholder="e.g., Mathematics"
                        type="text"
                        name="subjectName"
                        value={newSubjectData.subjectName}
                        onChange={handleSubjectInputChange}
                        required
                    />
                    <TextAreaInput
                        label="Description"
                        placeholder="Enter subject description"
                        value={newSubjectData.description}
                        onChange={handleSubjectInputChange}
                        name="description"
                    />
                    <TextAreaInput
                        label="Learning Objectives"
                        placeholder="Enter learning objectives"
                        value={newSubjectData.learningObjectives}
                        onChange={handleSubjectInputChange}
                        name="learningObjectives"
                    />
                    <TextAreaInput
                        label="Assessment Criteria"
                        placeholder="Enter assessment criteria"
                        value={newSubjectData.assessmentCriteria}
                        onChange={handleSubjectInputChange}
                        name="assessmentCriteria"
                    />
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={closeAddSubjectModal}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                        >
                            Add Subject
                        </button>
                    </div>
                </form>
            </Modal>
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

export default SubjectConfigcomp;
