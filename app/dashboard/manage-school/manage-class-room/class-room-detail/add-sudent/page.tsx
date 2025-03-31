import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import DashboardHeader from '@/app/dashboard/components/DashboardHeader'
import DashboardNavBar from '@/app/dashboard/components/DashboardNavBar'
import React from 'react'
import AddStudent from './component/AddStudent'
import AddGuardian from './component/AddGuardian'


const AddStudentForm = () => {
  return (
    <>
       <MaxWidthWrapper>
          <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
          <DashboardNavBar />
          <div className="flex-1 md:p-8 overflow-hidden ">
          <DashboardHeader /> 
          <h3 className='mb-3 font-bold text-lg'>Student</h3>
         <AddStudent/>
         <AddGuardian />
          </div>
          </div>
      </MaxWidthWrapper>
    </>
  )
}

export default AddStudentForm
