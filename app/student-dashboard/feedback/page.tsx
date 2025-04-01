import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import StudentNavDashboard from '../components/StudentNavDashboard'
import FeedbackComponent from './component/FeedbackComponent'

const Feedback = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <StudentNavDashboard/>
   <FeedbackComponent/>
    </div>
   </MaxWidthWrapper>
  )
}

export default Feedback
