"use client";

import React, {useState} from 'react';
import ProductPassport from '@/components/ProductPassport';
import PassportList from './PassportList';

interface PassportContainerProps {
  currentSelectedProductId: string | null;
}

const PassportContainer: React.FC<PassportContainerProps> = ({ currentSelectedProductId }) => {
  const [data, setData] = useState<ProductData[]>([]);
  const [selectedPassport, setSelectedPassport] = useState<ProductData | null>(null);

const handlePassportClick = (passport: ProductData) => {
  setSelectedPassport(passport);
};
  return (
    <div className='flex flex-row w-screen h-screen'>
      <PassportList 
        data={data} 
        onPassportClick={handlePassportClick} 
      />

    <div className="xl:p-12 lg:p-8 p-4 w-screen h-screen flex flex-col overflow-y-scroll">
      <div className="mb-4 mt-8 flex items-end gap-2">
        <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Hydrogen Passport</h1>
      </div>
      <ProductPassport currentSelectedProductId={currentSelectedProductId} compact={false} />
    </div>
    </div>
  );
};

export default PassportContainer;