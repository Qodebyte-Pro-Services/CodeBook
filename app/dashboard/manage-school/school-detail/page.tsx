import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import React from 'react'
import DashboardNavBar from '../../components/DashboardNavBar'
import DashboardHeader from '../../components/DashboardHeader'
import SchoolDetail from './components/SchoolDetail'
import SubjectTable from './components/SubjectTable'

const SchoolDetailPage = () => {
  return (
    <MaxWidthWrapper>
    <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
<DashboardNavBar />
<div className="flex-1 md:p-8 overflow-hidden ">
<DashboardHeader /> 
<div className='flex flex-col gap-5 w-full '>
<h3  className='mb-2 text-xl font-bold'>School Detail </h3>
<SchoolDetail schoolData={{
                          schoolName: 'Aba',
                          schoolType: 'nursery',
                          schoolAddress: '21 imkawa',
                          schoolCity: 'enugu',
                          schoolState: 'enugu',
                          schoolDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloremque architecto illum eligendi deserunt delectus pariatur consequuntur soluta maxime commodi. Blanditiis, debitis. Maxime autem error exercitationem explicabo corporis. Sequi, debitis.',
                          schoolPhone: '12345678',
                          ownerName: 'oga',
                          schoolEmail: 'sam@email.com',
                          schoolMotto: 'live Long',
                          establishmentDate: '12/05/25',
                          schoolLogo: '/Abstract-Design.png',
                          postalCode: '12345',
                          country:'Nigeria'
                      }}/>
<SubjectTable/>
</div>       
</div>

</div>
</MaxWidthWrapper>
  )
}

export default SchoolDetailPage
