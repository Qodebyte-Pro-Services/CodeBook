import React from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone, CalendarDays, Ellipsis } from 'lucide-react';

const ParentInfoCard = () => {
  return (
    <div className="bg-white rounded-lg p-9 shadow-md w-full">
      <div className="flex items-center justify-between mb-4">
        <Image src="/Ellipse-702.png" alt="Parent Profile" width={60} height={60} className="rounded-full" />
        <div className="text-gray-950 cursor-pointer">
        <Ellipsis/>
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-5">Mr. Qodebyte</h3>
      <div className="flex items-center mb-4">
        <MapPin className="mr-2 text-gray-500" />
        <span className="text-sm text-gray-600">3 Presidential road, obiagu Enugu, Enugu State</span>
      </div>
      <div className="flex items-center mb-5">
        <Mail className="mr-2 text-gray-500" />
        <span className="text-sm text-gray-600">qodebyte347@gmail.com</span>
      </div>
      <div className="flex items-center mb-5">
        <Phone className="mr-2 text-gray-500" />
        <span className="text-sm text-gray-600">+2349059484839</span>
      </div>
      <div className="flex items-center">
        <CalendarDays className="mr-2 text-gray-500" />
        <span className="text-sm text-gray-600">8 November 2021</span>
      </div>
    </div>
  );
};

export default ParentInfoCard;