"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { getAdminId, getAuthToken, clearAuthData } from "@/libs/adminSession";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetInactivityTimer = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      clearAuthData(); 
      router.push("/Sign-in"); 
    }, 600000); 
  }, [router]);

  useEffect(() => {
    const authToken = getAuthToken();
    const adminId = getAdminId();

    if (!authToken && !adminId) {
      router.push("/Sign-in");
      return;
    }

 
    resetInactivityTimer();

   
    const events = ["mousemove", "keydown", "click", "scroll"];
    const handleActivity = () => resetInactivityTimer();

    events.forEach((event) => window.addEventListener(event, handleActivity));

    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      events.forEach((event) => window.removeEventListener(event, handleActivity));
    };
  }, [router, resetInactivityTimer]);

  return <div>{children}</div>;
};

export default DashboardLayout;