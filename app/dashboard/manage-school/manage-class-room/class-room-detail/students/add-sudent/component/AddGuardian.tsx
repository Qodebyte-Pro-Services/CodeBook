"use client";
import Toast from '@/app/components/Toast';
import Input from '@/app/dashboard/teachers/add-teacher/compoenent/Input';
import UploadImage from '@/app/dashboard/teachers/add-teacher/compoenent/UploadInput';
import { Save } from 'lucide-react';
import React, { useState } from 'react';

interface ToastState {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

interface Guardian {
  firstName: string;
  lastName: string;
  dob: string;
  phone: string;
  guardianEmail: string;
  address: string;
  gender: string;
  profilePicture: File | null;
}

const AddGuardian = () => {
  const [guardians, setGuardians] = useState<Guardian[]>([]);
  const [toast, setToast] = useState<ToastState | null>(null);

  const handleInputChange = (index: number, field: string, value: string | File | null) => {
    const updatedGuardians = [...guardians];
    updatedGuardians[index] = { ...updatedGuardians[index], [field]: value };
    setGuardians(updatedGuardians);
  };

  const handleAddGuardian = () => {
    setGuardians([...guardians, {
      firstName: '',
      lastName: '',
      dob: '',
      phone: '',
      guardianEmail: '',
      address: '',
      gender: 'male',
      profilePicture: null,
    }]);
  };

  const handleSave = () => {
    console.log('Guardians Data:', guardians);
    setToast({
      message: 'Guardian information saved successfully!',
      type: 'success',
    });
  };

  const handleToastClose = () => {
    setToast(null);
  };

  return (
    <>
      <div className="lg:flex-row flex flex-col lg:gap-0 gap-3 bg-[#FFFFFF] rounded-md">
        <div className=" w-full lg:mb-0 mb-4 p-4 rounded-lg mr-4">
          <h2 className="text-lg font-semibold mb-4">Add Guardian Information</h2>

          {guardians.map((guardian, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-md font-semibold mb-2">Guardian {index + 1}</h3>
              <Input
                label="First Name"
                placeholder="Enter first name"
                type="text"
                name="firstName"
                value={guardian.firstName}
                onChange={(e) => handleInputChange(index, 'firstName', e.target.value)}
              />
              <Input
                label="Last Name"
                placeholder="Enter last name"
                type="text"
                name="lastName"
                value={guardian.lastName}
                onChange={(e) => handleInputChange(index, 'lastName', e.target.value)}
              />
              <Input
                label="Phone"
                placeholder="Enter contact number"
                type="tel"
                name="phone"
                value={guardian.phone}
                onChange={(e) => handleInputChange(index, 'phone', e.target.value)}
              />
               <Input
                label="Email Address"
                placeholder="email address"
                type="email"
                name="guardianEmail"
                value={guardian.guardianEmail}
                onChange={(e) => handleInputChange(index, 'guardianEmail', e.target.value)}
              />
              <Input
                label="Address"
                placeholder="Area and street"
                type="text"
                name="address"
                value={guardian.address}
                onChange={(e) => handleInputChange(index, 'address', e.target.value)}
              />
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`gender-${index}`}
                      value="male"
                      className="mr-2"
                      checked={guardian.gender === 'male'} 
                      onChange={(e) => handleInputChange(index, 'gender', e.target.value)}

                    />
                    <span>Male</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`gender-${index}`}
                      value="female"
                      className="mr-2"
                      checked={guardian.gender === 'female'} 
                      onChange={(e) => handleInputChange(index, 'gender', e.target.value)}
                    />
                    <span>Female</span>
                  </label>
                </div>
              </div>
              <UploadImage
                onChange={(file: string | File | null) => handleInputChange(index, 'profilePicture', file)}
              />
            </div>
          ))}

          <button
            onClick={handleAddGuardian}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Add Guardian
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md mt-4"
          >
            <Save className="text-blue-500" />
            <p className="text-[10px] md:text-md">Save</p>
          </button>
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

export default AddGuardian;