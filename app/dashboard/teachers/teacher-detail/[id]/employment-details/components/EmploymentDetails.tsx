"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {  Building, Calendar, Clock,File, FileText, Landmark, Phone, PlusCircle, University, UserRoundCog, X } from "lucide-react";
import Select from "@/app/dashboard/teachers/add-teacher/compoenent/Select";
import Input from "@/app/dashboard/teachers/add-teacher/compoenent/Input";
import { useParams } from "next/navigation";
import axios from "axios";
import Toast from "@/app/components/Toast";
import UploadImage from "@/app/dashboard/teachers/add-teacher/compoenent/UploadInput";
import TextAreaInput from "@/app/dashboard/teachers/add-teacher/compoenent/TextAreaInput";


const EmploymentDetails = () => {
  const { id: teacherId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);
  const [updatePayment, setUpdatePayment] = useState<{
    paymentMethod: string;
    amount: string;
    paymentType: string;
  } | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [documents, setDocuments] = useState<{ id: string; name: string; type: string; file_url: string }[]>([]);
    const [loadingDocuments, setLoadingDocuments] = useState(true);
    const [toast, setToast] = useState<{ message: string; type: string } | null>(null);
    // const [isSuspended, setIsSuspended] = useState(false);
    // const [isSacked, setIsSacked] = useState(false);
    const [statusLoading, setStatusLoading] = useState(false);



  const openModal = (updatePaymentStatus: {paymentMethod:string; amount:string; paymentType:string}) => {
    setUpdatePayment(updatePaymentStatus);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setUpdatePayment(null);
  };

  const openDocModal = () => {
    setIsDocModalOpen(true);
  };

  const closeDocModal = () => {
    setIsDocModalOpen(false);
    setFile(null);
    setDescription("");
  };

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
  
    assigned_classes: AssignedClass[];
    employedDate: string;
    created_at: string;
    phone_number: string;
    contact_name: string;
    contact_relationship:string;
    contact_phone_number:string;
    name_of_cert_school:string;
    qualification:string;
    reference_contact:string;
    job_title:string;
    organization:string;
    duration:string;
    date_of_graduation:string;
    status:boolean;
    sacked:boolean;
    suspended:boolean
  }

  const [teacher, setTeacher] = useState<Teacher | null>(null);
    const [loading, setLoading] = useState(true);
    const [docLoading, setDocLoading] = useState(false);

    const handleSuspendToggle = async () => {
      if (!teacher) {
        setToast({
          message: "Teacher details are not loaded. Please try again.",
          type: "error",
        });
        return;
      }
      const endpoint = teacher.suspended
        ? `https://sch-mgt-03yw.onrender.com/accounts/teacher/${teacherId}/unsuspend/`
        : `https://sch-mgt-03yw.onrender.com/accounts/teacher/${teacherId}/suspend/`;
  
        setStatusLoading(true);
  
      try {
        const authToken = sessionStorage.getItem("authToken");
        if (!authToken) {
          setToast({
            message: "Authentication token is missing. Please log in again.",
            type: "error",
          });
          return;
        }

         if (!teacher) {
    setToast({
      message: "Teacher details are not loaded. Please try again.",
      type: "error",
    });
    return;
  }

        console.log("Endpoint:", endpoint); 
  
        const response = await axios.post(endpoint, {}, {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        });
  
        console.log("Response:", response.data);

        setTeacher((prevTeacher) => prevTeacher && { ...prevTeacher, suspended: !prevTeacher.suspended });


        setToast({
          message: teacher.suspended ? "Teacher suspended successfully!" : "Teacher unsuspended successfully!",
          type: "success",
        });
    
      } catch (error) {
        console.error("Error toggling suspension:", error);
        setToast({
          message: (axios.isAxiosError(error) && error.response?.data?.detail) || "Failed to update suspension status. Please try again.",
          type: "error",
        });
      } finally {
        setStatusLoading(false);
      }
    };
  
    const handleSackToggle = async () => {
      if (!teacher) {
        setToast({
          message: "Teacher details are not loaded. Please try again.",
          type: "error",
        });
        return;
      }
      const endpoint = teacher.sacked
        ? `https://sch-mgt-03yw.onrender.com/accounts/teacher/${teacherId}/reinstate/`
        : `https://sch-mgt-03yw.onrender.com/accounts/teacher/${teacherId}/sack/`;
  
        setStatusLoading(true);
  
      try {
        const authToken = sessionStorage.getItem("authToken");
        if (!authToken) {
          setToast({
            message: "Authentication token is missing. Please log in again.",
            type: "error",
          });
          return;
        }

        
    console.log("Endpoint:", endpoint);
  
    const response = await axios.post(endpoint, {}, {
      headers: {
        Authorization: `Token ${authToken}`,
      },
    });

    console.log("Response:", response.data);
  
    setTeacher((prevTeacher) => prevTeacher && { ...prevTeacher, sacked: !prevTeacher.sacked });

    setToast({
      message: teacher.sacked ? "Teacher sacked successfully!" : "Teacher reinstated successfully!",
      type: "success",
    });
      } catch (error) {
        console.error("Error toggling sack status:", error);
        setToast({
          message: "Failed to update sack status. Please try again.",
          type: "error",
        });
      } finally {
        setStatusLoading(false);
      }
    };

    useEffect(() => {
      const fetchDocuments = async () => {
        const authToken = sessionStorage.getItem("authToken");
        if (!authToken) return;
  
        try {
          const response = await axios.get(
            "https://sch-mgt-03yw.onrender.com/teacher/teacher-document/",
            {
              headers: {
                Authorization: `Token ${authToken}`,
              },
              params: {
                teacher: teacherId, 
              },
            }
          );
          setDocuments(response.data); 
        } catch (error) {
          console.error("Error fetching teacher documents:", error);
        } finally {
          setLoadingDocuments(false);
        }
      };
  
      fetchDocuments();
    }, [teacherId]);

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

    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (!teacher) {
      return <p>Failed to load teacher details.</p>;
    }

    const handleSubmit = async () => {
      if (!file || !description) {
        setToast({
          message: "Please provide both a file and a description.",
          type: "warning",
        });
        return;
      }
    
      const authToken = sessionStorage.getItem("authToken");
      if (!authToken) {
        setToast({
          message: "Authentication token is missing. Please log in again.",
          type: "error",
        });
        return;
      }
    
      const formData = new FormData();
      formData.append("document", file);
      formData.append("description", description);
      formData.append("teacher", teacher.id); 
    
      setDocLoading(true);
    
      try {
        await axios.post("https://sch-mgt-03yw.onrender.com/teacher/teacher-document/", formData, {
          headers: {
            Authorization: `Token ${authToken}`,
            "Content-Type": "multipart/form-data",
          },
        });
    
        setToast({
          message: "Document uploaded successfully!",
          type: "success",
        });
        closeDocModal();
      } catch (error) {
        console.error("Error uploading document:", error);
        setToast({
          message: "Failed to upload document. Please try again.",
          type: "error",
        });
      } finally {
        setDocLoading(false);
      }
    };

    

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
                  index === 1
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
          <p className="font-medium text-sm">Employment Details</p>
          <span className="text-gray-700 text-xs">Manage & edit the details of your school</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
  <div className="flex md:flex-row flex-col justify-between md:items-center mb-4">
    <h5 className="font-semibold text-lg">Employment Duration</h5>
    <div className="flex gap-2">
    <button
              onClick={handleSuspendToggle}
              className={`px-4 py-2 rounded-lg text-sm ${
                teacher.suspended ? "bg-green-500" : "bg-blue-500"
              } text-white`}
              disabled={statusLoading}
            >
              {teacher.suspended ? "Unsuspend" : "Suspend"}
            </button>
            <button
              onClick={handleSackToggle}
              className={`px-4 py-2 rounded-lg text-sm ${
                teacher.sacked ? "bg-green-500" : "bg-red-500"
              } text-white`}
              disabled={statusLoading}
            >
              {teacher.sacked ? "Reinstate" : "Sack Teacher"}
            </button>
    </div>
  </div>
  <div className="flex justify-between items-center mb-2">
    <div className="flex flex-col">
      <p className="text-sm text-gray-600">Contract Start</p>
      <p className="text-sm text-gray-900 font-medium">{new Date(teacher.created_at).toLocaleDateString()}</p>
    </div>
    <div className="text-gray-600">→</div>
    <div hidden className="flex flex-col">
      <p className="text-sm text-gray-600">Contract End</p>
      <p className="text-sm text-gray-900 font-medium">Null</p>
    </div>
  </div>
  <div className="w-full h-2 bg-gray-200 rounded-full">
    <div className="h-2 bg-blue-500 rounded-full" style={{ width: "50%" }}></div>
  </div>
        </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="bg-white flex flex-col gap-2 rounded-lg shadow p-4 ">
             <div className="flex justify-between">
             <h5 className="font-semibold text-md mb-2">Employment Position Details</h5>
            
             </div>
              <div className="grid xl:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1">
              <div className="flex md:flex-col flex-row  justify-between ">
                <p className="text-sm text-gray-400">Job Role</p>
                <p className="text-sm text-gray-600">Teacher</p>
              </div>
              <div className="flex md:flex-col flex-row  justify-between">
                <p className="text-sm text-gray-400">Assigned Classroom</p>
                <p className="text-sm text-gray-600"> {teacher.assigned_classes?.[0]?.class_name ?? "N/A"}</p>
              </div>
              <div className="flex md:flex-col flex-row  justify-between">
                <p className="text-sm text-gray-400">Employment Status</p>
                <p className="text-sm text-gray-600">Present</p>
              </div>
              </div>
            </div>

      
            <div className="bg-white flex flex-col gap-2 rounded-lg shadow p-4 ">
           <div className="flex justify-between">
           <h5 className="font-semibold text-md mb-2">Salary</h5>
         
           </div>
             <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
             <div className="flex md:flex-col flex-row justify-between">
                <p className="text-sm text-gray-400">Payment Type</p>
                <p className="text-sm text-gray-600">Monthly Salary</p>
              </div>
              <div className="flex  md:flex-col flex-row justify-between   ">
                <p className="text-sm text-gray-400">Salary</p>
                <p className="text-sm text-gray-600">₦250,000</p>
              </div>
             </div>
            </div>
          </div>
    
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        
        <div className="col-span-2 flex flex-col gap-4">
         
      

       
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-semibold text-md">Payment Summary</h5>
              <button onClick={() => openModal({ paymentMethod: "", amount: "", paymentType: "" })} className="bg-blue-500 text-white h-[50] px-4 py-2 rounded-lg text-sm">
                <span className="text-sm">Confirm Monthly Payment</span>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {[...Array(4)].map((updatePaymentStatus, index) => (
                <div key={index} className="flex  items-start gap-4">
                  <Landmark className="text-green-500"size={40} />
                  <div>
                    <p className="text-[12px] text-gray-600">
                      A payment of ₦25,500 was successfully made via Bank Transfer (Transaction ID:
                      TXN-567890)
                    </p>
                    <p className="text-xs text-gray-500">November 10, 2025</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

         
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-semibold text-lg">Documents Uploaded</h5>
              <button onClick={openDocModal} className="text-blue-500 flex items-center gap-2 text-sm">
              <PlusCircle/>
              <p>Add Document</p>
                </button>
            </div>
            <div className="flex flex-col gap-4">
            {loadingDocuments ? (
          <p>Loading documents...</p>
        ) : documents.length > 0 ? (
          documents.map((doc, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-gray-300">
                <FileText className="text-blue-600" size={30} />
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-600">{doc.name}</p>
                <span className="text-gray-400 text-sm">{doc.type}</span>
                <div className="flex gap-2">
                  <a
                    href={doc.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm"
                  >
                    View
                  </a>
                  <button className="text-gray-500 text-sm">Delete</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No documents available for this teacher.</p>
        )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
        
          <div className="bg-white rounded-lg shadow p-4">
            <h5 className="font-semibold text-lg mb-4">Employment Details</h5>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col justify-between ">
                <p className="text-sm text-gray-400">Teacher ID</p>
                <p className="text-sm text-gray-600">{teacher.id}</p>
              </div>
              <div className="flex flex-col justify-between ">
                <p className="text-sm text-gray-400">Contract Type</p>
                <p className="text-sm text-gray-600">Full-time Staff</p>
              </div>
              <div className="flex flex-col justify-between ">
                <p className="text-sm text-gray-400">Date of Employment</p>
                <p className="text-sm text-gray-600">{new Date(teacher.created_at).toLocaleDateString()}</p>
              </div>
              <div className="flex flex-col justify-between ">
                <p className="text-sm text-gray-400">Assigned Classroom</p>
                <p className="text-sm text-gray-600"> {teacher.assigned_classes?.[0]?.class_name ?? "N/A"}</p>
              </div>
            </div>
          </div>

        
          <div className="bg-white rounded-lg shadow p-4">
            <h5 className="font-semibold text-lg mb-4">Educational Qualification</h5>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between ">
              <div className="flex gap-2 items-center">
                <University className="text-gray-400"/>
              <p className="text-sm text-gray-400">University</p>
              </div>
                <p className="text-sm text-gray-600">{teacher.name_of_cert_school}</p>
              </div>
              <div className="flex   flex-row  justify-between ">
             <div className="flex gap-2 items-center">
              <File className="text-gray-400"/>
             <p className="text-sm text-gray-400">Qualification Held</p>
             </div>
                <p className="text-[12px] text-gray-600">{teacher.qualification}</p>
              </div>
              <div className="flex  flex-row justify-between ">
             <div className="flex gap-2 items-center">
              <Calendar className="text-gray-400"/>
             <p className="text-sm text-gray-400">Graduation Year</p>
             </div>
                <p className="text-sm text-gray-600">{teacher.date_of_graduation}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h5 className="font-semibold text-lg mb-4">Previous Work Experience</h5>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between ">
              <div className="flex gap-2 items-center">
                <Building className="text-gray-400" />
              <p className="text-sm text-gray-400">Name of Organization</p>
              </div>
                <p className="text-sm text-gray-600">{teacher.organization}</p>
              </div>
              <div className="flex  justify-between ">
              <div className="flex items-center gap-2">
              <UserRoundCog className="text-gray-400" />
              <p className="text-sm text-gray-400">Job Title</p>
              </div>
                <p className="text-sm text-gray-600">{teacher.job_title}</p>
              </div>
              <div className="flex justify-between ">
               <div className="flex items-center gap-2">
                <Clock className="text-gray-400"/>
               <p className="text-sm text-gray-400">Duration</p>
               </div>
                <p className="text-sm text-gray-600">{teacher.duration}</p>
              </div>
              <div className="flex justify-between ">
               <div className="flex items-center gap-2 ">
                <Phone className="text-gray-400"/>
               <p className="text-sm text-gray-400">Reference Contact</p>
               </div>
                <p className="text-sm text-gray-600">{teacher.reference_contact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && updatePayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/75 transition-opacity bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
           
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <X size={20} />
            </button>
            <div className="flex flex-col  gap-2 w-full">
            <h2>Confirm monthly payment</h2>
              <Select
              label="Payment Method"
                options={[
                  { value: "bank_transfer", label: "Bank Transfer" },
                  { value: "cheque", label: "Cheque" },
                  { value: "cash", label: "Cash" },
                ]}
                value={updatePayment.paymentMethod}
                onChange={(e) => setUpdatePayment({ ...updatePayment, paymentMethod: e.target.value })}
              />

              <Input
              label="Amount"
                type="text"
                placeholder="Type in Amount"
                value=""
                onChange={(e) => setUpdatePayment({ ...updatePayment, amount: e.target.value })}
              />

              <Select
              label="Payment Type"
                options={[
                  { value: "monthly", label: "Monthly Salary" },
                  { value: "bonus", label: "Bonus" },
                ]}
                value={updatePayment.paymentType}
                onChange={(e) => setUpdatePayment({ ...updatePayment, paymentType: e.target.value })}
              />

              <button className="bg-blue-500 text-white rounded-lg px-4 py-2 text-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      )}


{isDocModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/75">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeDocModal}
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-4">Add Document</h2>
            <div className="flex flex-col gap-4">
              <UploadImage onChange={(file) => setFile(file)} />
              <TextAreaInput
                label="Description"
                placeholder="Enter a description for the document"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button
                onClick={handleSubmit}
                className={`bg-blue-500 text-white rounded-lg px-4 py-2 text-sm ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {docLoading ? "Uploading..." : "Upload Document"}
              </button>
            </div>
          </div>
        </div>
      )}

{toast && (
        <Toast
          message={toast.message}
          type={toast.type as "success" | "error" | "warning" | "info"}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default EmploymentDetails;