import MaxWidthWrapper from '@/app/components/MaxWidthWrapper'
import DashboardHeader from '@/app/dashboard/components/DashboardHeader'
import DashboardNavBar from '@/app/dashboard/components/DashboardNavBar'
import PersonalizeSubjectForm from './component/PersonalizeSubjectForm'



const page = () => {
  return (
    <MaxWidthWrapper>
          <div className='flex py-2 px-2 text-gray-950 overflow-hidden'>
          <DashboardNavBar />
          <div className="flex-1 md:p-8 overflow-hidden ">
          <DashboardHeader /> 
          <h3 className='mb-3 font-bold text-lg'>Update Subject Detail</h3>
          <PersonalizeSubjectForm/>
          </div>
          </div>
      </MaxWidthWrapper>
  )
}

export default page
