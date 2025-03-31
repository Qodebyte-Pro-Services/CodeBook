"use client";

import React, { useState } from "react";
import { ChevronsLeft, Save } from "lucide-react";
import Link from "next/link";
import Select from "@/app/dashboard/teachers/add-teacher/compoenent/Select";
import Input from "@/app/dashboard/teachers/add-teacher/compoenent/Input";
import Toast from "@/app/components/Toast";
import TextAreaInput from "@/app/dashboard/teachers/add-teacher/compoenent/TextAreaInput";

interface ToastState {
  message: string;
  type: "success" | "error" | "warning" | "info";
}

const AddSubjectForm = () => {
  const [formData, setFormData] = useState({
    schoolType: "",
    subjectName: "",
    subjectDescription: "",
    learningObjectives: "",
    assessmentCriteria: "",
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
      message: "Subject created successfully!",
      type: "success",
    });
  };

  return (
    <>
      <div className="w-full bg-[#FFFFFF] mb-3 h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll">
        <div className="flex gap-2 md:w-1/2 w-full items-center justify-start md:text-md text-[12px]">
          <ChevronsLeft />
          <Link href="/dashboard/manage-school/school-detail" className="cursor-pointer">
            School detail
          </Link>
          <ChevronsLeft className="text-gray-400 w-[20px]" />
          <p>Create Subject</p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md"
        >
          <Save className="text-blue-500" />
          <p className="text-[10px] md:text-md">Save</p>
        </button>
      </div>
ddd
      <div className="lg:flex-row flex flex-col lg:gap-0 gap-3 bg-[#FFFFFF] rounded-md">
        <div className="lg:w-1/2 w-full lg:mb-0 mb-4 p-4 rounded-lg mr-4">
          <h2 className="text-lg font-semibold mb-4">Subject Information</h2>

          <Select
            label="School Type"
            options={[
              { label: "Select Type", value: "" },
              { label: "Nursery", value: "nursery" },
              { label: "Primary", value: "primary" },
              { label: "Secondary", value: "secondary" },
            ]}
            name="schoolType"
            value={formData.schoolType}
            onChange={handleInputChange}
          />

          <Input
            label="Subject Name"
            placeholder="Enter subject name"
            type="text"
            name="subjectName"
            value={formData.subjectName}
            onChange={handleInputChange}
          />

          <TextAreaInput
            label="Subject Description"
            placeholder="Enter subject description  eg: Introduction to basic arithmetic."
            name="subjectDescription"
            value={formData.subjectDescription}
            onChange={handleInputChange}
          />

          <Input
            label="Learning Objectives"
            placeholder="Enter learning objectives eg: Understand numbers, addition, subtraction.  "
            type="text"
            name="learningObjectives"
            value={formData.learningObjectives}
            onChange={handleInputChange}
          />

          <Input
            label="Assessment Criteria"
            placeholder="Enter assessment criteria eg: Classwork, Homework, Test, Exam"
            type="text"
            name="assessmentCriteria"
            value={formData.assessmentCriteria}
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

export default AddSubjectForm;