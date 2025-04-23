
"use client";

import React, { useState } from 'react';
import MobileNavBar from './MobileNavBar';
import { Menu } from 'lucide-react';

const MobileNavToggleButton = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <button
        onClick={toggleMobileNav}
        className="lg:hidden p-2 m-2 bg-gray-200 rounded-sm w-[50px] h-[50px] top-4 left-4 z-10  flex items-center justify-center  " 
        aria-label="Open mobile navigation"
      >
       <Menu />
      </button>
      {isMobileNavOpen && <MobileNavBar onClose={toggleMobileNav} />}
    </>
  );
};

export default MobileNavToggleButton;