// app/dashboard/page.tsx
"use client";
import InfoWindow from '@/components/InformationWindow';
import Map from '@/components/Map';
import Sidebar from '@/components/Sidebar';

const DashboardPage = () => {
  return (
    <main> 
    <div className='flex'>
      <InfoWindow />
    </div>
    <div className='hidden md:block'>
      <Sidebar />
    </div>
    <div className='w-screen h-screen'>
        <Map />
    </div>
    </main>
  );
};

export default DashboardPage;
