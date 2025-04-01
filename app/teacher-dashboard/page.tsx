import React from 'react'

import MaxWidthWrapper from '../components/MaxWidthWrapper'
import TeacherNavDashborad from './components/TeacherNavDashborad'
import TeacherDashboard from './components/TeacherDashboard'


const TeachersDashBoard = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <TeacherNavDashborad/>
    <TeacherDashboard/>
    </div>
   </MaxWidthWrapper>
  )
}

export default TeachersDashBoard
