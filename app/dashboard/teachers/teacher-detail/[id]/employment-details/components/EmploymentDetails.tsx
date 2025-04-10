"use client";
import Link from "next/link";
import React, { useState } from "react";
import {  Building, Calendar, Clock, Edit, File, FileText, Landmark, Phone, PlusCircle, University, UserRoundCog, X } from "lucide-react";
import Select from "@/app/dashboard/teachers/add-teacher/compoenent/Select";
import Input from "@/app/dashboard/teachers/add-teacher/compoenent/Input";


const EmploymentDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatePayment, setUpdatePayment] = useState<{
    paymentMethod: string;
    amount: string;
    paymentType: string;
  } | null>(null);

  const openModal = (updatePaymentStatus: {paymentMethod:string; amount:string; paymentType:string}) => {
    setUpdatePayment(updatePaymentStatus);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setUpdatePayment(null);
  };
  return (
    <div className="flex flex-col gap-4 w-full p-4">
 
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
            {[
              { name: "General", href: "/dashboard/teachers/teacher-detail" },
              { name: "Employment Details", href: "/dashboard/teachers/teacher-detail/employment-details" },
              { name: "Attendance/Leave record", href: "/dashboard/teachers/teacher-detail/attendance-leave" },
              { name: "Reviews", href: "/dashboard/teachers/teacher-detail/reviews" },
              { name: "Communication", href: "/dashboard/teachers/teacher-detail/communication" },
              { name: "Settings", href: "/dashboard/teachers/teacher-detail/settings" },
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
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">Suspend</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">Sack Employee</button>
    </div>
  </div>
  <div className="flex justify-between items-center mb-2">
    <div className="flex flex-col">
      <p className="text-sm text-gray-600">Contract Start</p>
      <p className="text-sm text-gray-900 font-medium">19 November 2023</p>
    </div>
    <div className="text-gray-600">→</div>
    <div className="flex flex-col">
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
             <Edit className="text-blue-500"/>
             </div>
              <div className="grid xl:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1">
              <div className="flex md:flex-col flex-row  justify-between ">
                <p className="text-sm text-gray-400">Job Role</p>
                <p className="text-sm text-gray-600">Teacher</p>
              </div>
              <div className="flex md:flex-col flex-row  justify-between">
                <p className="text-sm text-gray-400">Assigned Classroom</p>
                <p className="text-sm text-gray-600">Primary 4A</p>
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
           <Edit className="text-blue-500"/>
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
              <button className="text-blue-500 flex items-center gap-2 text-sm">
              <PlusCircle/>
              <p>Add Document</p>
                </button>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { name: "Curriculum Vitae", type: "CV" },
                { name: "Teaching Certificate", type: "Certificate" },
                { name: "Degree Certificate", type: "Certificate" },
                { name: "Teaching License", type: "License" },
              ].map((doc, index) => (
                <div key={index} className="flex items-center gap-2 ">
                  <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full  bg-gray-300">
                  <FileText className="text-blue-600 " size={30} />
                  </div>
                 <div className="flex flex-col">
                 <p className="text-sm text-gray-600">{doc.name}</p>
                  <span className="text-gray-400 text-sm">Certificate File here</span>
                  <div className="flex gap-2">
                    <button className="text-blue-500 text-sm">View</button>
                    <button className="text-gray-500 text-sm">Delete</button>
                  </div>
                 </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
        
          <div className="bg-white rounded-lg shadow p-4">
            <h5 className="font-semibold text-lg mb-4">Employment Details</h5>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col justify-between ">
                <p className="text-sm text-gray-400">Teacher ID</p>
                <p className="text-sm text-gray-600">1839293</p>
              </div>
              <div className="flex flex-col justify-between ">
                <p className="text-sm text-gray-400">Contract Type</p>
                <p className="text-sm text-gray-600">Full-time Staff</p>
              </div>
              <div className="flex flex-col justify-between ">
                <p className="text-sm text-gray-400">Date of Employment</p>
                <p className="text-sm text-gray-600">19 November 2023</p>
              </div>
              <div className="flex flex-col justify-between ">
                <p className="text-sm text-gray-400">Assigned Classroom</p>
                <p className="text-sm text-gray-600">Primary 2 Picasso</p>
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
                <p className="text-sm text-gray-600">Qodebyte University</p>
              </div>
              <div className="flex   flex-row  justify-between ">
             <div className="flex gap-2 items-center">
              <File className="text-gray-400"/>
             <p className="text-sm text-gray-400">Qualification Held</p>
             </div>
                <p className="text-[12px] text-gray-600">BSC in Computer Science</p>
              </div>
              <div className="flex  flex-row justify-between ">
             <div className="flex gap-2 items-center">
              <Calendar className="text-gray-400"/>
             <p className="text-sm text-gray-400">Graduation Year</p>
             </div>
                <p className="text-sm text-gray-600">29 November 2025</p>
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
                <p className="text-sm text-gray-600">Qodebyte University</p>
              </div>
              <div className="flex  justify-between ">
              <div className="flex items-center gap-2">
              <UserRoundCog className="text-gray-400" />
              <p className="text-sm text-gray-400">Job Title</p>
              </div>
                <p className="text-sm text-gray-600">Teacher</p>
              </div>
              <div className="flex justify-between ">
               <div className="flex items-center gap-2">
                <Clock className="text-gray-400"/>
               <p className="text-sm text-gray-400">Duration</p>
               </div>
                <p className="text-sm text-gray-600">Jan 2023 - Nov 2024</p>
              </div>
              <div className="flex justify-between ">
               <div className="flex items-center gap-2 ">
                <Phone className="text-gray-400"/>
               <p className="text-sm text-gray-400">Reference Contact</p>
               </div>
                <p className="text-sm text-gray-600">+2347548484859</p>
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
    </div>
  );
};

export default EmploymentDetails;