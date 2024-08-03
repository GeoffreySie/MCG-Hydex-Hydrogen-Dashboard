import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from '@/components/ui/SearchBar';
import PassportItem from './PassportItem';
import { IconX } from '@tabler/icons-react';
import { ProductData } from '@/passport-types';

interface FullScreenListProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredData: ProductData[];
  onPassportClick: (passport: ProductData) => void;
}

const FullScreenList: React.FC<FullScreenListProps> = ({
  isOpen,
  setIsOpen,
  searchTerm,
  handleSearchChange,
  filteredData,
  onPassportClick
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 20,
          duration: 0.5
        }}
        className="fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col items-center"
      >
        <div
          className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <button className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full">
            <IconX size={24} />
          </button>
        </div>
        <motion.h1 
          className="w-full text-center text-neutral-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Saved Passports
        </motion.h1>
        <SearchBar value={searchTerm} onChange={handleSearchChange} />
        <ul className="w-full mt-4">
          <AnimatePresence>
            {filteredData.map((productPassport) => (
              <PassportItem 
                key={productPassport.consignmentId} 
                passport={productPassport} 
                onClick={() => onPassportClick(productPassport)} 
              />
            ))}
          </AnimatePresence>
        </ul>
      </motion.div>
    )}
  </AnimatePresence>
);

export default FullScreenList;
