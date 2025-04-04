"use client";

import Toast from '@/app/components/Toast';
import Form from '@/app/Sign-up/components/Form';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation'; 

const SignInForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | 'warning' | 'info'>('warning');
  const router = useRouter(); 

  const fields = useMemo(
    () => [
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'password', label: 'Password', type: 'password', required: true },
    ],
    []
  );

  const defaultValues = useMemo(() => ({}), []);

  const handleSubmit = async (data: Record<string, unknown>) => {
  
    if (!data.email || !data.password) {
      setToastMessage('Please fill in all fields.');
      setToastType('error');
      setShowToast(true);
      return;
    }

    try {
      
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: 'Sign in successful!' });
        }, 1000);
      });

      console.log('API Response:', response);

   
      setToastMessage('Sign in successful! Redirecting to dashboard...');
      setToastType('success');
      setShowToast(true);

     
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
    } catch (error) {
      console.error('API Error:', error);

      setToastMessage('Failed to sign in. Please try again.');
      setToastType('error');
      setShowToast(true);
    }
  };

  return (
    <>
      <div className="flex w-full justify-center py-[1.5rem] bg-gradient-to-b from-[#DAF2FF] to-[#CEC9C3]">
        <div className="lg:w-[70%] lg:h-[854px] w-full h-auto flex lg:flex-row rounded-[20px] bg-white">
          <div className="lg:flex hidden lg:w-1/2 bg-[#DAF2FF] w-0 h-full rounded-bl-[20px] shadow-bl-2xl items-center justify-center overflow-hidden ">
            <div className="w-[500px] h-[450px] relative py-auto">
              <Image src="/image-5.png" alt="login" fill />
            </div>
          </div>
          <div className="lg:w-1/2 h-full w-full flex flex-col text-center px-2 py-[1rem] justify-center">
            <h1 className="text-gray-950 font-medium text-2xl">Sign in to your account</h1>
            <h4 className="text-gray-950 font-medium text-lg">
              {' '}
              Are you a new user?{' '}
              <span className="text-[#0A92DD]">
                <Link href="/Sign-up">Create an account</Link>
              </span>
            </h4>
            <Form fields={fields} defaultValues={defaultValues} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>

  
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default SignInForm;