import React from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'

const StudentInfoSection = () => {
  return (
    <div className="flex-1 md:p-8 overflow-hidden ">
    <DashboardHeader />
    <div className='w-full flex  flex-col gap-4'>
    <div className='bg-white rounded-xl flex w-full py-2 h-[40px] pl-5 '>
    <ChevronLeft/>
    <p>Student Info</p>
    </div>
    <Image src="/image.png" alt='' width={200} height={200} />
    <div className='w-full p-2 rounded-xl bg-white flex-col flex justify-between'>
    <div className='w-full justify-between flex px-3'>
    <p>Profile Information</p>
  
    </div>

    <div className='grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full xl:w-2/3 p-3 mx-auto '>
        <div className='grid gap-6 grid-cols-1 p-3 border-2 rounded-xl '>
            <div className='flex flex-col gap-3'>
            <h2>Full Name</h2>
            <h5>Qodebyte Iyekekpolor</h5>
            </div>

            <div className='flex flex-col gap-3'>
            <h2>Gender</h2>
            <h5>Male</h5>
            </div>
        </div>

        <div className='grid gap-6 grid-cols-1 p-3 border-2 rounded-xl '>
            <div className='flex flex-col gap-3'>
            <h2>Reg NO.</h2>
            <h5>1893289</h5>
            </div>

            <div className='flex flex-col gap-3'>
            <h2>Contact Number</h2>
            <h5>1234567890</h5>
            </div>
        </div>


        <div className='grid gap-6 grid-cols-1 p-3 border-2 rounded-xl   '>
            <div className='flex flex-col gap-3'>
            <h2>Date Of Birth</h2>
            <h5>19 - 05 - 2000</h5>
            </div>

            <div className='flex flex-col gap-3'>
            <h2>Email Address</h2>
            <h5>qodebyteiyekekpolor@gmail.com</h5>
            </div>
        </div>
    </div>
    </div>

    <div className='w-full p-2 rounded-xl bg-white flex-col flex justify-between'>
    <div className='w-full justify-between flex px-3'>
    <p>Student Information</p>
  
    </div>

    <div className='grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full xl:w-2/3 p-3 mx-auto '>
        <div className='grid gap-6 grid-cols-1 p-3 border-2 rounded-xl '>
            <div className='flex flex-col gap-3'>
            <h2>Student Id</h2>
            <h5>849504</h5>
            </div>
        </div>

        <div className='grid gap-6 grid-cols-1 p-3 border-2 rounded-xl '>
            <div className='flex flex-col gap-3'>
            <h2>Date of Admission</h2>
            <h5>19/04/1989</h5>
            </div>
        </div>


        <div className='grid gap-6 grid-cols-1 p-3 border-2 rounded-xl   '>
            <div className='flex flex-col gap-3'>
            <h2>Current Class</h2>
            <h5>SS2B</h5>
            </div>
        </div>
    </div>

    

    </div>

    <div className='w-full p-2 rounded-xl bg-white flex-col flex justify-between'>
    <div className='w-full justify-between flex px-3'>
    <p>Address</p>
  
    </div>

    <div className='grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full xl:w-2/3 p-3 mx-auto '>
        <div className='grid gap-6 grid-cols-1 p-3 border-2 rounded-xl '>
            <div className='flex flex-col gap-3'>
            <h2>Address</h2>
            <h5>3, Coyez Mall, Presidential Road, Enugu</h5>
            </div>
        </div>
    </div>

    

    </div>


    <div className='w-full p-2 rounded-xl bg-white flex-col flex justify-between'>
    <div className='w-full justify-between flex px-3'>
    <p>Parent and Guardian Information</p>
  
    </div>

    <div className='grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full xl:w-2/3 p-3 mx-auto '>
        <div className='grid gap-6 grid-cols-1 p-3 border-2 rounded-xl '>
            <div className='flex flex-col gap-3'>
            <h2>Mother</h2>
            <h5>Mrs Qodebyte</h5>
            <h5>1234567890</h5>
            </div>
        </div>

        <div className='grid gap-6 grid-cols-1 p-3 border-2 rounded-xl '>
            <div className='flex flex-col gap-3'>
            <h2>Father</h2>
            <h5>Mr Qodebyte</h5>
            <h5>1234567890</h5>
            </div>
        </div>


        <div className='grid gap-6 grid-cols-1 p-3 border-2 rounded-xl   '>
            <div className='flex flex-col gap-3'>
            <h2>Guardian</h2>
            <h5>Mr Qodebyte</h5>
            <h5>1234567890</h5>
            </div>
        </div>
    </div>

    

    </div>


    </div>  
    </div>
  )
}

export default StudentInfoSection
