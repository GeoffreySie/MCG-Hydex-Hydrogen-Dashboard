"use client";

import React, { useEffect, useState } from 'react';
import ProductPassport from '@/components/ProductPassport';
import { ProductData } from '@/passport-types';
import PassportList from '@/components/PassportList';
import PassportHeader from '@/components/passport/PassportHeader';

const PassportContainer: React.FC = () => {
  const [data, setData] = useState<ProductData[]>([]);
  const [selectedPassport, setSelectedPassport] = useState<ProductData | null>(null);

  useEffect(() => {
    fetch('/passport-data.json')
      .then(response => response.json())
      .then((data: ProductData[]) => {
        setData(data);
        setSelectedPassport(data[0]); // Set the default selected passport
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handlePassportClick = (passport: ProductData) => {
    setSelectedPassport(passport);
  };

  return (
    <div className='flex flex-row'>
      <PassportList 
        data={data} 
        onPassportClick={handlePassportClick} 
      />

      <div className="xl:p-12 lg:p-8 p-4 w-screen h-screen flex flex-col overflow-y-scroll">
        {selectedPassport && (
          <>
            <PassportHeader id={selectedPassport.id} /> 
            <ProductPassport data={selectedPassport} />
          </>
        )}
      </div>
      {selectedPassport && <ProductPassport data={selectedPassport} compact={false}/>}
    </div>
  );
};

export default PassportContainer;

