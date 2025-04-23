"use client"
import DashboardHeader from '@/app/dashboard/components/DashboardHeader'
import Input from '@/app/dashboard/teachers/add-teacher/compoenent/Input'
import Select from '@/app/dashboard/teachers/add-teacher/compoenent/Select'
import { ChevronsLeft, Reply } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface Message {
    id: string;
    reciever: string;
    text: string;
    timestamp: string;
}

const SentMessages = () => {
       const [searchQuery, setSearchQuery] = useState('');
        const [messages] = useState<Message[]>([
            {
                id: '1',
                reciever: 'Qodebyte Egunemkpon',
                text: 'Good morning. Could I please request some more construction paper, dry-erase markers for my class? We\'re running low. Thanks!',
                timestamp: '19 March 2025',
            },
            {
                id: '2',
                reciever: 'Qodebyte Egunemkpon',
                text: 'Sounds good, I will get that to you today.',
                timestamp: '19 March 2025',
            },
        ]);

        const filteredMessages = messages.filter(message =>
            message.reciever.toLowerCase().includes(searchQuery.toLowerCase())
        );


  return (
    <div className='flex lg:w-[75%] w-full  flex-col gap-2 '>
    <DashboardHeader/>
  <div className='w-full bg-[#FFFFFF] h-[55px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll'>
   <Link href='/dashboard' className='flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] '>
     <ChevronsLeft />
     <p>Dashboard</p>
   </Link>
 </div>

 <div className="bg-white rounded-lg mt-2 shadow overflow-hidden">
   <div className="border-b border-gray-200">
     <nav className="flex -mb-px xl:overflow-hidden overflow-x-scroll justify-between">
       {[
         { name: "Compose Message", href: `/dashboard/messages` },
         { name: "Sent Messages ", href: `/dashboard/messages/sent-messages` },
         { name: "Broadcast Messages", href: `/dashboard/messages/broadcast-messages` },
       ].map((tab, index) => (
         <Link
           key={index}
           href={tab.href}
           className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
             index === 1
               ? "border-blue-500 text-blue-600"
               : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
           }`}
         >
           {tab.name}
         </Link>
       ))}
     </nav>
   </div>
   <div className="flex flex-col gap-1 px-2 py-2">
     <p className="font-medium text-sm">Sent Messages</p>
     <span className="text-gray-700 text-xs">View and send messages</span>
   </div>
 </div>

 <div className="flex flex-col md:flex-row  bg-gray-100">
 <div className="w-full bg-white  shadow-md md:border-r border-gray-200  p-4 flex flex-col">
               <div className="">
                   <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Messages</h2>
                   <div className=' w-full'>
        <Select
        label=""
        options={[
          { label: 'Email', value: '1' },
        ]}
        name="class"
        value=''
        onChange={(e) => (e.target.value)}
        />
        </div>
        <div className="flex items-center mb-4">
            <Input
                type="text"
                placeholder="Search by name of employee"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}

                label=''
            />
             </div>
             <h4 className='border-b-3 xl:w-1/7 lg:w-1/5 md:w-1/4 w-full border-b-blue-400'>Sent Messages</h4>
               </div>
             
               <div className="max-h-screen overflow-y-scroll flex-1">
                   {filteredMessages.map((message) => (
                       <div
                           key={message.id}
                           className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100  cursor-pointer"
                       >
                           <div className="relative  rounded-full h-9 w-9">
                               <Image width={50} height={50} src='/Ellipse-703.png' alt='Avatar' className=" rounded-full" />
                           </div>
                           <div className='flex flex-col gap-1'>
                               <div className="font-medium  text-gray-900 text-sm dark:text-blue-500">{message.reciever}</div>
                               <span className='text-[12px] md:text-sm'>{message.text}</span>
                             <div className='flex gap-2 items-center'>
                             <span className='text-gray-400'>{message.timestamp}</span>
                             <div className='text-blue-500 flex gap-2 cursor-pointer'>
                                <p>reply</p>
                                <Reply/>
                             </div>
                             </div>
                           </div>
                            
                       </div>
                   ))}
               </div>
           </div>
 </div>
      
    </div>
  )
}

export default SentMessages
