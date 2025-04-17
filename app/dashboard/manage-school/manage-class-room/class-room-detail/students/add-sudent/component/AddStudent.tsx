"use client";
import Toast from '@/app/components/Toast';
import Input from '@/app/dashboard/teachers/add-teacher/compoenent/Input';

import { ChevronsLeft, Save } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import UploadImage from '@/app/dashboard/teachers/add-teacher/compoenent/UploadInput';

interface ToastState {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

interface Parent {
  firstName: string;
  lastName: string;
  dob: string;
  phone: string;
  parentEmail : string;
  address: string;
  parentGender: string;
  state: string;
  city: string;
  profilePicture: File | null;
}

const AddStudent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    address: '',
    studentGender: 'male',
    state: '',
    city: '',
    profilePicture: null as File | null,
  });

  const [parents, setParents] = useState<Parent[]>([]);
  const [toast, setToast] = useState<ToastState | null>(null);

  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (file: File | null) => {
    setFormData({ ...formData, profilePicture: file });
  };

  const handleAddParent = () => {
    setParents([...parents, {
      firstName: '',
      lastName: '',
      dob: '',
      phone: '',
      parentEmail: '',
      address: '',
      parentGender: 'male',
      state: '',
      city: '',
      profilePicture: null,
    }]);
  };

  const handleParentChange = (index: number, field: string, value: string | File | null) => {
    const updatedParents = [...parents];
    updatedParents[index] = { ...updatedParents[index], [field]: value };
    setParents(updatedParents);
  };

  const handleSave = () => {
    console.log('Form Data:', { ...formData, parents });
    setToast({
      message: 'Form saved successfully!',
      type: 'success',
    });
  };

  const handleToastClose = () => {
    setToast(null);
  };

  return (
    <>
      <div className="w-full bg-[#FFFFFF] mb-3 h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll">
        <div className="flex gap-2 md:w-1/2 w-full items-center justify-start md:text-md text-[12px]">
          <ChevronsLeft />
          <Link href="/dashboard/manage-school/manage-class-room/class-room-detail/students" className='cursor-pointer'>Class Room Detail</Link>
          <ChevronsLeft className="text-gray-400 w-[20px]" />
          <p>Student</p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md"
        >
          <Save className="text-blue-500" />
          <p className="text-[10px] md:text-md">Save</p>
        </button>
      </div>

      <div className="lg:flex-row flex flex-col lg:gap-0 gap-3 mb-3 bg-[#FFFFFF] rounded-md">
        <div className="lg:w-1/2 w-full lg:mb-0 mb-4 p-4 rounded-lg mr-4">
          <h2 className="text-lg font-semibold mb-4">Basic Information</h2>

          <Input
            label="First Name"
            placeholder="Enter first name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <Input
            label="Last Name"
            placeholder="Enter last name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <Input
            label="Date of Birth"
            placeholder="dd/mm/yyyy"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />

      <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="studentGender"
                        value="male"
                        className="mr-2"
                        checked={formData.studentGender === 'male'}
                        onChange={handleInputChange}
                      />
                      <span>Male</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="studentGender"
                        value="female"
                        className="mr-2"
                        checked={formData.studentGender === 'female'}
                        onChange={handleInputChange}
                      />
                      <span>Female</span>
                    </label>
                  </div>
      </div>

          <h2 className="text-lg font-semibold mb-4 mt-8">Parent Information</h2>

          {parents.map((parent, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-md font-semibold mb-2">Parent {index + 1}</h3>
              <Input
                label="First Name"
                placeholder="Enter first name"
                type="text"
                name="firstName"
                value={parent.firstName}
                onChange={(e) => handleParentChange(index, 'firstName', e.target.value)}
              />
              <Input
                label="Last Name"
                placeholder="Enter last name"
                type="text"
                name="lastName"
                value={parent.lastName}
                onChange={(e) => handleParentChange(index, 'lastName', e.target.value)}
              />
              <Input
                label="Phone"
                placeholder="Enter contact number"
                type="tel"
                name="phone"
                value={parent.phone}
                onChange={(e) => handleParentChange(index, 'phone', e.target.value)}
              />
               <Input
                label="Email Address"
                placeholder="email address"
                type="email"
                name="parentEmail"
                value={parent.parentEmail}
                onChange={(e) => handleParentChange(index, 'address', e.target.value)}
              />
              <Input
                label="Address"
                placeholder="Area and street"
                type="text"
                name="address"
                value={parent.address}
                onChange={(e) => handleParentChange(index, 'address', e.target.value)}
              />
               <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name={`parentGender-${index}`}
                  value="male"
                  className="mr-2"
                  checked={parent.parentGender === 'male'}
                  onChange={(e) => handleParentChange(index, 'parentGender', e.target.value)}
                />
                <span>Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name={`parentGender-${index}`}
                  value="female"
                  className="mr-2"
                  checked={parent.parentGender === 'female'}
                  onChange={(e) => handleParentChange(index, 'parentGender', e.target.value)}
                />
                <span>Female</span>
              </label>
            </div>
          </div>
              <UploadImage
                onChange={(file: string | File | null) => handleParentChange(index, 'profilePicture', file)}
              />
            </div>
          ))}

          <button
            onClick={handleAddParent}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Add Parent
          </button>
        </div>

        <div className="lg:w-1/2 w-full p-4 rounded-lg">
          <UploadImage onChange={handleFileChange} />
        
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

export default AddStudent;