"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, {  useState } from "react";
import Toast from "@/app/components/Toast"; 
import Input from "@/app/dashboard/teachers/add-teacher/compoenent/Input";

const ResetForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error" | "warning" | "info">("warning");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false); 
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(""); 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

  
    if (!email) {
      setEmailError("Email is required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const resetPasswordResponse = await axios.post(
        "https://sch-mgt-03yw.onrender.com/auth/password/reset/",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      sessionStorage.setItem("resetEmail", email);

      if (resetPasswordResponse.status === 200) {
        setToastMessage("Password reset email sent successfully!");
        setToastType("success");
        setShowToast(true);

     
        setTimeout(() => {
          router.push("/reset-password/reset-acct-message");
        }, 2000);
      }
    } catch (error) {
      console.error("Error sending password reset email:", error);
      setToastMessage("Failed to send password reset email. Please try again.");
      setToastType("error");
      setShowToast(true);
    }finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex w-full  h-screen items-center justify-center py-[1.5rem] bg-gradient-to-b from-[#DAF2FF] to-[#CEC9C3]">
      <div className="bg-white p-6   mt-4 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl text-gray-900 font-semibold text-center mb-4">Reset Password</h1>
        <p className="text-gray-600 text-center mb-6">
          Enter your email address to receive a password reset link.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={handleInputChange}
            error={emailError}
          />
          <button
            type="submit"
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading} 
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default ResetForm;