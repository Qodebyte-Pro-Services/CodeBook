"use client"

import Toast from '@/app/components/Toast';
import Input from '@/app/dashboard/teachers/add-teacher/compoenent/Input';
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select';
import React, { useState } from 'react';


interface AddClassModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { schooltype: string; className:string; classRoomName: string; formTeacher: string }) => void;
}

const AddClassModal: React.FC<AddClassModalProps> = ({ isOpen, onClose, onSave }) => {
  const [schooltype, setSchoolType] = useState('');
  const [classRoomName, setClassRoomName] = useState('');
  const [className, setClassName] = useState('');
  const [formTeacher, setFormTeacher] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error' | 'warning' | 'info'>('success');

  const handleSave = () => {
    if (!schooltype || !className || !classRoomName || !formTeacher) {
      setToastMessage('Please fill in all fields.');
      setToastType('error');
      return;
    }

    onSave({ schooltype, className, classRoomName, formTeacher });
    setToastMessage('Class Room added successfully!');
    setToastType('success');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 bg-gray-500/75 transition-opacity flex justify-center md:px-0 px-2 items-center">
      <div className="bg-white p-6 rounded-lg xl:w-1/3 md:w-1/2 w-full  ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add Class Room</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <Select
          label="School Type"
          options={[
            { value: 'nursery', label: 'Nursery' },
            { value: 'primary', label: 'Primary' },
            { value: 'secondary', label: 'Secondary' },
          ]}
          value={schooltype}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSchoolType(e.target.value)}
        />
        <Select
          label="Class Name"
          options={[
            { value: 'primary1', label: 'Primary 1' },
            { value: 'primary3', label: 'Primary 2' },
            { value: 'primary4', label: 'Primary 3' },
          ]}
          value={className}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setClassName(e.target.value)}
        />
        <Input
          label="Class Room Name"
          placeholder="Nursery 1A"
          type="text"
          value={classRoomName}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setClassRoomName(e.target.value)}
        />
        <Select
          label="Form Teacher"
          options={[
            { value: 'mr-qodebyte', label: 'Mr. Qodebyte' },
            { value: 'mrs-tochukwu', label: 'Mrs. Tochukwu' },
          ]}
          value={formTeacher}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setFormTeacher(e.target.value)}
        />

        <button
          onClick={handleSave}
          className="w-full bg-blue-500 text-white rounded-md py-2 mt-4 hover:bg-blue-600"
        >
          Save
        </button>

        {toastMessage && (
          <Toast message={toastMessage} type={toastType} onClose={() => setToastMessage(null)} />
        )}
      </div>
    </div>
  );
};

export default AddClassModal;