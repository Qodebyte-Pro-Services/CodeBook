"use client";
import {  Calendar1,
  Landmark,
  Mail,
  Phone,
  PhoneCall,
  School,
  University,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SubjectCompletion from "./SubjectCompletion";
import CalendarComp from "./CalendarComp";

import axios from "axios";
import Select from "../../../add-teacher/compoenent/Select";

interface TeacherDetailPageProps {
  teacherId: string;
}

const TeacherDetailPage: React.FC<TeacherDetailPageProps> = ({ teacherId }) => {


  interface AssignedClass {
    id: string;
    class_name: string;
    class_teacher: string;
    created_at: string;
    level: string;
    subjects: string[];
    updated_at: string;
  }

  interface Teacher {
    id: string;
    full_name: string;
    email: string;
    address: string;
    state: string;
    city:string;
    gender: string;
    assign_class: string;
    assigned_classes: AssignedClass[];
    employedDate: string;
    profile_picture: string;
    created_at: string;
    phone_number: string;
    contact_name: string;
    contact_relationship:string;
    contact_phone_number:string;
    status:boolean ;
    sacked:boolean;
    suspended:boolean;
  }

  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeacher = async () => {
      const authToken = sessionStorage.getItem("authToken");

      try {
        const response = await axios.get(`https://sch-mgt-03yw.onrender.com/accounts/teacher/${teacherId}/`, {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        });
        setTeacher(response.data);
      } catch (error) {
        console.error("Error fetching teacher details:", error);
      }finally {
        setLoading(false);
      }
    };

    fetchTeacher();
  }, [teacherId]);

  const [formData, setFormData] = useState({
    Subject: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<{
    sender: string;
    text: string;
    time: string;
  } | null>(null);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!teacher) {
    return <p>Failed to load teacher details.</p>;
  }

  const handleInputChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const openModal = (message: { sender: string; text: string; time: string }) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMessage(null);
  };


  const subjectData = [
    { name: "English Language", completionPercentage: 70 },
    { name: "Mathematics", completionPercentage: 60 },
    { name: "Home Economics", completionPercentage: 45 },
    { name: "Geography", completionPercentage: 30 },
    { name: "Civic Education", completionPercentage: 20 },
    { name: "Phonetics", completionPercentage: 80 },
    { name: "Social Studies", completionPercentage: 55 },
  ];

  const assignmentsData = [
    { id: 1, title: "Essay on the background story of Qodebyte", date: "24 March 2025" },
    { id: 2, title: "Essay on the background story of Qodebyte", date: "24 March 2025" },
    { id: 3, title: "Essay on the background story of Qodebyte", date: "24 March 2025" },
  ];

  const messagesData = [
    {
      sender: "Parent",
      text: "Running low on graph paper, lab supplies for my class, please can I get a restock?",
      time: "November 10, 2025 - 10:45am",
    },
    {
      sender: "Parent",
      text: "Running low on graph paper, lab supplies for my class, please can I get a restock?",
      time: "November 10, 2025 - 10:45am",
    },
    {
      sender: "Parent",
      text: "Running low on graph paper, lab supplies for my class, please can I get a restock?",
      time: "November 10, 2025 - 10:45am",
    },
    {
      sender: "Parent",
      text: "Running low on graph paper, lab supplies for my class, please can I get a restock?",
      time: "November 10, 2025 - 10:45am",
    },
    {
      sender: "Parent",
      text: "Running low on graph paper, lab supplies for my class, please can I get a restock?",
      time: "November 10, 2025 - 10:45am",
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full p-4">
    
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200">
        <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
  {[
    { name: "General", href: `/dashboard/teachers/teacher-detail/${teacherId}` },
    { name: "Employment Details", href: `/dashboard/teachers/teacher-detail/${teacherId}/employment-details` },
    { name: "Attendance/Leave record", href: `/dashboard/teachers/teacher-detail/${teacherId}/attendance-leave` },
    { name: "Reviews", href: `/dashboard/teachers/teacher-detail/${teacherId}/reviews` },
    { name: "Communication", href: `/dashboard/teachers/teacher-detail/${teacherId}/communication` },
    { name: "Settings", href: `/dashboard/teachers/teacher-detail/${teacherId}/settings` },
  ].map((tab, index) => (
    <Link
      key={index}
      href={tab.href}
      className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
        index === 0
          ? "border-blue-500 text-blue-600"
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
      }`}
    >
      {tab.name}
    </Link>
  ))}
</nav>
        </div>
        <div className="flex flex-col gap-1 px-2 py-2">
          <p className="font-medium text-sm">General</p>
          <span className="text-gray-700 text-xs">Manage & edit the details of your school</span>
        </div>
      </div>

   
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      
        <div className="col-span-2 flex flex-col gap-4">
         
          <div className="bg-white rounded-lg shadow  p-4 flex md:flex-row flex-col gap-4">
            <div className="flex  items-start gap-4">
              <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
              <Image
              src={teacher.profile_picture || "/Ellipse-702.png"}
              alt="Profile Image"
              fill
              style={{ objectFit: "cover" }}
            />
              </div>

             
            </div>
            <div className="flex flex-col gap-3">
            <div>
            <div className="flex items-center gap-2">
  <div
    className={`flex items-center justify-center w-24 h-8 rounded-full text-sm font-medium ${
      teacher.sacked
        ? "bg-red-100 text-red-700"
        : teacher.suspended
        ? "bg-yellow-100 text-yellow-700"
        : teacher.status
        ? "bg-green-100 text-green-700"
        : "bg-gray-100 text-gray-700" // Default if none apply
    }`}
  >
    <div
      className={`w-2 h-2 rounded-full mr-2 ${
        teacher.sacked
          ? "bg-red-500"
          : teacher.suspended
          ? "bg-yellow-500"
          : teacher.status
          ? "bg-green-500"
          : "bg-gray-500" // Default if none apply
      }`}
    ></div>
    {teacher.sacked ? "Sacked" : teacher.suspended ? "Suspended" : teacher.status ? "Active" : "Inactive"}
  </div>
</div>
                  <div>
                    <h4 className="text-lg font-semibold">{teacher.full_name}</h4>
                    <p className="text-sm text-gray-500">Hails from {teacher.city},{teacher.state}</p>
                  </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex md:flex-row flex-col md:items-center items-start gap-2">
  <div className="flex gap-2">
    <School size={20} />
    Class: 
  </div>
  <p>
    {teacher.assigned_classes && teacher.assigned_classes.length > 0 
      ? teacher.assigned_classes[0].class_name 
      : "N/A"}
  </p>
</div>
              <div className="flex md:flex-row flex-col md:items-center items-end gap-2">
               <div className="flex gap-2">
               <Calendar1 size={20} />
               Employed: 
               </div>
               <p>{new Date(teacher.created_at).toLocaleDateString()}</p>
              </div>
              <div className="flex md:flex-row flex-col md:items-center items-start  gap-2 ">
               <div className="flex gap-2">
               <Mail size={20} />
               Email: 
               </div>
               <p className="xl:text-md lg:text-[13px] ">{teacher.email}</p>
              </div>
              <div className="flex md:flex-row flex-col md:items-center items-end gap-2">
                <div className="flex gap-2">
                <University size={20} />
                Gender: 
                </div>
                <p>{teacher.gender}</p>
              </div>
             
              <div className="flex md:flex-row flex-col md:items-center items-start  gap-2">
               <div className="flex gap-2">
               <Landmark size={20} />
               Address:
               </div>
               <p>{teacher.address}</p>
              </div>
              <div className="flex md:flex-row  flex-col md:items-center items-end gap-2">
                <div className="flex gap-2">
                <Phone size={20}  />
                Contact:
                </div>
                <p>{teacher.phone_number}</p>
              </div>
             
            </div>
            </div>
          </div>

          
          <SubjectCompletion subjects={subjectData} />

       
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-semibold text-lg">Messages</h5>
              <button className="text-blue-500 text-sm">Mark all as read</button>
            </div>
            <div className="flex flex-col max-h-[300px] overflow-y-auto gap-4">
              {messagesData.map((message, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs text-gray-500">{message.time}</p>
                  <div className="flex gap-2">
                  <p className="text-xs text-blue-500 cursor-pointer"
                  onClick={() => openModal(message)} >Response: </p>
                  </div>
              
                </div>
              ))}
            </div>
          </div>
        </div>

       
        <div className="flex flex-col  gap-4">
     
          <div className="bg-white rounded-lg shadow p-4">
            <h5 className="font-semibold text-lg">Emergency Contact Information</h5>
            <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <h4 className="text-gray-400 text-[14px]">Name</h4>
            <div className="flex gap-2">
              <User className="text-gray-300"/>
              <p className="text-sm text-gray-600">{teacher.contact_name}</p>
            </div>
          </div>
          <div className="flex flex-col">
          <h4 className="text-gray-400 text-[14px]">Relationship: </h4>
            <div className="flex gap-2">
            <User className="text-gray-300"/>
            <p className="text-sm text-gray-600">{teacher.contact_relationship}</p>
            </div>
          </div>
         <div className="flex flex-col">
          <h4 className="text-gray-400 text-[14px]">Contact</h4>
          <div  className="flex gap-2">
            <PhoneCall  className="text-gray-300"/>
          <p className="text-sm text-gray-600">{teacher.contact_phone_number}</p>
          </div>
         </div>
            </div>
          </div>

          <CalendarComp />

        
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-1">
              <h5 className="font-semibold text-lg">Subjects</h5>
            </div>
            <div className="flex flex-col gap-2 max-h-[100px] overflow-y-auto">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-sm text-gray-500">Primary 3C</p>
                <p className="font-medium">Basic Technology</p>
                <p className="text-xs text-gray-500">Monday - March 20, 2025</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-sm text-gray-500">Primary 3C</p>
                <p className="font-medium">Basic Technology</p>
                <p className="text-xs text-gray-500">Monday - March 20, 2025</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-sm text-gray-500">Primary 3C</p>
                <p className="font-medium">Basic Technology</p>
                <p className="text-xs text-gray-500">Monday - March 20, 2025</p>
              </div>
            </div>
          </div>

         
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-semibold text-lg">Assignments</h5>
             
            </div>
            <Select
              label=""
              options={[
                { label: "Select Subject", value: "" },
                { label: "Basic Tech", value: "basicTech" },
                { label: "Social Studies", value: "socialStudies" },
              ]}
              name="Subject"
              value={formData.Subject}
              onChange={handleInputChange}
            />
            <div className="flex flex-col max-h-[300px] overflow-y-scroll gap-2 mt-4">
              {assignmentsData.map((assignment) => (
                <div key={assignment.id} className="flex flex-col gap-1">
                  <p className="font-medium">{assignment.title}</p>
                  <p className="text-xs text-gray-500">{assignment.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/75 transition-opacity bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
          
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <X size={20} />
            </button>

    
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/Ellipse-702.png"
                  alt="Sender Avatar"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h4 className="text-lg font-semibold">Ekoli Qodebyte</h4>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <p className="text-sm">{selectedMessage.text}</p>
              <p className="text-xs text-gray-500 mt-2">{selectedMessage.time}</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a message"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white rounded-lg px-4 py-2 text-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDetailPage;