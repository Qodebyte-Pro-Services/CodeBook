import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import StudentNavDashboard from '../components/StudentNavDashboard'
import SettingsComp from './components/SettingsComp'

const page = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <StudentNavDashboard/>
    <SettingsComp/>
    </div>
   </MaxWidthWrapper>
  )
}

export default page
