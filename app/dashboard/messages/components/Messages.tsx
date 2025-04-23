"use client"
import React, { useState } from 'react';
import { Trash2, Send, File, Smile, ChevronsLeft } from 'lucide-react';
import Input from '../../teachers/add-teacher/compoenent/Input';
import TextAreaInput from '../../teachers/add-teacher/compoenent/TextAreaInput';
import Image from 'next/image';
import Link from 'next/link';
import DashboardHeader from '../../components/DashboardHeader';
import Select from '../../teachers/add-teacher/compoenent/Select';

interface Message {
    id: string;
    sender: string;
    text: string;
    timestamp: string;
    title: string;
    senderType: 'staff' | 'student';
}

const ChatSection = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            sender: 'Qodebyte Egunemkpon',
            title: 'student',
            text: 'Good morning. Could I please request some more construction paper, dry-erase markers for my class? We\'re running low. Thanks!',
            timestamp: '19 March 2025',
            senderType: 'staff',
        },
        {
            id: '2',
            sender: 'Qodebyte Egunemkpon',
            title: 'teacher',
            text: 'Sounds good, I will get that to you today.',
            timestamp: '19 March 2025',
            senderType: 'staff'
        },
    ]);
    const [currentMessage, setCurrentMessage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState<'staffs' | 'students' | 'unread'>('staffs');

    const handleSendMessage = () => {
        if (currentMessage.trim()) {
            const newMessage: Message = {
                id: crypto.randomUUID(),
                sender: 'You',
                title: 'teacher',
                text: currentMessage,
                timestamp: new Date().toLocaleDateString(),
                senderType: 'staff'
            };
            setMessages([...messages, newMessage]);
            setCurrentMessage('');
        }
    };

    const filteredMessages = messages.filter(message =>
        message.sender.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const CustomButton: React.FC<{
        variant: 'default' | 'ghost' | 'secondary';
        onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        className?: string;
        children: React.ReactNode;
        [key: string]: unknown; 
    }> = ({ variant, onClick, className, children, ...props }) => {
        const baseClass = 'px-4 py-2  transition-colors duration-200';
        let variantClass = '';

        switch (variant) {
            case 'default':
                variantClass = 'border-b-2 border-b-blue-500 text-blue-400 hover:border-b-blue-600';
                break;
            case 'ghost':
                variantClass = 'text-gray-700 dark:text-blue-400 hover:bg-gray-100 ';
                break;
            case 'secondary':
                variantClass = 'bg-gray-100  text-gray-900 dark:text-blue-400 hover:bg-gray-200 ';
                break;
            default:
                variantClass = 'bg-gray-100  text-gray-900 dark:text-blue-400 hover:bg-gray-200 ';
        }

        const combinedClass = `${baseClass} ${variantClass} ${className || ''}`;

        return (
            <button {...props} className={combinedClass} onClick={onClick}>
                {children}
            </button>
        );
    };


    const cn = (...args: unknown[]) => args.filter(Boolean).join(' ');


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
                  index === 0
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
          <p className="font-medium text-sm">Compose Message</p>
          <span className="text-gray-700 text-xs">View and send messages</span>
        </div>
      </div>
        <div className="flex flex-col md:flex-row  bg-gray-100">
           
           <div className="md:w-1/4 bg-white  shadow-md md:border-r border-gray-200  p-4 flex flex-col">
               <div className="mb-6">
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
               </div>
               <div className="flex overflow-x-scroll border-b-gray-600 border-b-2 space-x-4 mb-4">
                   <CustomButton
                       variant={activeTab === 'staffs' ? 'default' : 'ghost'}
                       onClick={() => setActiveTab('staffs')}
                       className="flex-1"
                   >
                       Staffs
                   </CustomButton>
                   <CustomButton
                       variant={activeTab === 'students' ? 'default' : 'ghost'}
                       onClick={() => setActiveTab('students')}
                       className="flex-1"
                   >
                       Students
                   </CustomButton>
                   <CustomButton
                       variant={activeTab === 'unread' ? 'default' : 'ghost'}
                       onClick={() => setActiveTab('unread')}
                       className="flex-1"
                   >
                       Unread
                   </CustomButton>
               </div>
               <div className="overflow-y-scroll md:max-h-[800px] max-h-[100px] flex-1">
                   {filteredMessages.map((message) => (
                       <div
                           key={message.id}
                           className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100  cursor-pointer"
                       >
                           <div className="relative rounded-full h-9 w-9">
                               <Image width={50} height={50} src='/Ellipse-703.png' alt='Avatar' className=" rounded-full" />
                           </div>
                           <div>
                               <div className="font-medium text-gray-900 text-sm dark:text-blue-500">{message.sender}</div>
                               <span>{message.title}</span>
                           </div>
                       </div>
                   ))}
               </div>
           </div>

         
           <div className="flex-1 p-4 flex flex-col h-full overflow-hidden">
               {messages.length > 0 ? (
                   <>
                       <div className="flex items-center space-x-3 mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                           <div className="relative rounded-full h-12 w-12">
                               <Image src='/Ellipse-703.png'  alt='' width={50} height={50} className='rounded-full' />
                           </div>
                           <div>
                               <div className="font-medium text-xl text-gray-900 ">{messages[0].sender}</div>
                               <p className="text-sm text-gray-500 dark:text-gray-400">Shortage of supplies</p>
                           </div>
                       </div>
                       <div className="overflow-y-auto flex-1  space-y-4">
                           {messages.map((message) => (
                               <div
                                   key={message.id}
                                   className={cn(
                                       "flex flex-col mb-3",
                                       message.sender === 'You' ? 'items-end' : 'items-start'
                                   )}
                               >
                                
                                   <div
                                       className={cn(
                                           "rounded-lg px-4 py-2 md:max-w-[70%] flex   w-full relative",
                                           message.sender === 'You'
                                               ? 'bg-blue-500 text-white ml-auto'
                                               : 'bg-gray-200 dark:bg-blue-500 text-gray-900 dark:text-white mr-auto'
                                       )}
                                   >
                                     <div className='flex flex-col w-full '>
                                     <p className="text-sm">{message.text}</p>
                                       
                                       <span className={cn(
                                           " text-xs",
                                           message.sender === 'You'
                                               ? " flex justify-end mt-3 text-blue-100"
                                               : " text-gray-500   dark:text-gray-400"
                                       )}>{message.timestamp}</span>
                                     </div>
                                   </div>
                               </div>
                           ))}
                       </div>
                       <div className="mt-4 grid w-full">
                           <TextAreaInput
                               placeholder="Type a message"
                               value={currentMessage}
                               onChange={(e) => setCurrentMessage(e.target.value)}
                               label=''
                           />
                          <div className='flex gap-2'>
                          <button className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-2 py-2">
                               <Smile className="w-5 h-5" />
                           </button>
                           <button className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-2 py-2">
                               <File className="w-5 h-5" />
                           </button>

                           <button onClick={handleSendMessage} className="bg-blue-500 text-white rounded-md px-4 py-2">
                               <Send className="w-5 h-5" />
                           </button>
                           <button className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-2 py-2">
                               <Trash2 className="w-5 h-5" />
                           </button>
                          </div>
                       </div>
                   </>
               ) : (
                   <div className="flex-1 flex items-center justify-center">
                       <p className="text-gray-500 dark:text-gray-400">Select a conversation to display</p>
                   </div>
               )}
           </div>
         </div>
       </div>
    );
};

export default ChatSection;

