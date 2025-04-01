import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import StudentNavDashboard from '../components/StudentNavDashboard'
import StudentInfoSection from './components/StudentInfoSection'

const StudentInfoPage = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <StudentNavDashboard/>
    <StudentInfoSection/>
    </div>
   </MaxWidthWrapper>
  )
}

export default StudentInfoPage
