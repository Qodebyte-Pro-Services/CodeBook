"use client"
import { BadgePlus, Calendar1, CreativeCommons, Edit, Ellipsis, Landmark, Mail, Phone, School, University } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import SubjectCompletion from './SubjectCompletion'
import CalendarComp from './CalendarComp'
import Select from '../../add-teacher/compoenent/Select'

const TeacherDetailPage = () => {
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [formData, setFormData] = useState({
   
      Subject: '',
    });

    const handleInputChange = (e: { target: { name: string; value: unknown } }) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const updateTeacherData = () => {
      setIsDropdownOpen(false); 
    };

  const subjectData = [
    { name: 'English Language', completionPercentage: 70 },
    { name: 'Civic Education', completionPercentage: 20 },
    { name: 'Mathematics', completionPercentage: 60 },
    { name: 'Chemistry', completionPercentage: 10 },
    { name: 'Physics', completionPercentage: 90 },
    { name: 'Geography', completionPercentage: 30 },
    { name: 'Account', completionPercentage: 30 },
    { name: 'Intro-Tech', completionPercentage: 70 },
  ];
  return (
    <div className='flex flex-col gap-2 w-full'>
        <div className='flex xl:flex-row flex-col gap-2 w-full '>
        <div className='flex flex-col w-full xl:w-[70%] gap-2'>
          <div className='flex gap-2 flex-col lg:flex-row w-full '>
            <div className='flex flex-col gap-2 rounded-xl bg-[#FFFFFF] p-2 lg:w-[60%] w-full'>
              <div className='relative w-[139px] mx-auto h-[139px] '>
                <Image src="/Ellipse-702.png" alt='Profile Iamge' fill/>
              </div>

              <div className='flex flex-col gap-3 '>
              <div className='flex justify-between relative'>
              <h4 className='justify-start text-md '>Ekoli Qodebyte</h4>
              <div className='text-blue-500 text-lg cursor-pointer '    onClick={toggleDropdown}>
              <Ellipsis/> 
              </div>

              {isDropdownOpen && (
                    <div className="absolute gap-3 flex flex-col top-full md:left-[80%] left-[65%] transform -translate-x-1/2  bg-white border-2 border-blue-500 p-3 rounded-md shadow-md mt-2 w-48 z-10">
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 border-2 border-blue-500 bg-teal-300 rounded-lg"
                        onClick={updateTeacherData}
                      >
                        Update Teacher Data
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 border-2 border-blue-500 bg-yellow-300 rounded-lg"
                       
                      >
                        Suspend Teacher
                      </button>

                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 border-2 border-black bg-red-400 rounded-lg"
                       
                      >
                        Sack teacher
                      </button>
                    </div>
                  )}
              </div>
              <p className='text-[12px] md:text-sm'>
              Hails from Amechi Awkwunanaw, Enugu, 
              Enugu State
              </p>
              <div className='flex flex-row sm:pr-0 pr-5 lg:flex-col xl:gap-3 gap-6 justify-between '>
              <div className='flex flex-col lg:flex-row justify-start  lg:justify-normal  gap-3'>
              <div className='flex md:gap-5 gap-1 text-[12px]  md:text-sm'>
              <School size={15}/>
              <p>Primary 3C</p>
              </div>

              <div className='flex md:gap-5 gap-1 text-[12px] md:text-sm'>
              <Mail size={15}/>
              <p>qodebyte347@gmail.com</p>
              </div>
              </div>

              <div className='flex flex-col lg:flex-row justify-end  lg:justify-normal gap-3'>
              <div className='flex md:gap-5 gap-1 text-[11px] md:text-sm'>
              <Calendar1 size={15}/>
              <p>8 November 2021</p>
              </div>

              <div className='flex md:gap-5 gap-1 text-[12px]  md:text-sm'>
              <Phone size={15}/>
              <p>+2349059484839</p>
              </div>
              </div>
              </div>
              </div>
            </div>

            <div className='flex flex-col md:flex-row lg:flex-col lg:w-[40%] w-full gap-2 '>
                <div className='bg-[#FFFFFF] flex flex-col h-[119px] w-full justify-between rounded-xl'>
                    <div className='flex items-start justify-between p-3 w-full'>
                    <div className='flex flex-row lg:flex-col xl:flex-row xl:gap-3 lg:gap-1 gap-3 justify-center items-center h-full xl:my-4 lg:my-2 my-4 w-[90%]'>
                             <div className='relative w-[34px] h-[34px]'>
                              <Image src='/Frame-1618869711.png' alt='' fill/>
                             </div>

                             <div className='flex flex-col gap-2 text-sm'>
                              <p>98%</p>
                              <p className='text-gray-300'>Atendance</p>
                             </div>
                          </div>
                        <Link href='/students'>
                        <Ellipsis />
                        </Link>
                    </div>

                    
                </div>

                <div className='bg-[#FFFFFF] flex flex-col h-[119px] w-full justify-between rounded-xl'>
                    <div className='flex  items-start justify-between p-3 w-full'>
                    <div className='flex flex-row lg:flex-col xl:flex-row xl:gap-3 lg:gap-1 gap-3 justify-center items-center h-full xl:my-4 lg:my-2 my-4 w-[90%]'>
                             <div className='relative w-[34px] h-[34px]'>
                              <Image src='/Frame-1618869712.png' alt='' fill/>
                             </div>

                             <div className='flex flex-col gap-2 text-sm'>
                              <p>100,0000</p>
                              <p className='text-gray-300'>Income</p>
                             </div>
                          </div>
                        <Link href='/students'>
                        <Ellipsis />
                        </Link>
                    </div>

                </div>
            </div>
          </div>

      <div className=''>
      <SubjectCompletion subjects={subjectData} />
    </div>
        </div>

        <div className='flex flex-col w-full xl:w-[30%] gap-2 bg-[#FFFFFF] rounded-xl'>
        <CalendarComp/>

        <div className='flex justify-between px-2'>
          <p>Subjects</p>
          <Link href='' className='text-blue-300'>
          <Edit/>
          </Link>
        </div>

        <div className='mt-2 flex flex-col gap-3 p-3'>
        <div className='border-l-blue-900 flex flex-col gap-1 border-l-3 pl-2'>
        <p className='text-gray-400 text-sm'>Primary 3c</p>
        <p className='text-gray-950 text-md font-medium'>Basic-Technology</p>
        <p className='text-gray-400 text-sm'>Monday - March 20, 2025 08:00AM</p>
        </div>

        <div className='border-l-[#FF5C00] flex flex-col gap-1 border-l-3 pl-2'>
        <p className='text-gray-400 text-sm'>Primary 3c</p>
        <p className='text-gray-950 text-md font-medium'>Basic-Technology</p>
        <p className='text-gray-400 text-sm'>Monday - March 20, 2025 08:00AM</p>
        </div>

        <div className='border-l-[#FFBE66] flex flex-col gap-1 border-l-3 pl-2'>
        <p className='text-gray-400 text-sm'>Primary 3c</p>
        <p className='text-gray-950 text-md font-medium'>Basic-Technology</p>
        <p className='text-gray-400 text-sm'>Monday - March 20, 2025 08:00AM</p>
        </div>
        </div>
        </div>
        </div>

        <div className='flex flex-col gap-1 xl:flex-row w-full'>
         <div className='bg-[#FFFFFF] xl:w-[70%] w-full  rounded-xl p-4 flex flex-col gap-4'> 
           <div className="flex  items-center justify-between">
             <h2 className="text-lg font-semibold">Payment Summary</h2>
             <Link href="" className="text-blue-500 underline">
               View all
             </Link>
           </div>
         
           <div className="flex  items-start w-full gap-2">
             <div className="flex-shrink-0">
               <div className="w-full rounded-full  flex items-center justify-center">
                
                 <span className="text-sm font-semibold text-[#4fe084]"> <Landmark /></span>
               </div>
             </div>
             <div className="flex-1">
               <div className="flex  flex-col justify-between">
                 <span className=" text-gray-500 text-sm">A payment of N25,500 was successfully made via Bank Transfer (Transaction ID: TXN-567890)</span>
                 <span className="text-xs text-gray-500">12:34 pm</span>
               </div>
              
             </div>
           </div>
         
           <div className="flex items-start w-full gap-2">
             <div className="flex-shrink-0">
               <div className="w-full rounded-full  flex items-center justify-center">
                 <span className="text-sm font-semibold text-[#4fe084]">
                 <Landmark />
                 </span>
               </div>
             </div>
             <div className="flex-1">
               <div className="flex  flex-col justify-between ">
                 <span className=" text-gray-500 text-sm">A payment of N25,500 was successfully made via Bank Transfer (Transaction ID: TXN-567890)</span>
                 <span className="text-xs text-gray-500">12:34 pm</span>
               </div>
             
             </div>
           </div>
         
           <div className="flex items-start w-full gap-2">
             <div className="flex-shrink-0">
               <div className="w-full rounded-full  flex items-center justify-center">
                 <span className="text-sm font-semibold text-[#4fe084]">
                 <Landmark />
                 </span>
               </div>
             </div>
             <div className="flex-1">
               <div className="flex  flex-col justify-between ">
                 <span className=" text-gray-500 text-sm">A payment of N25,500 was successfully made via Bank Transfer (Transaction ID: TXN-567890)</span>
                 <span className="text-xs text-gray-500">12:34 pm</span>
               </div>
              
             </div>
           </div>
         
           <div className="flex items-start w-full gap-2">
             <div className="flex-shrink-0">
               <div className="w-full rounded-full  flex items-center justify-center">
                 <span className="text-sm font-semibold text-[#4fe084]">
                 <Landmark />
                 </span>
               </div>
             </div>
             <div className="flex-1">
               <div className="flex  flex-col justify-between ">
                 <span className=" text-gray-500 text-sm">A payment of N25,500 was successfully made via Bank Transfer (Transaction ID: TXN-567890)</span>
                 <span className="text-xs text-gray-500">12:34 pm</span>
               </div>
              
             </div>
           </div>
         
           <div className="flex items-start w-full gap-2">
             <div className="flex-shrink-0">
               <div className="w-full rounded-full  flex items-center justify-center">
                 <span className="text-sm font-semibold text-[#4fe084]">
                 <Landmark />
                 </span>
               </div>
             </div>
             <div className="flex-1">
               <div className="flex  flex-col justify-between ">
                 <span className=" text-gray-500 text-sm">A payment of N25,500 was successfully made via Bank Transfer (Transaction ID: TXN-567890)</span>
                 <span className="text-xs text-gray-500">12:34 pm</span>
               </div>
              
             </div>
           </div>
         
         
         </div>

         <div className='bg-[#FFFFFF] xl:w-[30%] w-full rounded-xl p-4 flex flex-col gap-4'>
          <div className='flex flex-col xl:flex-row  justify-between  p-2'>
          <p className='xl:justify-start lg:justify-normal justify-start'>Assignments</p>
          <div className='flex  gap-2 xl:justify-end lg:justify-normal justify-end'>
          <BadgePlus className='text-blue-400' />
          <Link href='' className='underline text-blue-500'>View all</Link>
          </div>
          
          </div>
          <Select  label=""
                options={[
                  { label: 'Select Subject', value: '' },
                  { label: 'Basic Tech', value: 'basicTech' },
                  { label: 'Social Studies', value: 'socialStudies' },
                ]}
                name="Subject"
                value={formData.Subject}
                onChange={handleInputChange}
                />
          <div className='flex flex-col gap-3 w-full'>
            <div className='flex gap-2  w-full'>
                <p className='py-2 text-[14px]'>1</p>
                <div className='flex flex-col gap-1 xl:text-[13px]'>
                  <p>Essay on the background story of Qodebyte</p>
                  <p className='text-gray-500'>24 March 2025</p>
                </div>
            </div>

            <div className='flex gap-2  w-full'>
                <p className='py-2 text-[14px]'>2</p>
                <div className='flex flex-col gap-1 xl:text-[13px]'>
                  <p>Essay on the background story of Qodebyte</p>
                  <p className='text-gray-500'>24 March 2025</p>
                </div>
            </div>

            <div className='flex gap-2  w-full'>
                <p className='py-2 text-[14px]'>3</p>
                <div className='flex flex-col gap-1 xl:text-[13px]'>
                  <p>Essay on the background story of Qodebyte</p>
                  <p className='text-gray-500'>24 March 2025</p>
                </div>
            </div>
          </div>
         </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 w-full xl:w-1/2">
            <h3 className="text-lg font-semibold mb-4">Educational Background</h3>
            <ul className="space-y-2">
              <li className='w-full flex justify-between md:flex-row flex-col'>
                <div className='  xl:gap-1 items-center gap-3  flex'><University/
                ><span className="font-semibold xl:text-[11px]">University</span>
                </div>
                 <p className='xl:text-[11px] text-gray-400  font-semibold'>University</p>
                 </li>
              <li className='w-full flex justify-between md:flex-row flex-col'> 
                <div className='  xl:gap-1 items-center gap-3  flex'>
                     <CreativeCommons/>
                      <span className="font-semibold xl:text-[11px]">Qualification Held</span>
                      </div>
                       <p className='xl:text-[11px] text-gray-400 font-semibold'>Bachelor of Science</p>
                       </li>
              <li className='w-full flex justify-between md:flex-row flex-col'>
                 <div className='  xl:gap-1 items-center gap-3  flex'><University/> 
                 <span className="font-semibold xl:text-[11px]">Graduation Year</span>
                 </div>
                  <p className='xl:text-[11px] text-gray-400 font-semibold'>2019</p>
                  </li>
            </ul>
          </div>
    </div>
  )
}

export default TeacherDetailPage
