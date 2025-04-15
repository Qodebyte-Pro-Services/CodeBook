import React, { useMemo, useState } from 'react';
import Form from './Form';
import Image from 'next/image';
import FormStepsNavigation from './FormStepsNavigation';
import Toast from '@/app/components/Toast';
import axios from 'axios';


interface FormStep3Props {
  currentStep: number;
  onNext: () => void;
  formData: Record<string, unknown>;
  updateFormData: (data: Record<string, unknown>) => void;
  completedSteps: boolean[];
  setCompletedSteps: (steps: boolean[]) => void;
  onStepChange: (step: number) => void;
}

const FormStep3: React.FC<FormStep3Props> = ({ currentStep, onNext, formData, updateFormData, completedSteps, setCompletedSteps, onStepChange }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | 'warning' | 'info'>('warning');

  const fields = useMemo(() => [
    { name: 'schoolName', label: 'School Name', type: 'text', required: true , placeholder: 'Enter School Name'},
    { 
      name: 'schoolType', 
      label: 'School Type', 
      type: 'select', 
      required: true,
      options: [ 
        { value: 'nursery', label: 'Nursery School' },
        { value: 'primary', label: 'Primary School' },
        { value: 'combined', label: 'Combined (Primary & Nursery)' }
      ]
    },
    { 
      name: 'schoolDescription', 
      label: 'School Description', 
      type: 'textarea', 
      required: true,
      placeholder: 'eg”(Little stars academy is a nursery and primary school that focuses on nurturing young learners through creativity and play-based education.)”'
    },
    { name: 'schoolAddress', label: 'School  Address', type: 'text', required: true, placeholder: 'Enter Your School Address' },
  ], []);

  const defaultValues = useMemo(() => {
    return {
      schoolName: formData.schoolName || '',
      schoolType: formData.schoolType || '',
      schoolDescription: formData.schoolDescription || '',
      schoolAddress: formData.schoolAddress || '',
    };
  }, [formData]);

  const handleSubmit = async (data: Record<string, unknown>) => {
    try {
    
      const authToken = sessionStorage.getItem('authToken');
  
      const response = await axios.post(
        'https://sch-mgt-03yw.onrender.com/school/main-school/',
        {
          name_of_school: data.schoolName,
          school_email: formData.email, 
          school_description: data.schoolDescription,
          school_address: data.schoolAddress,
          school_types: data.schoolType,
          user: '',
        },
        {
          headers: {
            Authorization: `Token ${authToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log('School Setup Response:', response.data);
  
      setToastMessage('School setup successful! Proceed to the next step.');
      setToastType('success');
      setShowToast(true);
  
      updateFormData(data);
      const newCompletedSteps = [...completedSteps];
      newCompletedSteps[2] = true;
      setCompletedSteps(newCompletedSteps);
      onNext();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        console.warn("School already exists:", error.response.data);
  
        setToastMessage("School had already been created. Proceeding to the dashboard.");
        setToastType("success");
        setShowToast(true);
  
        updateFormData(data);
        const newCompletedSteps = [...completedSteps];
        newCompletedSteps[2] = true;
        setCompletedSteps(newCompletedSteps);
        onNext();
      } else {
        console.error("School Setup Error:", error);
        setToastMessage("School setup failed. Please try again.");
        setToastType("error");
        setShowToast(true);
      }
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
        <div className='lg:w-[70%]  w-full h-auto  flex lg:flex-row  rounded-[20px] bg-white'>
          <div className='lg:flex hidden lg:w-1/2 bg-[#DAF2FF] w-0 h-full rounded-bl-[20px] shadow-bl-2xl  items-center justify-center overflow-hidden '>
            <div className='w-[500px] h-[450px]  relative py-auto'>
              <Image src='/High-School-bro-1.png' alt='login' fill />
            </div>
          </div>
          <div className='lg:w-1/2 h-full w-full flex flex-col text-center px-2 py-[1rem] justify-center'>
            <div className='flex flex-col  justify-center gap-4'>
              <h1 className='text-gray-950 font-medium  md:text-2xl text-xl'>Set up your account </h1>
              <h4 className='text-gray-950 font-medium  md:text-lg text-md mb-4'>Provide the details needed to run your School</h4>
              <FormStepsNavigation
                currentStep={currentStep}
                onStepClick={handleStepClick}
                stepLabels={['Enter your email address', 'Input confirmation code', 'Setup account', 'Upload verification id']}
                validateStep={validateStep}
                completedSteps={completedSteps}
              />
              <Form
                fields={fields} defaultValues={defaultValues} onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
      {showToast && <Toast message={toastMessage} type={toastType} onClose={() => setShowToast(false)} />}
    </>
  );
};

export default FormStep3;