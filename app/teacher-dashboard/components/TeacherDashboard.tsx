
import React from 'react'
import DashboardHeader from './DashboardHeader'

const TeacherDashboard = () => {
  return (
    <div className="flex-1 md:p-8 overflow-hidden ">
      <DashboardHeader />

      <div className='w-full flex lg:flex-row flex-col'>
        <div className='w-full lg:w-[70%] flex flex-col gap-4'>
        <div className='bg-white rounded-xl w-full py-2 h-[40px] pl-2 '>
            Dashboard
        </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboard
