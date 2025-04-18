import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../../components/DashboardNavBar'
import ExpenseMgt from './components/ExpenseMgt'

const page = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <DashboardNavBar />
    <ExpenseMgt/>
    </div>
  </MaxWidthWrapper> 
  )
}

export default page
