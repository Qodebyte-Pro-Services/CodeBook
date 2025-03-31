import React from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import SchoolMode from './SchoolMode'

const ManageSchools = () => {
  return (
    <div className="flex-1 md:p-8 overflow-hidden ">
        <DashboardHeader /> 

                <div className='flex flex-col gap-5 w-full '>
                <h3  className='mb-2 text-xl font-bold'>School Mode</h3>
                <SchoolMode/>
                
                </div>   
      
    </div>
  )
}

export default ManageSchools
