import React from 'react'
import DocumentUpload from './components/DocumentUpload'
import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import StudentNavDashboard from '../components/StudentNavDashboard'

const Documents = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
    <StudentNavDashboard/>
   <DocumentUpload/>
    </div>
   </MaxWidthWrapper>
  )
}

export default Documents
