import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../../components/DashboardNavBar'
import DashboardHeader from '../../components/DashboardHeader'
import GradingComp from './components/GradingComp'

const GradingManagement = () => {
  return (
    <MaxWidthWrapper>
          <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
          <DashboardNavBar />
          <div className="flex-1 md:p-8 overflow-hidden ">
          <DashboardHeader /> 
          <h3 className='mb-3 font-bold text-lg'>Grading Sysytem</h3>
            <GradingComp/>
          </div>
          </div>
      </MaxWidthWrapper>
  )
}

export default GradingManagement
