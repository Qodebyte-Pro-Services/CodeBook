"use client"


import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import MobileNavToggleButton from './MobileNavToggleButton';

import InteractiveLinks from './InteractiveLinks';

const DashboardHeader = () => {
  const [greeting, setGreeting] = useState('');
  const [timeOfDayImage, setTimeOfDayImage] = useState('/next.svg');

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 12) {
      setGreeting('Good Morning');
      setTimeOfDayImage('/Sun.png');
    } else if (hour >= 12 && hour < 16) {
      setGreeting('Good Afternoon');
      setTimeOfDayImage('/Night.png');
    } else if (hour >= 16 && hour < 18) {
      setGreeting('Good Evening');
      setTimeOfDayImage('/Night-(1).png');
    } else {
      setGreeting('Good Night');
      setTimeOfDayImage('/Night-(1).png');
    }
  }, []);

  return (
    <header className="bg-white h-[70px] sm:p-6 p-1 shadow-md rounded-md mb-3 flex justify-between gap-3 sm:gap-0 mr-2 sm:mr-0 items-center">
         <MobileNavToggleButton/>
      <div className="flex items-center">
        <Image
          src={timeOfDayImage}
          alt="Time of Day"
          width={48}
          height={48}
          className="sm:w-12 sm:h-12 w-8 h-6 rounded-full sm:mr-4 mr-2"
        />
        <span className="font-semibold sm:text-2xl text-[10px] flex">{greeting}</span>
      </div>

    <InteractiveLinks/>
    </header>
  );
};

export default DashboardHeader;