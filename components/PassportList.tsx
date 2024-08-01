"use client";

import React, { useState } from 'react';
import { data } from '@/data';
import CollapsibleSidebar from '@/components/passport/CollapsibleList';
import FullScreenList from '@/components/passport/FullScreenList';
import OutlineButton from './ui/OutlineButton';

const PassportList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((productPassport) =>
    productPassport.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Button for Small Screens */}
      <div className="md:hidden absolute top-2 left-4 z-10">
        <OutlineButton title="Show Passports" onClick={() => setIsOpen(true)} />
      </div>
      
      {/* Collapsible Passport List for Large Screens */}
      <CollapsibleSidebar
        isCollapsed={isCollapsed}
        toggleCollapse={() => setIsCollapsed(!isCollapsed)}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        filteredData={filteredData}
      />
      
      {/* Full-Screen List for Small Screens */}
      <FullScreenList
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        filteredData={filteredData}
      />
    </>
  );
};

export default PassportList;
