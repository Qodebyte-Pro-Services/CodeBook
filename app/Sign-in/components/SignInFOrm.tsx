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
      setToastMessage("Please fill in all fields.");
      setToastType("error");
      setShowToast(true);
      return;
    }
  
    try {
      
      const loginResponse = await fetch("https://sch-mgt-03yw.onrender.com/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
  
      if (!loginResponse.ok) {
        throw new Error("Invalid login credentials.");
      }
  
      const loginData = await loginResponse.json();
      const authToken = loginData.key;
  
      
      sessionStorage.setItem("authToken", authToken);
  
     
      const userResponse = await fetch("https://sch-mgt-03yw.onrender.com/auth/user/", {
        method: "GET",
        headers: {
          Authorization: `Token ${authToken}`,
          "Content-Type": "application/json",
        },
      });
  
      if (!userResponse.ok) {
        throw new Error("Failed to fetch user data.");
      }
  
      const userData = await userResponse.json();
  
     
      const { role_id, pk, role, ...rest } = userData;
      sessionStorage.setItem(`${role}Id`,pk);
      sessionStorage.setItem(`${role}UserId`,  role_id);
      sessionStorage.setItem(`${role}Role`, role);
      sessionStorage.setItem(`${role}MainData`, JSON.stringify(userData));
      sessionStorage.setItem(`${role}Data`, JSON.stringify(rest ));
      
      setToastMessage("Sign in successful! Redirecting...");
      setToastType("success");
      setShowToast(true);
  
     
      setTimeout(() => {
        if (role === "admin") {
          router.push("/dashboard");
        } else if (role === "student") {
          router.push("/student-dashboard");
        } else if (role === "teacher") {
          router.push("/teacher-dashboard");
        } else {
          throw new Error("Unknown role.");
        }
      }, 2000);
    } catch (error) {
      console.error("Error during sign-in:", error);
  
      setToastMessage("Failed to sign in. Please try again.");
      setToastType("error");
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
            <h5 className='text-gray-950 text-md font-medium mt-2'>Forgot password? <span className='text-blue-500 text-sm'>
              <Link href="/reset-password">
              Reset Password
              </Link>
              </span></h5>
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