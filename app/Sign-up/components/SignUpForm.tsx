

"use client";

import React, { useEffect, useState } from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import FormStep4 from './FormStep4';
import SuccessPage from './SuccessPage';
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper';
import Loading from '@/app/components/Loading';
import Toast from '@/app/components/Toast'; 

const SignUpForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [completedSteps, setCompletedSteps] = useState([false, false, false, false]);


  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
  } | null>(null);

 
  useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const newCompletedSteps = [...completedSteps];
      newCompletedSteps[currentStep - 1] = true;
      setCompletedSteps(newCompletedSteps);
      setCurrentStep(currentStep + 1);
    }, 1000);
  };

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  const updateFormData = (stepData: Record<string, unknown>) => {
    setFormData(prev => ({ ...prev, ...stepData }));
  };

  const clearStorage = () => {
    localStorage.removeItem('formData');
  };

  const handleFinalSubmit = async () => {
    try {
      setIsLoading(true);

      
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: 'Form submitted successfully!' });
        }, 1000);
      });

      console.log('API Response:', response);


      setToast({ message: 'Form submitted successfully!', type: 'success' });

      clearStorage();
      setCurrentStep(5);
    } catch (error) {
      console.error('API Error:', error);

     
      setToast({ message: 'Failed to submit form. Please try again.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <FormStep1
            currentStep={currentStep}
            onNext={handleNext}
            formData={formData}
            updateFormData={updateFormData}
            completedSteps={completedSteps}
            setCompletedSteps={setCompletedSteps}
            onStepChange={handleStepChange}
          />
        );
      case 2:
        return (
          <FormStep2
            currentStep={currentStep}
            onNext={handleNext}
            formData={formData}
            updateFormData={updateFormData}
            completedSteps={completedSteps}
            setCompletedSteps={setCompletedSteps}
            onStepChange={handleStepChange}
          />
        );
      case 3:
        return (
          <FormStep3
            currentStep={currentStep}
            onNext={handleNext}
            formData={formData}
            updateFormData={updateFormData}
            completedSteps={completedSteps}
            setCompletedSteps={setCompletedSteps}
            onStepChange={handleStepChange}
          />
        );
      case 4:
        return (
          <FormStep4
            currentStep={currentStep}
            onNext={handleFinalSubmit}
            formData={formData}
            updateFormData={updateFormData}
            completedSteps={completedSteps}
            setCompletedSteps={setCompletedSteps}
            onStepChange={handleStepChange}
          />
        );
      case 5:
        return <SuccessPage />;
      default:
        return null;
    }
  };

  return (
    <>
      <MaxWidthWrapper>
        {isLoading ? <Loading /> : renderFormStep()}
      </MaxWidthWrapper>

      
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default SignUpForm;