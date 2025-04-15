"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import Input from "@/app/dashboard/teachers/add-teacher/compoenent/Input"; 
import Toast from "@/app/components/Toast"; 

const ConfirmResetPassword = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

 
  const uid = searchParams.get("uid");
  const token = searchParams.get("token");

  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error" | "warning" | "info">("warning");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

  
    if (!newPassword1 || !newPassword2) {
      setPasswordError("Both password fields are required.");
      return;
    }

    if (newPassword1 !== newPassword2) {
      setPasswordError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://sch-mgt-03yw.onrender.com/auth/password/reset/confirm/",
        {
          new_password1: newPassword1,
          new_password2: newPassword2,
          uid,
          token,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setToastMessage("Password reset successfully! Redirecting to sign-in...");
        setToastType("success");
        setShowToast(true);

        
        setTimeout(() => {
          router.push("/Sign-in");
        }, 2000);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setToastMessage("Failed to reset password. Please try again.");
      setToastType("error");
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full h-screen items-center justify-center py-[1.5rem] bg-gradient-to-b from-[#DAF2FF] to-[#CEC9C3]">
      <div className="bg-white p-6 mt-4 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl text-gray-900 font-semibold text-center mb-4">Reset Your Password</h1>
        <p className="text-gray-600 text-center mb-6">
          Enter your new password below to reset your account password.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="New Password"
            placeholder="Enter your new password"
            type="password"
            value={newPassword1}
            onChange={(e) => {
              setNewPassword1(e.target.value);
              setPasswordError(""); 
            }}
            error={passwordError}
          />
          <Input
            label="Confirm New Password"
            placeholder="Confirm your new password"
            type="password"
            value={newPassword2}
            onChange={(e) => {
              setNewPassword2(e.target.value);
              setPasswordError(""); 
            }}
            error={passwordError}
          />
          <button
            type="submit"
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
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

export default ConfirmResetPassword;