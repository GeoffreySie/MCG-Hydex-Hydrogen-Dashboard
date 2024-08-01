import React, { useState, useEffect } from 'react';
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import RouteLocElement from './RouteLocElement';
import LoadingScreen from './LoadingScreen';
import IoTData from './InfoIoT';
import InfoDPP from './InfoDPP';



const InformationWindow = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [miniWindow, setMiniWindow] = useState(true);

  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  

  interface Location {
    _id: string;
    name: string;
    latitude: number;
    longitude: number;
    status: Date | null;
  }

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('/api/locations');
        const data: Location[] = await response.json(); // Ensure the fetched data is typed
        setLocations(data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocations();
  }, []);

  if(isLoading){
    return <LoadingScreen />;
  }

  return (
    <div
  className={`z-10 bottom-0 inset-x-0 mx-auto w-5/6 fixed bg-white rounded-t-2xl shadow-2xl shadow-black ${
    miniWindow ? 'h-1/2' : 'h-5/6'
  } md:bg-blue-100 md:top-0 md:w-1/4 md:right-0 md:left-auto md:mx-0 md:m-2 md:mr-2 md:rounded-b-2xl`}
>
  <div className="flex justify-between space-x-1 pt-2 px-2 text-black bg-blue-200 rounded-t-2xl">
    <button
      className={`w-full text-sm rounded-t-md ${activeTab === 'tab1' ? 'bg-white' : 'bg-stone-300'}`}
      onClick={() => setActiveTab('tab1')}
    >
      Route
    </button>
    <button
      className={`w-full text-sm rounded-t-md ${activeTab === 'tab2' ? 'bg-white' : 'bg-stone-300'}`}
      onClick={() => setActiveTab('tab2')}
    >
      IoT
    </button>
    <button
      className={`w-full text-sm rounded-t-md ${activeTab === 'tab3' ? 'bg-white' : 'bg-stone-300'}`}
      onClick={() => setActiveTab('tab3')}
    >
      DDP
    </button>
    <button
      className="bg-white rounded-full"
      onClick={() => setMiniWindow(!miniWindow)}
    >
      <MdExpandMore className={`${miniWindow ? 'hidden' : 'block'}`} />
      <MdExpandLess className={`${miniWindow ? 'block' : 'hidden'}`} />
    </button>
  </div>


  <div className="h-full overflow-hidden rounded-b-2xl">
    <div className="h-full overflow-y-auto bg-white text-black rounded-b-2xl">

      {activeTab === 'tab1' && <div className='p-4'>
        {locations.map((location) => (
          <RouteLocElement key={location._id} location={location} />
        ))}
        </div>}

      {activeTab === 'tab2' && <div className='p-1'>
        <IoTData />
        </div>}

      {activeTab === 'tab3' && <div>
        <InfoDPP />     
        </div>}
    </div>
  </div>
</div>
  );
};

export default InformationWindow;
