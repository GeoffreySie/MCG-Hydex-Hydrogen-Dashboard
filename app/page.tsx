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
        {/* <PassportList data=provide the data here onPassportClick=provide the onPassportClick function here /> */}
        </div>

        <div className='z-10'>
          <InfoWindow />
        </div>

        <div className='absolute w-screen h-screen z-0'>
            <Map currentSelectedProductId={"60d5ecb54f761c001f8e95d5"}/>
        </div>

    </div>
    </main>
  );
};

export default DashboardPage;

