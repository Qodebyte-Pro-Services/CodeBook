"use client";

import React, { useState } from "react";
import { ChevronsLeft, Save } from "lucide-react";
import Link from "next/link";
import Select from "@/app/dashboard/teachers/add-teacher/compoenent/Select";
import Toast from "@/app/components/Toast";
import TextAreaInput from "@/app/dashboard/teachers/add-teacher/compoenent/TextAreaInput";

interface ToastState {
  message: string;
  type: "success" | "error" | "warning" | "info";
}

const PersonalizeSubjectForm = () => {
  const [formData, setFormData] = useState({
    subject: "",
    class: "",
    assignedTeacher: "",
    textbooks: "",
    equipmentNeeded: "",
  });

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
      <div className="w-full bg-[#FFFFFF] mb-3 h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll">
        <div className="flex gap-2 md:w-1/2 w-full items-center justify-start md:text-md text-[12px]">
          <ChevronsLeft />
          <Link href="/dashboard/manage-school/manage-class/mange-class-subects" className="cursor-pointer">
            Class
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

         
          <Select
            label="Subject"
            options={[
              { label: "Select Subject", value: "" },
              { label: "Mathematics", value: "math" },
              { label: "English", value: "english" },
              { label: "Science", value: "science" },
              { label: "Biology", value: "biology" },
            ]}
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
          />

          <Select
            label="Class"
            options={[
              { label: "Select Class", value: "" },
              { label: "Primary 1", value: "primary1" },
              { label: "JS1", value: "js1" },
            ]}
            name="class"
            value={formData.class}
            onChange={handleInputChange}
          />


        
           <Select
            label="Assigned Teacher"
            options={[
              { label: "Select assigned teacher", value: "" },
              { label: "Victor", value: "teacherId-teachername" },
              
            ]}
            name="assignedTeacher"
            value={formData.assignedTeacher}
            onChange={handleInputChange}
          />

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