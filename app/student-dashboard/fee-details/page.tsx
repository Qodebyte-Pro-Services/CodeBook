import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import StudentNavDashboard from '../components/StudentNavDashboard'
import FeeDetailPage from './components/FeeDetailPage'

const FeeDetailSection = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <StudentNavDashboard/>
    <FeeDetailPage/>
    </div>
   </MaxWidthWrapper>
  )
}

export default FeeDetailSection
