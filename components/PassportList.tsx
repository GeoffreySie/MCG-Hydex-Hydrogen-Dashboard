"use client";

import React, { useState } from 'react';
import CollapsibleSidebar from '@/components/passport/CollapsibleList';
import FullScreenList from '@/components/passport/FullScreenList';
import OutlineButton from './ui/OutlineButton';

interface PassportListProps {
  productIds: string[];
  onPassportClick: (productId: string) => void;
}

const PassportList: React.FC<PassportListProps> = ({ productIds, onPassportClick }) => {
  console.log('PassportList received productIds:', productIds);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProductIds = productIds.filter((productId) =>
    productId.toLowerCase().includes(searchTerm.toLowerCase())
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
        filteredData={filteredProductIds}
        onPassportClick={onPassportClick}
      />
      
      {/* Full-Screen List for Small Screens */}
      <FullScreenList
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        filteredData={filteredProductIds}
        onPassportClick={onPassportClick}
      />
    </>
  );
};

export default PassportList;
