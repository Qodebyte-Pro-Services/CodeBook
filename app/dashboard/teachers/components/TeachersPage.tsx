import React from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import TeacherTable from './TeacherTable'


const TeachersPage = () => {
  return (
        <div className="flex-1 md:p-8 overflow-hidden ">
        <DashboardHeader />   

            <div className='flex flex-col gap-5 w-full '>
                <h3  className='mb-2 text-xl font-bold'>Teachers</h3>
                <TeacherTable/>
            </div>   
    </div>
  )
}

export default TeachersPage
