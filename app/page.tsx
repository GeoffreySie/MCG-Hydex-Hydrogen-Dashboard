// app/dashboard/page.tsx
"use client";
import InfoWindow from '@/components/InformationWindow';
import Map from '@/components/Map';
import SidebarMenu from '@/components/SidebarMenu';

const DashboardPage = () => {
  return (
    <main> 
    <div className='flex'>
      <InfoWindow />
    </div>
      <div className='fixed h-full z-10'>
      <SidebarMenu />
      </div>
    <div className='w-screen h-screen'>
        <Map />
    </div>
    </main>
  );
};

export default DashboardPage;
