"use client";

import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import Form from './Form';
import Image from 'next/image';
import FormStepsNavigation from './FormStepsNavigation';
import Toast from '@/app/components/Toast';
import axios from 'axios';

interface FormStep1Props {
  currentStep: number;
  onNext: () => void;
  formData: Record<string, unknown>;
  updateFormData: (data: Record<string, unknown>) => void;
  completedSteps: boolean[];
  setCompletedSteps: (steps: boolean[]) => void;
  onStepChange: (step: number) => void; 
}

const FormStep1: React.FC<FormStep1Props> = ({ currentStep, onNext, formData, updateFormData, completedSteps, setCompletedSteps,onStepChange }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | 'warning' | 'info'>('warning');

  const fields = useMemo(
    () => [
      { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'Enter Your Email' },
      { name: 'ownerName', label: 'Owner Name', type: 'text', required: true , placeholder: 'Enter Owner Name'},
      { name: 'password', label: 'Password', type: 'password', required: true , placeholder: 'Enter Your Password 8 charcter password'},
      { name: 'confirmPassword', label: 'Confirm Password', type: 'password', required: true , placeholder: 'Confirm Your Password'},
    ],
    []
  );

  const defaultValues = useMemo(() => {
    return {
      email: formData.email || '',
      ownerName: formData.ownerName || '',
      password: formData.password || '',
      confirmPassword: formData.confirmPassword || '',
    };
  }, [formData]);

  const handleSubmit = async (data: Record<string, unknown>) => {
    const password = data.password as string;
    const confirmPassword = data.confirmPassword as string;
    const email = data.email as string;
  
    if (!password || typeof password !== "string") {
      setToastMessage("Password is required and must be a string.");
      setToastType("error");
      setShowToast(true);
      return;
    }
  
    if (password.length < 8) {
      setToastMessage("Password must be at least 8 characters long.");
      setToastType("error");
      setShowToast(true);
      return;
    }

    if (password === email) {
      setToastMessage("Password cannot be the same as your email.");
      setToastType("error");
      setShowToast(true);
      return;
    }
  
    if (password !== confirmPassword) {
      setToastMessage("Passwords do not match.");
      setToastType("error");
      setShowToast(true);
      return;
    }
  
    try {
      const response = await axios.post("https://sch-mgt-03yw.onrender.com/auth/register", {
        email: data.email,
        password1: password,
        password2: confirmPassword,
        full_name: data.ownerName,
      });
  
      console.log("Registration Response:", response.data);
  
      if (response.data.key) {
        sessionStorage.setItem("authToken", response.data.key);
      }
  
      setToastMessage("Registration successful! Proceed to the next step.");
      setToastType("success");
      setShowToast(true);
  
      updateFormData(data);
      const newCompletedSteps = [...completedSteps];
      newCompletedSteps[0] = true;
      setCompletedSteps(newCompletedSteps);
      onNext();
    } catch (error) {
      console.error("Registration Error:", error);
      setToastMessage("Registration failed. Please try again.");
      setToastType("error");
      setShowToast(true);
    }
  };

  const handleStepClick = (step: number) => {
    if (validateStep(step)) {
      onStepChange(step);
    } else {
      setToastMessage('Please fill the current form.');
      setToastType('warning');
      setShowToast(true);
    }
  };

  const validateStep = (step: number) => {
    if (step > currentStep) {
      if (Object.keys(formData).length === 0) {
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <div className="flex w-full justify-center py-[1.5rem]">
        <div className="lg:w-[70%] xl:h-[854px] w-full h-auto flex lg:flex-row rounded-[20px] bg-white">
          <div className="lg:flex hidden lg:w-1/2 bg-[#DAF2FF] w-0 h-full rounded-bl-[20px] shadow-bl-2xl items-center justify-center overflow-hidden ">
            <div className="w-[500px] h-[450px] relative py-auto">
              <Image src="/image-6.png" alt="login" fill />
            </div>
          </div>
          <div className="lg:w-1/2 h-full w-full flex flex-col text-center px-2 py-[1rem]    justify-center ">
            <div className='flex flex-col  justify-center gap-4'>
              <h1 className="text-gray-950 font-medium md:text-2xl text-xl">Create an Account </h1>
              <h4 className="text-gray-950 font-medium md:text-lg text-md mb-4">
                Already onboard?{' '}
                <span className="text-[#0A92DD]">
                  <Link href="/Sign-in">Sign in to your account</Link>
                </span>
              </h4>
              <FormStepsNavigation
                currentStep={currentStep}
                onStepClick={handleStepClick}
                stepLabels={['Enter your email address', 'Input confirmation code', 'Setup account', 'Upload verification id']}
                validateStep={validateStep}
                completedSteps={completedSteps}
              />
              <Form fields={fields} defaultValues={defaultValues} onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      {showToast && <Toast message={toastMessage} type={toastType} onClose={() => setShowToast(false)} />}
    </>
  );
};

export default FormStep1;