import React from 'react'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import StudentNavDashboard from './components/StudentNavDashboard'
import StudentDashboard from './components/StudentDashboard'





const TeachersDashBoard = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <StudentNavDashboard/>
    <StudentDashboard/>
    </div>
   </MaxWidthWrapper>
  )
}

export default TeachersDashBoard
