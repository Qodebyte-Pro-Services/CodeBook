import React from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import NonTeachersTable from './NonTeachersTable'

const NonTeachingStaff = () => {
  return (
     <div className="flex-1 md:p-8 overflow-hidden ">
    <DashboardHeader />   

        <div className='flex flex-col gap-5 w-full '>
            <h3  className='mb-2 text-xl font-bold'>Non Teaching Staff</h3>
            <NonTeachersTable/>
        </div>   
</div>
      
  )
}

export default NonTeachingStaff
