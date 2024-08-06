"use client";

import React, { useEffect, useState } from 'react';
import ProductPassport from '@/components/ProductPassport';
import { ProductData } from '@/passport-types';

const PassportContainer: React.FC = () => {
  const [data, setData] = useState<ProductData | null>(null);

  useEffect(() => {
    fetch('/passport-data.json')
      .then(response => response.json())
      .then((data: ProductData) => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="xl:p-12 lg:p-8 p-4 w-screen h-screen flex flex-col overflow-y-scroll">
      <div className="mb-4 mt-8 flex items-end gap-2">
        <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Hydrogen Passport</h1>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">AD256/0</h1>
      </div>
      {data && <ProductPassport data={data} compact={false}/>}
    </div>
  );
};

export default PassportContainer;
