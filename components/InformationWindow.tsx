import React, { useState } from 'react';


const InformationWindow = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [miniWindow, setMiniWindow] = useState(true);

  return (
    <div className={`fixed bottom-0 inset-x-0 mx-auto w-5/6 ${ miniWindow ? 'h-1/2' : 'h-screen'} bg-white  z-10`}>
    {/* <div className="w-1/4 h-screen fixed right-5 top-5 bg-white shadow-lg z-10"> */}
      <div className="flex justify-around bg-gray-200 p-2">
        <button
          className={`p-2 ${activeTab === 'tab1' ? 'bg-gray-300' : ''}`}
          onClick={() => setActiveTab('tab1')}
        >
          Tab 1
        </button>
        <button
          className={`p-2 ${activeTab === 'tab2' ? 'bg-gray-300' : ''}`}
          onClick={() => setActiveTab('tab2')}
        >
          Tab 2
        </button>
        <button
          className={`p-2 ${activeTab === 'tab3' ? 'bg-gray-300' : ''}`}
          onClick={() => setActiveTab('tab3')}
        >
          Tab 3
        </button>
      </div>
      <div className="p-4">
        {activeTab === 'tab1' && <div className=''>Content for Tab 1</div>}
        {activeTab === 'tab2' && <div>Content for Tab 2</div>}
        {activeTab === 'tab3' && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default InformationWindow;
