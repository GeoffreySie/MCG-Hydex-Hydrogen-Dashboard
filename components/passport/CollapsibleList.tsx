import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from '@/components/ui/SearchBar';
import ToggleButton from '@/components/passport/ToggleButton';
import PassportItem from '@/components/passport/PassportItem';

interface CollapsibleListProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredData: Array<{ id: string }>;
}

const CollapsibleList: React.FC<CollapsibleListProps> = ({
  isCollapsed,
  toggleCollapse,
  searchTerm,
  handleSearchChange,
  filteredData
}) => (
  <div className="hidden md:flex h-full relative">
    <div className={`flex flex-col items-center transition-all duration-300 ${isCollapsed ? 'w-0 overflow-hidden p-0 m-0' : 'w-72 p-4 border bg-white'}`}>
      {!isCollapsed && (
        <motion.h1 
          className="text-center text-neutral-700 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Saved Passports
        </motion.h1>
      )}
      {!isCollapsed && (
        <>
          <SearchBar value={searchTerm} onChange={handleSearchChange} />
          <ul className="w-full mt-2">
            <AnimatePresence>
              {filteredData.map((productPassport) => (
                <PassportItem key={productPassport.id} id={productPassport.id} />
              ))}
            </AnimatePresence>
          </ul>
        </>
      )}
    </div>
    <ToggleButton isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
  </div>
);

export default CollapsibleList;
