"use client";
import Toggle from '@/app/components/Toggle';
import DashboardHeader from '@/app/dashboard/components/DashboardHeader';
import { ChevronsLeft, Edit, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';


interface MessageConfig {
  id: string;
  name: string;
  message: string;
  isEnabled: boolean;
}

const initialMessages: MessageConfig[] = [
  { id: '1', name: 'Qodebook', message: '', isEnabled: false },
  { id: '2', name: 'Welcome Message', message: 'A friendly welcome message', isEnabled: true },
  { id: '3', name: 'Fee Due Reminder', message: 'A friendly reminder message', isEnabled: true },
  { id: '4', name: 'Absentee Alert', message: 'A friendly reminder message', isEnabled: true },
  { id: '5', name: 'Exam Notifications', message: 'A friendly reminder message', isEnabled: true },
  { id: '6', name: 'Result Release', message: 'A friendly reminder message', isEnabled: true },
];

const CommunicationComp = () => {
  const [messages, setMessages] = useState<MessageConfig[]>(initialMessages);
  const [isAddMessageModalOpen, setIsAddMessageModalOpen] = useState(false);
  const [newMessage, setNewMessage] = useState<{ name: string; message: string }>({ name: '', message: '' });

  const openAddMessageModal = () => {
    setIsAddMessageModalOpen(true);
    setNewMessage({ name: '', message: '' }); 
  };

  const closeAddMessageModal = () => {
    setIsAddMessageModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewMessage((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddMessage = () => {
    const newMessageWithId = { ...newMessage, id: Date.now().toString(), isEnabled: false };
    setMessages((prev) => [...prev, newMessageWithId]);
    closeAddMessageModal();
    
  };

  const handleToggleEnabled = (id: string) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, isEnabled: !msg.isEnabled } : msg
      )
    );
   
  };

  const handleEditMessage = (id: string) => {
    
    console.log(`Editing message with ID: ${id}`);
  };

  return (
    <div className="flex-1 md:p-8 overflow-hidden ">
      <DashboardHeader />
      <div className="flex flex-col gap-5 w-full ">
        <h3 className="mb-2 text-xl font-bold">Settings</h3>
        <div className="w-full bg-[#FFFFFF] md:h-[55px] h-[60px] py-2 px-4 flex rounded-lg justify-between gap-2 overflow-X-scroll">
          <div className="flex gap-2  w-1/2 items-center justify-start md:text-md text-[12px] ">
            <ChevronsLeft />
            <p>Settings</p>
          </div>
          <button onClick={openAddMessageModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <PlusCircle className="h-4 w-4 mr-2 inline-block" /> Add New Message
          </button>
        </div>

        <div className="flex flex-col gap-5 w-full ">
          <div className="bg-white rounded-lg mt-2 shadow overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px  overflow-x-scroll justify-between">
                {[
                  { name: 'School Profile', href: `/dashboard/settings/` },
                  { name: 'Academic Sessions', href: `/dashboard/settings/academic-sessions` },
                  { name: 'Subject Config', href: `/dashboard/settings/subject-config` },
                  { name: 'User Access', href: `/dashboard/settings/user-acess` },
                  { name: 'Fee Structure', href: `/dashboard/settings/fee-structure` },
                  { name: "Communication", href: `/dashboard/settings/communications` },
                  { name: 'Staffs', href: `/dashboard/settings/staffs` },
                  { name: 'Students', href: `/dashboard/settings/students` },
                  { name: 'Grading & Results', href: `/dashboard/settings/grading-results` },
                  { name: 'Security', href: `/dashboard/settings/security` },
                  { name: 'General Prefrence', href: `/dashboard/settings/general` },
                ].map((tab, index) => (
                  <Link
                    key={index}
                    href={tab.href}
                    className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                      index === 5
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-1 px-2 py-2">
              <p className="font-medium text-sm">Communications</p>
              <span className="text-gray-700 text-xs">Manage automated messages sent by the system</span>
            </div>
          </div>

          <div>
            <div className="bg-white xl:w-1/2 w-full  rounded-lg shadow overflow-hidden">
              <ul className="divide-y divide-gray-200">
                <li className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Name</p>
                  </div>
                </li>
                {messages.map((message) => (
                  <li key={message.id} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-grow">
                        <p className="text-sm font-medium text-gray-900">{message.name}</p>
                        {message.message && <p className="text-sm text-gray-500">{message.message}</p>}
                      </div>
                      <div className="flex items-center space-x-4">
                        <button onClick={() => handleEditMessage(message.id)} className="text-indigo-600 hover:text-indigo-900">
                          <Edit className="h-5 w-5" />
                        </button>
                        <Toggle isEnabled={message.isEnabled} onToggle={() => handleToggleEnabled(message.id)} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

     
      {isAddMessageModalOpen && (
        <div className="fixed inset-0 bg-gray-500/75 transition-opacity bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 max-w-md">
            <h5 className="text-lg font-semibold mb-4">Add New Message</h5>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleAddMessage();
            }} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newMessage.name}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={newMessage.message}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows={3}
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeAddMessageModal}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
                >
                  Add Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunicationComp;