"use client";

import Toast from '@/app/components/Toast';
import Input from '@/app/dashboard/teachers/add-teacher/compoenent/Input';
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select';
import React, { useState } from 'react';

interface AddClassModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { 
    schooltype: string; 
    className: string; 
    headTeacher?: string; 
    multipleClassRoom: string;
  }) => void;
}

const AddClassModal: React.FC<AddClassModalProps> = ({ isOpen, onClose, onSave }) => {
  const [schooltype, setSchoolType] = useState('');
  const [className, setClassName] = useState('');
  const [headTeacher, setHeadTeacher] = useState('');
  const [multipleClassRoom, setMultipleClassRoom] = useState('no');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error' | 'warning' | 'info'>('success');

  const handleSave = () => {
    console.log('schooltype:', schooltype);
  console.log('className:', className);
  console.log('multipleClassRoom:', multipleClassRoom);
  console.log('headTeacher:', headTeacher);
    
  if (!schooltype || !className || (multipleClassRoom === 'no' && !headTeacher)) {
    setToastMessage('Please fill in all required fields.');
    setToastType('error');
    return;
  }

  const data = {
    schooltype,
    className,
    multipleClassRoom,
    ...(multipleClassRoom === 'no' && { headTeacher }),
  };

  onSave(data);
  setToastMessage('Class added successfully!');
  setToastType('success');
  onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 bg-gray-500/75 transition-opacity flex justify-center md:px-0 px-2 items-center">
      <div className="bg-white p-6 rounded-lg xl:w-1/3 md:w-1/2 w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add Class</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Do you wish to add Multiple Class Rooms?
          </label>
          <div className="flex gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="multipleClasses"
                value="yes"
                checked={multipleClassRoom === 'yes'}
                onChange={() => setMultipleClassRoom('yes')}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="multipleClasses"
                value="no"
                checked={multipleClassRoom === 'no'}
                onChange={() => setMultipleClassRoom('no')}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        <Select
          label="School Type"
          options={[
            { value: '#', label: 'Select School Type' },
            { value: 'nursery', label: 'Nursery' },
            { value: 'primary', label: 'Primary' },
            { value: 'secondary', label: 'Secondary' },
          ]}
          value={schooltype}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setSchoolType(e.target.value)}
        />
        
        <Input
          label="Class Name"
          placeholder="Nursery 1"
          type="text"
          value={className}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setClassName(e.target.value)}
        />

        {multipleClassRoom === 'no' && (
          <Select
            label="Head Teacher"
            options={[
              { value: '#', label: 'Select Form Teacher' },
              { value: 'mr-qodebyte', label: 'Mr. Qodebyte' },
              { value: 'mrs-tochukwu', label: 'Mrs. Tochukwu' },
            ]}
            value={headTeacher}
            onChange={(e: { target: { value: React.SetStateAction<string> } }) => setHeadTeacher(e.target.value)}
          />
        )}

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