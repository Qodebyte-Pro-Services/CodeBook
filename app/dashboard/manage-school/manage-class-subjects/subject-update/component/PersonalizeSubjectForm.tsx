"use client";

import React, { useState } from "react";
import { ChevronsLeft, Save } from "lucide-react";
import Link from "next/link";
import Toast from "@/app/components/Toast";
import TextAreaInput from "@/app/dashboard/teachers/add-teacher/compoenent/TextAreaInput";

interface ToastState {
  message: string;
  type: "success" | "error" | "warning" | "info";
}

const PersonalizeSubjectForm = () => {
  const [formData, setFormData] = useState({
    textbooks: "",
    equipmentNeeded: "",
  });

    const [activeTab, setActiveTab] = useState('Subjects');
    
      const tabs = [
        { name: 'General', href: '/dashboard/manage-school'},
        { name: 'Classes', href: '/dashboard/manage-school/manage-class'},
        { name: 'School-Subjects', href: '/dashboard/manage-school/manage-class-subjects' },
        { name: 'Timetable', href: '/dashboard/manage-school/timetable' },
                      // { name: 'Fee Mangement', href: '/dashboard/manage-school/fee-management' },
        { name: 'Grading', href: '/dashboard/manage-school/grading' },
      ];

  const [toast, setToast] = useState<ToastState | null>(null);

  const handleInputChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToastClose = () => {
    setToast(null);
  };

  const handleSave = () => {
    console.log("Form Data:", formData);
    setToast({
      message: "Subject personalized successfully!",
      type: "success",
    });
  };

  return (
    <>

<div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll  justify-between">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              onClick={() => setActiveTab(tab.name)}
              className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === tab.name
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className='flex flex-col gap-1 px-2 py-2'>
        <p className='font-medium text-sm'>Subjects</p>
        <span className='text-gray-700 text-xs'>Manage & edit your school subjects</span>
      </div>
    </div>

      <div className="w-full mt-2 bg-[#FFFFFF] mb-3 h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll">
        <div className="flex gap-2 md:w-1/2 w-full items-center justify-start md:text-md text-[12px]">
          <ChevronsLeft />
          <Link href="/dashboard/manage-school/manage-class-subjects" className="cursor-pointer">
            Subjects Table
          </Link>
          <ChevronsLeft className="text-gray-400 w-[20px]" />
          <p>Personalize Subject</p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md"
        >
          <Save className="text-blue-500" />
          <p className="text-[10px] md:text-md">Save</p>
        </button>
      </div>

    <div className="lg:flex-row flex flex-col lg:gap-0 gap-3 bg-[#FFFFFF] rounded-md">
    <div className="lg:w-1/2 w-full lg:mb-0 mb-4 p-4 rounded-lg mr-4">
    <h2 className="text-lg font-semibold mb-4">Personalize Subject</h2>
    <TextAreaInput
      label="Textbooks"
      placeholder="Enter required textbooks eg: New General Mathematics for Primary 1 or Basic Biology for JS1."
      name="textbooks"
      value={formData.textbooks}
      onChange={handleInputChange}
      rows={5} 
    />

    <TextAreaInput
      label="Equipment Needed"
      placeholder="Enter equipment needed eg: Calculator, Ruler, Graph paper, Microscope, Slides, Lab Coat."
      name="equipmentNeeded"
      value={formData.equipmentNeeded}
      onChange={handleInputChange}
    />
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleToastClose}
        />
      )}
    </>
  );
};

export default PersonalizeSubjectForm;