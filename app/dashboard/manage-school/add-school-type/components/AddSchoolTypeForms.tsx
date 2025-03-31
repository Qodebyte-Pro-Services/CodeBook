"use client";

import React, { useState } from 'react';
import Toast from '@/app/components/Toast';
import Input from '@/app/dashboard/teachers/add-teacher/compoenent/Input';
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select';
import { ChevronsLeft, Save } from 'lucide-react';
import Link from 'next/link';

interface ToastState {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

const AddSchoolTypeForms = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    schoolType: '', 
    schoolAddress: '',
    schoolCity: '',
    schoolState: '',
    schoolDescription: '',
    schoolPhone: '',
  });

  const [toast, setToast] = useState<ToastState | null>(null);

  const handleInputChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToastClose = () => {
    setToast(null);
  };



  const handleSave = () => {
    console.log('Form Data:', formData);
    setToast({
      message: 'School type saved successfully!',
      type: 'success',
    });
  };

  return (
    <>
      <div className="w-full bg-[#FFFFFF] mb-3 h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll">
        <div className="flex gap-2 md:w-1/2 w-full items-center justify-start md:text-md text-[12px]">
          <ChevronsLeft />
          <Link href="/dashboard/manage-school" className='cursor-pointer'>School Types</Link>
          <ChevronsLeft className="text-gray-400 w-[20px]" />
          <p>Create School Type</p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md"
        >
          <Save className="text-blue-500" />
          <p className="text-[10px] md:text-md">Save</p>
        </button>
      </div>

      <div className="lg:flex-row flex flex-col lg:gap-0 gap-3 bg-[#FFFFFF] rounded-md">
        <div className="lg:w-1/2 w-full lg:mb-0 mb-4 p-4 rounded-lg mr-4">
          <h2 className="text-lg font-semibold mb-4">School Information</h2>

          <Input
            label="School Name"
            placeholder="Enter school name"
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleInputChange}
          />

          <Select
            label="School Type"
            options={[
              { label: 'Select Type', value: '' },
              { label: 'Nursery', value: 'nursery' },
              { label: 'Primary', value: 'primary' },
              { label: 'Secondary', value: 'secondary' },
            ]}
            name="schoolType"
            value={formData.schoolType}
            onChange={handleInputChange}
          />

          <Input
            label="School Address"
            placeholder="Enter school address"
            type="text"
            name="schoolAddress"
            value={formData.schoolAddress}
            onChange={handleInputChange}
          />

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <Select
                label="State"
                options={[
                  { label: 'Select State', value: '' },
                  { label: 'State 1', value: 'state1' },
                  { label: 'State 2', value: 'state2' },
                ]}
                name="schoolState"
                value={formData.schoolState}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-1/2">
              <Select
                label="City"
                options={[
                  { label: 'Select City', value: '' },
                  { label: 'City 1', value: 'city1' },
                  { label: 'City 2', value: 'city2' },
                ]}
                name="schoolCity"
                value={formData.schoolCity}
                onChange={handleInputChange}
              />
            </div>
          </div>
    
          <Input
            label="School Phone"
            placeholder="Enter school phone number"
            type="tel"
            name="schoolPhone"
            value={formData.schoolPhone}
            onChange={handleInputChange}
          />

          <Input
            label="School Description"
            placeholder="Enter school description"
            type="text"
            name="schoolDescription"
            value={formData.schoolDescription}
            onChange={handleInputChange}
          />
        </div>

      
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleToastClose}
        />
      )}
    </>
  );
};

export default AddSchoolTypeForms;