"use client";

import React, { useEffect, useState } from "react";
import { ChevronsLeft, Loader, Save } from "lucide-react";
import Input from "./Input";
import Select from "./Select";
import Toast from "@/app/components/Toast";
import UploadImage from "./UploadInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { lgasByState } from "@/utils/nigeriaStatesLocalData";

interface ToastState {
  message: string;
  type: "success" | "error" | "warning" | "info";
}
interface Classroom {
  id: string;
  class_name: string;
}

interface ClassData {
  id: string;
  name: string;
  multiple_classes: boolean;
  classrooms?: Classroom[];
}

const AddTeacherForm = () => {
  const router = useRouter();
  const [states, setStates] = useState<{ state: string; cities: string[] }[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({}); 
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [classRooms, setClassRooms] = useState<Classroom[]>([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [showClassRooms, setShowClassRooms] = useState(false);
 


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
       contactName: "",
       contactPhoneNumber: "",
       contactRelationShip: "",
       assignedClass: "",
       assignedClassRoom: "",

  });

  const [toast, setToast] = useState<ToastState | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingClassrooms, setLoadingClassrooms] = useState(false);

  const handleInputChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFieldErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); 
  };


  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedClassId = e.target.value;
    setSelectedClass(selectedClassId);
    setFormData({ ...formData, assignedClass: selectedClassId });
  
    
    const selectedClassData = classes.find((cls) => cls.id === selectedClassId);
    
  
    if (selectedClassData?.multiple_classes) {
      setShowClassRooms(true);
    
      if (selectedClassData.classrooms) {
        setClassRooms(selectedClassData.classrooms);
      } else {
        fetchClassRooms(selectedClassId); 
      }
    } else {
      setShowClassRooms(false);
      setFormData((prev) => ({ ...prev, assignedClassRoom: "" })); 
    }
  };

  const handleClassRoomChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, assignedClassRoom: e.target.value });
  };

  const fetchClasses = async () => {
    const authToken = sessionStorage.getItem("authToken");
    if (!authToken) {
      setToast({
        message: "Authentication token is missing. Please log in again.",
        type: "error",
      });
      return;
    }

    try {
      const response = await axios.get("https://sch-mgt-03yw.onrender.com/class/", {
        headers: {
          Authorization: `Token ${authToken}`,
        },
      });
      setClasses(response.data);
    } catch (error) {
      console.error("Error fetching classes:", error);
      setToast({
        message: "Failed to fetch classes. Please try again.",
        type: "error",
      });
    }
  };

  const fetchClassRooms = async (classId: string) => {
    const authToken = sessionStorage.getItem("authToken");
    if (!authToken) return;
    
    setLoadingClassrooms(true);
    try {
      const response = await axios.get(
        `https://sch-mgt-03yw.onrender.com/class/classroom/`,
        {
          headers: { Authorization: `Token ${authToken}` },
          params: {
            level__id: classId  
          }
        }
      );
      setClassRooms(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.detail || "Failed to fetch classrooms";
        setToast({ message, type: "error" });
      } else {
        setToast({
          message: "An unexpected error occurred",
          type: "error"
        });
      }
      setClassRooms([]);
    } finally {
      setLoadingClassrooms(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);


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

    setLoading(true); 

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
      formDataToSend.append("contact_name",formData.contactName );
      formDataToSend.append("conatct_relationship",formData.contactRelationShip );
      formDataToSend.append("contact_phone_number",formData.contactPhoneNumber );
      formDataToSend.append("assign_class", selectedClass);
      formDataToSend.append("assign_class_room", formData.assignedClassRoom);
      
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
          contactName: "",
          contactRelationShip: "",
          contactPhoneNumber: "",
          assignedClass: "",
          assignedClassRoom: "",
      });

      
      setTimeout(() => {
        router.push("/dashboard/teachers");
      }, 2000);
    } catch (error) {
      console.error("Error adding teacher:", error);

      if (axios.isAxiosError(error) && error.response && error.response.status === 409) {
        setFieldErrors({ email: "This email is already in use. Please use a different email." }); 
        setToast({
          message: "This email is already in use. Please use a different email.",
          type: "error",
        });
      } else if (axios.isAxiosError(error) && error.response?.data?.message === "This email is already in use") {
        setFieldErrors({ email: "This email is already in use. Please use a different email." }); 
        setToast({
          message: "This email is already in use. Please use a different email.",
          type: "error",
        });
      } else {
        setToast({
          message: "Failed to add teacher. Please try again.",
          type: "error",
        });
      }
    }finally {
      setLoading(false);
    }
  };

  const handleToastClose = () => {
    setToast(null);
  };

  useEffect(() => {
   
    const fetchStatesAndCities = () => {
      const formattedStates = Object.entries(lgasByState).map(([state, cities]) => ({
      state,
      cities,
      }));
      setStates(formattedStates);
    };
    fetchStatesAndCities();
  }, []);

  interface State {
    state: string;
    cities: string[];
  }

  interface StateChangeEvent {
    target: {
      value: string;
    };
  }

  const handleStateChange = (e: StateChangeEvent) => {
    const state = e.target.value;
    setSelectedState(state);
    setFormData({ ...formData, state });

    const stateData = states.find((s: State) => s.state === state);
    setCities(stateData ? stateData.cities : []);
  };

  interface CityChangeEvent {
    target: {
      value: string;
    };
  }

  const handleCityChange = (e: CityChangeEvent) => {
    const city = e.target.value;
    setFormData({ ...formData, city });
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
          className={`flex items-center gap-2 rounded-lg md:px-4 md:py-2 py-0 px-0 text-[12px] md:text-md ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader className="animate-spin text-blue-500" />
              <p className="text-[10px] md:text-md">Saving...</p>
            </>
          ) : (
            <>
              <Save className="text-blue-500" />
              <p className="text-[10px] md:text-md">Save</p>
            </>
          )}
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
            ...states.map((state, index) => ({
              label: state.state,
              value: state.state || `state-${index}`, 
            })),
          ]}
          name="state"
          value={selectedState}
          onChange={handleStateChange}
        />
      </div>
      <div className="w-1/2">
        <Select
          label="City"
          options={[
            { label: "Select City", value: "default-city" }, 
            ...cities.map((city, index) => ({
              label: city,
              value: city || `city-${index}`, 
            })),
          ]}
          name="city"
          value={formData.city}
          onChange={handleCityChange}
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
            error={fieldErrors.email}
          />
          <Input
            label="Address"
            placeholder="Area and street"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <h2 className="text-lg font-semibold mb-4">Emergency Contact Information</h2>
          <Input
            label="Name of Contact"
            placeholder="Enter the Name of the Contact"
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleInputChange}
          />
          <Input
            label="RelationShip With Contact"
            placeholder="Enter the RelationShip With Contact"
            type="text"
            name="contactRelationShip"
            value={formData.contactRelationShip}
            onChange={handleInputChange}
          />

        <Input
            label="Contact PhoneNumber"
            placeholder="Enter the PhoneNumber of the Contact"
            type="text"
            name="contactPhoneNumber"
            value={formData.contactPhoneNumber}
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

    <h2 className="text-lg font-semibold mb-4 mt-8">Assign ClassRoom</h2>

    <Select
  label="Classes"
  options={[
    { label: "Select Class", value: "" },
    ...classes.map((cls) => ({
      label: cls.name,
      value: cls.id,
    })),
  ]}
  name="assignedClass"
  value={selectedClass}
  onChange={handleClassChange}
/>

{showClassRooms && (
   loadingClassrooms ? (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Class Rooms
      </label>
      <div className="mt-1 p-2 border border-gray-300 rounded-md animate-pulse">
        Loading classrooms...
      </div>
    </div>
  ) :  classRooms.length > 0 ? (
    <Select
      label="Class Rooms"
      options={[
        { label: "Select Classroom", value: "" },
        ...classRooms.map((room) => ({
          label: room.class_name,
          value: room.id,
        })),
      ]}
      name="assignedClassRoom"
      value={formData.assignedClassRoom}
      onChange={handleClassRoomChange}
    />
  )  : (
    <div>No classrooms available for this class</div>
  )
)}

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