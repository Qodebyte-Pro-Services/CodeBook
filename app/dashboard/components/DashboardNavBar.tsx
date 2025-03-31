
"use client";

import { BadgeDollarSign, Boxes, Calendar, ChevronRight, Cog, GraduationCap, House } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const DashboardNavBar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: <House /> },
    { href: '/dashboard/teachers', label: 'Teachers', icon: <GraduationCap /> },
    { href: '/dashboard/manage-school', label: 'Manage School', icon: <GraduationCap /> },
    { href: '/dashboard/non-teaching-staff', label: 'Non - Teaching Staff', icon: <Boxes /> },
    { href: '/dashboard/finance', label: 'Finance', icon: <BadgeDollarSign /> },
    { href: '/dashboard/calendar', label: 'Calendar', icon: <Calendar /> },
    { href: '/dashboard/time-table', label: 'Time Table', icon: <Calendar /> },
    // { href: '/dashboard/message', label: 'Message', icon: <Mail /> },
    { href: '/dashboard/settings', label: 'Settings', icon: <Cog /> },
  ];

  return (
    <nav className="bg-white w-64 max-h-[650px] p-4 rounded-lg flex-col hidden lg:flex">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.href}>
          <Link
              href={item.href}
              className={`flex items-center p-2 justify-between rounded hover:bg-gray-100 ${
                pathname === item.href
                  ? 'bg-blue-100 text-blue-600'
                  : pathname.startsWith(item.href + '/') && item.href !== '/dashboard'
                  ? 'bg-blue-100 text-blue-600'
                  : ''
              }`}
            >
               <div className='gap-3 flex '>
               {item.icon}
               <span className="mr-2 text-sm">{item.label}</span>
               </div>

               <ChevronRight />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DashboardNavBar;