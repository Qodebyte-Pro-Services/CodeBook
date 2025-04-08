import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import DashboardHeader from '@/app/dashboard/components/DashboardHeader'
import DashboardNavBar from '@/app/dashboard/components/DashboardNavBar'
import React from 'react'
import StudentDetailPage from './component/StudentDetailPage'

const StudentDetail = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <div className="flex-1 md:p-8 overflow-hidden ">
    <DashboardHeader /> 
    <h3 className='mb-3 font-bold text-lg'>Student Detail</h3>
    <StudentDetailPage/>
    </div>
    </div>
</MaxWidthWrapper>
  )
}

export default StudentDetail
