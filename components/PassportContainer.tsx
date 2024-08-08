"use client";

import React, { useState, useEffect } from 'react';
import ProductPassport from '@/components/ProductPassport';
import PassportList from './PassportList';
import LoadingScreen from './LoadingScreen';

interface PassportContainerProps {
  userId: string;
}

const PassportContainer: React.FC<PassportContainerProps> = ({ userId }) => {
  const [productIds, setProductIds] = useState<string[]>([]);
  const [currentSelectedProductId, setCurrentSelectedProductId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductIds = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        setProductIds(userData.products || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductIds();
  }, [userId]);

  const handlePassportClick = (productId: string) => {
    setCurrentSelectedProductId(productId);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='flex flex-row w-screen h-screen'>
      <PassportList 
        productIds={productIds} 
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
