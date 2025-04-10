"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAdminId, getAuthToken } from "@/libs/adminSession";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  useEffect(() => {
    const authToken = getAuthToken();
    const adminId = getAdminId();



    if (!authToken && !adminId) {
      router.push("/Sign-in");
    }


  }, [router]);

  return (
    <div className="flex flex-col min-h-screen">
    
      {children}
    </div>
  );
};

export default DashboardLayout;