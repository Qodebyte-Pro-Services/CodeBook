import React, { useMemo, useState } from 'react';
import Form from './Form';
import Image from 'next/image';
import FormStepsNavigation from './FormStepsNavigation';
import Toast from '@/app/components/Toast';
import axios from 'axios';
interface FormStep2Props {
  currentStep: number;
  onNext: () => void;
  formData: Record<string, unknown>;
  updateFormData: (data: Record<string, unknown>) => void;
  completedSteps: boolean[];
  setCompletedSteps: (steps: boolean[]) => void;
  onStepChange: (step: number) => void; 
}

const FormStep2: React.FC<FormStep2Props> = ({ currentStep, onNext, formData, updateFormData, completedSteps, setCompletedSteps,onStepChange }) => {
 
   const [showToast, setShowToast] = useState(false);
   const [toastMessage, setToastMessage] = useState('');
   const [toastType, setToastType] = useState<'success' | 'error' | 'warning' | 'info'>('warning');
 
  const fields = useMemo(() => [
    { name: 'confirmationCode', label: 'Confirmation Code', required: true, placeholder: 'Enter Confirmation Code' },
    
  ], []); 
 
   const defaultValues = useMemo(() => {
    return {
      confirmationCode: formData.confirmationCode || '',
    };
   }, [formData]);

   
   const handleSubmit = async (data: Record<string, unknown>) => {
    try {
      const response = await axios.post('https://sch-mgt-03yw.onrender.com/auth/verify-email/', {
        code: data.confirmationCode,
      });
  
      console.log('Verification Response:', response.data);
  
      setToastMessage('Verification successful! Proceed to the next step.');
      setToastType('success');
      setShowToast(true);
  
      updateFormData(data);
      const newCompletedSteps = [...completedSteps];
      newCompletedSteps[1] = true;
      setCompletedSteps(newCompletedSteps);
      onNext();
    } catch (error) {
      console.error('Verification Error:', error);
      setToastMessage('Verification failed. Please try again.');
      setToastType('error');
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
     <div className='flex w-full  justify-center py-[1.5rem]'>
          <div className='lg:w-[70%] xl:h-[854px] w-full h-auto  flex lg:flex-row  rounded-[20px] bg-white'>
          <div className='lg:flex hidden lg:w-1/2 bg-[#DAF2FF] w-0 h-full rounded-bl-[20px] shadow-bl-2xl  items-center justify-center overflow-hidden '>
            <div className='w-[500px] h-[450px]  relative py-auto'>
            <Image src='/Two-factor-authentication-rafiki 1.png' alt='login' fill />
            </div>
          </div>
            <div className='lg:w-1/2 h-full w-full flex flex-col text-center px-2 py-[1rem] justify-center'>
                <div className='flex flex-col  justify-center gap-4'>
                <h1 className='text-gray-950 font-medium  md:text-2xl text-xl'>Input Confirmation Code </h1>

      <h4 className='text-gray-950 font-medium  md:text-lg text-md mb-4'>a confirmation code has been sent to your email</h4>
      <FormStepsNavigation
            currentStep={currentStep}
            onStepClick={handleStepClick}
            stepLabels={['Enter your email address', 'Input confirmation code', 'Setup account', 'Upload verification id']}
            validateStep={validateStep}
            completedSteps={completedSteps}
          />
      <Form fields={fields} defaultValues={defaultValues} onSubmit={handleSubmit} />

      <p className='text-center mt-3 text-md  text-blue-400'>Resend Code</p>
              </div>
            </div>
          </div>
        </div>
        {showToast && <Toast message={toastMessage} type={toastType} onClose={() => setShowToast(false)} />}
    </>
  );
};

export default FormStep2;