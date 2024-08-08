"use client";

import React, { useEffect, useState } from 'react';
import ProductPassport from '@/components/ProductPassport';
import { ProductData } from '@/passport-types';

interface DPPDataProps {
  currentSelectedProductId: string;
}

const DPPData: React.FC<DPPDataProps> = ({ currentSelectedProductId })  => {
  const [data, setData] = useState<ProductData | null>(null);

  useEffect(() => {
    fetch('/passport-data.json')
      .then(response => response.json())
      .then((data: ProductData) => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center space-y-4 p-2">
      <div className="mb-4 mt-8 flex items-end gap-2">
        <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Hydrogen Passport</h1>
      </div>
      {data && <ProductPassport currentSelectedProductId={currentSelectedProductId} compact={true}/>}
    </div>
  );
};

export default DPPData;