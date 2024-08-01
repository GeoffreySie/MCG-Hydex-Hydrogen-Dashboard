// app/dashboard/page.tsx
"use client";
import InfoWindow from '@/components/InformationWindow';
import Map from '@/components/Map';
import SidebarMenu from '@/components/SidebarMenu';
import PassportList from '@/components/PassportList';

const DashboardPage = () => {
  return (
    <main> 
    {/* <div className='fixed h-full z-10 rounded-md flex flex-col md:flex-row w-max flex-1 mx-auto overflow-hidden",
      "h-screen'> */}
      <div className='flex'>
        <div className='z-30 h-screen'>
          <SidebarMenu />
        </div>

        <div className='z-20'>
        <PassportList />
        </div>

        <div className='z-10'>
          <InfoWindow />
        </div>

        <div className='absolute w-screen h-screen z-0'>
            <Map />
        </div>

    </div>
    </main>
  );
};

export default DashboardPage;

