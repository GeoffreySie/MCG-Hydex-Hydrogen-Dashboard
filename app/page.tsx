// app/dashboard/page.tsx
"use client";
import React, { useState } from 'react';
import InfoWindow from '@/components/InformationWindow';
import Map from '@/components/Map';
import SidebarMenu from '@/components/SidebarMenu';
import PassportList from '@/components/PassportList';

const DashboardPage = () => {
  const [currentSelectedProductId, setCurrentSelectedProductId] = useState<string>("60d5ecb54f761c001f8e95d4");

  const handlePassportClick = (productId: string) => {
    setCurrentSelectedProductId(productId);
  };

  return (
    <main>
      <div className='flex'>
        <div className='z-30 h-screen'>
          <SidebarMenu />
        </div>

        <div className='z-20'>
          {/* <PassportList onPassportClick={handlePassportClick} /> */}
        </div>

        <div className='z-10'>
          <InfoWindow currentSelectedProductId={currentSelectedProductId} />
        </div>

        <div className='absolute w-screen h-screen z-0'>
          <Map currentSelectedProductId={currentSelectedProductId} />
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;