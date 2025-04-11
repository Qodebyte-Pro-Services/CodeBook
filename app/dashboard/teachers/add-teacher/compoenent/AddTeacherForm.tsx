"use client";

import React, { useState } from "react";
import { ChevronsLeft, Save } from "lucide-react";
import Input from "./Input";
import Select from "./Select";
import Toast from "@/app/components/Toast";
import UploadImage from "./UploadInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

interface ToastState {
  message: string;
  type: "success" | "error" | "warning" | "info";
}

const AddTeacherForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
    gender: "male",
    state: "",
    city: "",
    profilePicture: null as File | null,
    highestCert: "",
    schoolAttended: "",
    yearOfGraduation: "",
    previousWorkOrganization:  "",
     jobTitle:  "",
      jobDuration:  "",
       jobRefContact:  "",
  });

  const [toast, setToast] = useState<ToastState | null>(null);

  const handleInputChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (file: File | null) => {
    setFormData({ ...formData, profilePicture: file });
  };

  const handleSave = async () => {
    const authToken = sessionStorage.getItem("authToken");

    if (!authToken) {
      setToast({
        message: "Authentication token is missing. Please log in again.",
        type: "error",
      });
      return;
    }

    try {
      


      const formDataToSend = new FormData();
      formDataToSend.append("first_name", formData.firstName);
      formDataToSend.append("last_name", formData.lastName);
      formDataToSend.append("date_of_birth", formData.dob);
      formDataToSend.append("phone_number", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("gender", formData.gender);
      formDataToSend.append("state", formData.state);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("qualification", formData.highestCert);
      formDataToSend.append("name_of_cert_school", formData.schoolAttended);
      formDataToSend.append("date_of_graduation", formData.yearOfGraduation);
      formDataToSend.append("organization", formData.previousWorkOrganization);
      formDataToSend.append("job_title", formData.jobTitle);
      formDataToSend.append("duration", formData.jobDuration);
      formDataToSend.append("reference_contact", formData.jobRefContact);
      
      if (formData.profilePicture) {
        formDataToSend.append("profile_picture", formData.profilePicture);
      }

      
      await axios.post("https://sch-mgt-03yw.onrender.com/accounts/teacher/", formDataToSend, {
        headers: {
          Authorization: `Token ${authToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

     
      setToast({
        message: "Teacher added successfully!",
        type: "success",
      });

     
      setFormData({
        firstName: "",
        lastName: "",
        dob: "",
        phone: "",
        email: "",
        address: "",
        gender: "male",
        state: "",
        city: "",
        profilePicture: null,
        highestCert: "",
        schoolAttended: "",
        yearOfGraduation: "",
        previousWorkOrganization:  "",
         jobTitle:  "", 
         jobDuration:  "",
          jobRefContact:  "", 
      });

      
      setTimeout(() => {
        router.push("/dashboard/teachers");
      }, 2000);
    } catch (error) {
      console.error("Error adding teacher:", error);

     
      setToast({
        message: "Failed to add teacher. Please try again.",
        type: "error",
      });
    }
  };

  const handleToastClose = () => {
    setToast(null);
  };

  return (
    <>
      <div className="w-full bg-[#FFFFFF] mb-3 h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll">
        <div className="flex gap-2 md:w-1/2 w-full items-center justify-start md:text-md text-[12px]">
          <ChevronsLeft />
          <Link href="/dashboard/teachers" className="cursor-pointer">
            All Teachers List
          </Link>
          <ChevronsLeft className="text-gray-400 w-[20px]" />
          <p>Teacher</p>
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
          <h2 className="text-lg font-semibold mb-4">Basic Information</h2>

          <Input
            label="First Name"
            placeholder="Enter first name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <Input
            label="Last Name"
            placeholder="Enter last name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <Input
            label="Date of Birth"
            placeholder="dd/mm/yyyy"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="mr-2"
                  checked={formData.gender === "male"}
                  onChange={handleInputChange}
                />
                <span>Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="mr-2"
                  checked={formData.gender === "female"}
                  onChange={handleInputChange}
                />
                <span>Female</span>
              </label>
            </div>
          </div>

          <h2 className="text-lg font-semibold mb-4 mt-8">Contact Information</h2>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <Select
                label="State"
                options={[
                  { label: "Select State", value: "" },
                  { label: "State 1", value: "state1" },
                  { label: "State 2", value: "state2" },
                ]}
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-1/2">
              <Select
                label="City"
                options={[
                  { label: "Select City", value: "" },
                  { label: "City 1", value: "city1" },
                  { label: "City 2", value: "city2" },
                ]}
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <Input
            label="Phone"
            placeholder="Enter contact number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
            <Input
            label="Email"
            placeholder="Input Teacher Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            label="Address"
            placeholder="Area and street"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="lg:w-1/2 w-full p-4 rounded-lg">
          <UploadImage onChange={handleFileChange} />

          <h2 className="text-lg font-semibold mb-4 mt-8">Qualification Information</h2>

          <Select
            label="Highest Certificate"
            options={[
              { label: "Select Certificate Qualifications", value: "" },
              { label: "First School Leaving Certificate", value: "first_school_leaving_cert" },
              { label: "WEAC or NECO", value: "weac_neco" },
              { label: "Bachelor of Science", value: "bsc" },
              { label: "Bachelor of Arts", value: "ba" },
              { label: "Masters", value: "master" },
              { label: "Professor", value: "professor" },
            ]}
            name="highestCert"
            value={formData.highestCert}
            onChange={handleInputChange}
          />

          <Input
            label="Name of School Of Cert"
            placeholder="Enter the name of the School Certificate was Acquired from"
            type="text"
            name="schoolAttended"
            value={formData.schoolAttended}
            onChange={handleInputChange}
          />

          <Input
            label="Year of Graduation/Exit"
            placeholder="Enter the year of School Exit"
            type="date"
            name="yearOfGraduation"
            value={formData.yearOfGraduation}
            onChange={handleInputChange}
          />

      <h2 className="text-lg font-semibold mb-4 mt-8">Work Experience Information</h2>
      <Input
        label="Name of School Of Organization" 
        placeholder="Enter th name of the Previous Qorganization"
        type="text" name="previousWorkOrganization" 
        value={formData.previousWorkOrganization}
          onChange={handleInputChange}
           />

      <Input
            label="Job Title"
            placeholder="Enter Previous Job Title"
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
          />

        <Input
            label="Job Duration"
            placeholder="Enter Previous Job Duration"
            type="text"
            name="jobDuration"
            value={formData.jobDuration}
            onChange={handleInputChange}
          />

      <Input
            label="Job Reference Contact"
            placeholder="Enter Previous Job  Reference Contact"
            type="text"
            name="jobRefContact"
            value={formData.jobRefContact}
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

export default AddTeacherForm;