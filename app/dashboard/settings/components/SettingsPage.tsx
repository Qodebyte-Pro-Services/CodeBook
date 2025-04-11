"use client"
import React, { useState } from 'react';
import UploadImage from '../../teachers/add-teacher/compoenent/UploadInput';
import {  MonitorSmartphone, ShieldCheck, SquareMousePointer, Trash } from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('Security');

  const tabs = ['General', 'Security', 'Admin Team', 'Notifications'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'General':
        return (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-6">General Settings</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Account Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className='w-2/3'>
                    <p className="font-medium">Name</p>
                    <p className="text-sm text-gray-600 border-1 border-gray-500 rounded-lg px-3 py-2">John Doe</p>
                  </div>
                  <button className="text-blue-500">Edit</button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className='w-2/3'>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600 border-1 border-gray-500 rounded-lg px-3 py-2">john.doe@example.com</p>
                  </div>
                  <button className="text-blue-500">Edit</button>
                </div>

                <div className="flex justify-between items-center">
                  <div className='w-2/3'>
                    <p className="font-medium">Urls</p>
                    <p className="text-sm text-gray-600 border-1 border-gray-500 rounded-lg px-3 py-2">john.doe.com</p>
                  </div>
                  <button className="text-blue-500">Edit</button>
                </div>

                <div className="flex justify-between items-center">
                  <div className='w-2/3'>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-600 border-1 border-gray-500 rounded-lg px-3 py-2">1234567890</p>
                  </div>
                  <button className="text-blue-500">Edit</button>
                </div>

                <div className="flex justify-between items-center">
                  <div className='w-2/3'>
                    <p className="font-medium">School Logo</p>
                    <UploadImage onChange={(file: File | null) => {
                      if (file) {
                        console.log(file);
                      }
                    }}/>
                  </div>
                  <button className="text-blue-500">Edit</button>
                </div>
                
                
                
                <div className="flex justify-between items-center">
                  <div className='w-2/3'>
                    <p className="font-medium">Timezone</p>
                    <p className="text-sm text-gray-600 border-1 border-gray-500 rounded-lg px-3 py-2">(GMT+01:00) West Central Africa</p>
                  </div>
                  <button className="text-blue-500">Edit</button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Preferences</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className='w-2/3'>
                    <p className="font-medium">Language</p>
                    <p className="text-sm text-gray-600 border-1 border-gray-500 rounded-lg px-3 py-2 ">English (United States)</p>
                  </div>
                  <button className="text-blue-500">Edit</button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className='w-2/3'>
                    <p className="font-medium">Theme</p>
                    <p className="text-sm text-gray-600 border-1 border-gray-500 rounded-lg px-3 py-2">System default</p>
                  </div>
                  <button className="text-blue-500">Edit</button>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'Security':
        return (
          <div className="p-6">
            <div className="bg-blue-100 rounded-lg p-4 flex xl:flex-row flex-col xl:items-center xl:gap-0 gap-3 justify-between mb-6">
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">Your account security is 90%</p>
                  <p className="text-sm text-gray-600">
                    Please review your account security settings regularly and update your password
                  </p>
                </div>
              </div>
              <div className='flex'>
                <button className="text-blue-500 mr-2">Dismiss</button>
                <button className="bg-blue-500 text-white sm:px-4 sm:py-2 px-1 py-2 rounded-lg">Review security</button>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">Basics</h2>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold">Password</p>
                  <p className="text-sm text-gray-600">Set a password to protect your account</p>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">
                  <ShieldCheck />
                  </span>
                  <span className="text-sm text-green-500 mr-4">Very secure</span>
                  <button className="text-blue-500">Edit</button>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold">Two-step verification</p>
                  <p className="text-sm text-gray-600 sm:w-full w-[90%]">We recommend requiring a verification code in addition to your password</p>
                </div>
                <div className="flex sm:flex-row flex-col  items-center">
                  <label className="inline-flex  relative items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    <span className="ml-3 xl:block hidden text-sm font-medium text-gray-900">Two-step verification</span>
                  </label>
                  <button className="text-blue-500 ml-4">Edit</button>
                </div>
              </div>
            </div>

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
      
      case 'Admin Team':
        return (
          <div className="p-6">
            <h2 className="md:text-xl text-[13px] font-semibold mb-6">Admin Settings</h2>
            
            <div className="mb-8">
              <div className="flex md:flex-row flex-col justify-between md:items-center mb-4">
                <h3 className="md:text-lg text-[sm] font-medium">Admin Members</h3>
                <button className="bg-blue-500 text-white md:px-4 md:py-2 px-1 py-2 rounded-lg ">Add New Admin</button>
              </div>
              
              <div className="border border-gray-200 rounded-lg xl:overflow-hidden overflow-x-scroll">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            JD
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">John Doe</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">john.doe@example.com</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                         Super Admin
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-500 mr-3">Edit</button>
                        <button className="text-red-500">Remove</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                            AS
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Alice Smith</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">alice.smith@example.com</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Admin
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-500 mr-3">Edit</button>
                        <button className="text-red-500">Remove</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Admin Settings</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Admin Team Name</p>
                    <p className="text-sm text-gray-600">Acme Inc.</p>
                  </div>
                  <button className="text-blue-500">Edit</button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Team Domain</p>
                    <p className="text-sm text-gray-600">acme-inc.example.com</p>
                  </div>
                  <button className="text-blue-500">Edit</button>
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
                      <p className="font-medium">Product updates</p>
                      <p className="text-sm text-gray-600">Receive updates about new features and improvements</p>
                    </div>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Security alerts</p>
                      <p className="text-sm text-gray-600">Get notified about important security updates</p>
                    </div>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Marketing communications</p>
                      <p className="text-sm text-gray-600">Receive newsletters and promotional emails</p>
                    </div>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
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
                      <p className="font-medium">Task assignments</p>
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
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
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
  );
};

export default SettingsPage;