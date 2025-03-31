import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SuccessPage = () => {
  return (
    <>
     <div className='flex w-full  justify-center py-[1.5rem]'>
          <div className='lg:w-[70%] xl:h-[854px] w-full h-auto  flex lg:flex-row  rounded-[20px] bg-white'>
          <div className='lg:flex hidden lg:w-1/2 bg-[#DAF2FF] w-0 h-full rounded-bl-[20px] shadow-bl-2xl  items-center justify-center overflow-hidden '>
            <div className='w-[500px] h-[450px]  relative py-auto'>
            <Image src='/Authentication-bro-1.png' alt='login' fill />
            </div>
          </div>
            <div className='lg:w-1/2 h-full w-full flex flex-col text-center px-2 py-[1rem] justify-center'>
                <div className='flex flex-col gap-3 '>
                <h1 className='text-gray-950 font-medium  md:text-2xl text-xl'>Account Created Successfully </h1>
                <h4 className='text-gray-950 font-medium  md:text-lg text-md'>Welcome aboard! Start your management journey with</h4>
                <div className='relative w-[200px] h-[200px] mx-auto mt-3 '>
                <Image src='/Frame-1000003446.png' alt='Sucess' fill/>
                </div>

                <Link href="/Sign-in" className='bg-[#0A92DD] text-white w-[200px] h-[50px] py-3  rounded-[10px] mx-auto mt-3'>Get Started</Link>
              </div>
            </div>
          </div>
        </div>
  </>

  )
}

export default SuccessPage
