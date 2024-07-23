import React, { useState, useEffect } from 'react';
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import RouteLocElement from './RouteLocElement';



const InformationWindow = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [miniWindow, setMiniWindow] = useState(true);

const [locations, setLocations] = useState([]);

useEffect(() => {
  async function fetchLocations() {
    const response = await fetch('/locations.json');
    const data = await response.json();
    setLocations(data.locations);
  }
  fetchLocations();
}, []);

  return (
    <div
  className={`z-10 bottom-0 inset-x-0 mx-auto w-5/6 fixed bg-white rounded-t-2xl drop-shadow-xl ${
    miniWindow ? 'h-1/2' : 'h-screen'
  } md:bg-blue-100 md:top-0 md:w-1/4 md:right-0 md:left-auto md:mx-0 md:m-2 md:mr-2 md:rounded-b-2xl`}
>
  <div className="flex justify-between space-x-1 pt-2 px-2 bg-orange-200 rounded-t-2xl">
    <button
      className={`w-full text-sm rounded-t-md ${activeTab === 'tab1' ? 'bg-blue-100' : 'bg-orange-100'}`}
      onClick={() => setActiveTab('tab1')}
    >
      Route
    </button>
    <button
      className={`w-full text-sm rounded-t-md ${activeTab === 'tab2' ? 'bg-blue-100' : 'bg-orange-100'}`}
      onClick={() => setActiveTab('tab2')}
    >
      IoT
    </button>
    <button
      className={`w-full text-sm rounded-t-md ${activeTab === 'tab3' ? 'bg-blue-100' : 'bg-orange-100'}`}
      onClick={() => setActiveTab('tab3')}
    >
      DDP
    </button>
    <button
      className="bg-blue-400 rounded-full"
      onClick={() => setMiniWindow(!miniWindow)}
    >
      <MdExpandMore className={`${miniWindow ? 'hidden' : 'block'}`} />
      <MdExpandLess className={`${miniWindow ? 'block' : 'hidden'}`} />
    </button>
  </div>
  <div className="p-4 text-black">
    {activeTab === 'tab1' && <div>
      <h1>Content for Tab 1</h1>
      {locations.map((location) => (
        <RouteLocElement key={location._id} location={location} />
      ))}
      
      </div>}
    {activeTab === 'tab2' && <div>Content for Tab 2</div>}
    {activeTab === 'tab3' && <div>Content for Tab 3</div>}
  </div>
</div>
  );
};

export default InformationWindow;
