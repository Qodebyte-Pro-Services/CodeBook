"use client"
import React, { useState } from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import { ChevronLeft, MonitorSmartphone, SquareMousePointer, Trash } from 'lucide-react'

const SettingsComp = () => {
    const [activeTab, setActiveTab] = useState('Security');
    
      const tabs = ['Security',  'Notifications'];

      const renderTabContent = () => {
        switch (activeTab) {
         
          case 'Security':
            return (
              <div className="p-6">
                <div>
                  <h2 className="text-lg font-semibold mb-4">Browsers and devices</h2>
                  <p className="text-sm text-gray-600 mb-4">These browsers and devices are currently signed in to your account. Remove any unauthorized devices.</p>
    
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-orange-500 mr-2">
                        <SquareMousePointer />
                        </span>
                        <div>
                          <p className="font-semibold md:text-sm text-[12px]">Brave on Mac OS X</p>
                          <p className="text-sm text-gray-600">Enugu, Enugu State</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-4">Current session</span>
                        <button className="text-red-500">
                        <Trash/>
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-blue-500 mr-2">
                        <MonitorSmartphone />
                        </span>
                        <div>
                          <p className="font-semibold md:text-sm text-[12px]">iPhone 13 Pro</p>
                          <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-4">Active 2 days ago</span>
                        <button className="text-red-500">
                        <Trash/>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          

          case 'Notifications':
            return (
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6">Notification Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">School Announcements</p>
                          <p className="text-sm text-gray-600">Receive updates about the school</p>
                        </div>
                        <label className="inline-flex relative items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Subject alerts</p>
                          <p className="text-sm text-gray-600">Receive notifications about changes to your account </p>
                        </div>
                        <label className="inline-flex relative items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">In-app Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">New messages</p>
                          <p className="text-sm text-gray-600">Notify me when I receive new messages</p>
                        </div>
                        <label className="inline-flex relative items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium"> Assignments Addition</p>
                          <p className="text-sm text-gray-600">Notify me when I&apos;m assigned a new task</p>
                        </div>
                        <label className="inline-flex relative items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          
          default:
            return null;
        }
      };
  return (
    <div className="flex-1 md:p-8 overflow-hidden">
    <DashboardHeader />
    <div className="w-full flex flex-col gap-4">
      <div className="bg-white rounded-xl flex w-full py-2 h-[40px] pl-5 items-center gap-2">
        <ChevronLeft />
        <p className="font-medium">School Activity</p>
      </div>

      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px md:overflow-hidden overflow-x-scroll">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        
        {renderTabContent()}
      </div>
      </div>
    </div>
  )
}

export default SettingsComp
