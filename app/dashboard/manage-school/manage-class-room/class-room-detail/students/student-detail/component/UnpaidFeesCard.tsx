import { Ellipsis } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const UnpaidFeesCard = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md w-full flex  gap-2">
     <div className=" md:w-[80%] w-full flex-col xl:flex gap-6">
      <Image src="/Frame-3618869711.png" width={30} height={30} alt="" />
     <div className='flex gap-2 mt-3 xl:mt-0'>
     <p className='text-red-600 text-md'>•</p>
     <h3 className="text-lg font-semibold  mb-2">Payment Completed</h3>
     </div>
      <p className="text-sm text-gray-600">School Fees Payments</p>
     </div>
     <Ellipsis/>
    </div>
  );
};

export default UnpaidFeesCard;