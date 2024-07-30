// app/dashboard/page.tsx
"use client";
import InfoWindow from '@/components/InformationWindow';
import Map from '@/components/Map';
import SidebarMenu from '@/components/SidebarMenu';
import PassportList from '@/components/PassportList';

const DashboardPage = () => {
  return (
    <main> 
    <div className='fixed h-full z-10 rounded-md flex flex-col md:flex-row w-max flex-1 mx-auto overflow-hidden",
      "h-screen'>
      <SidebarMenu />
      <PassportList />
    </div>
    <div className='flex'>
      <InfoWindow />
    </div>
    <div className='w-screen h-screen'>
        <Map />
    </div>
    </main>
  );
};

export default DashboardPage;

