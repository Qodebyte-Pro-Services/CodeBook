import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import DashboardHeader from '@/app/dashboard/components/DashboardHeader'
import DashboardNavBar from '@/app/dashboard/components/DashboardNavBar'
import React from 'react'
import SubjectDetail from './component/PersonalizeSubjectDetail'



const page = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <div className="flex-1 md:p-8 overflow-hidden ">
    <DashboardHeader /> 
    <div className='flex flex-col gap-5 w-full '>
    <h3  className='mb-2 text-xl font-bold'>Subject Detail </h3>
   <SubjectDetail/>
    </div>       
    </div>
    
    </div>
</MaxWidthWrapper>
  )
}

export default page
