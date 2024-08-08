// app/dashboard/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import InfoWindow from '@/components/InformationWindow';
import Map from '@/components/Map';
import SidebarMenu from '@/components/SidebarMenu';
import PassportList from '@/components/PassportList';

const DashboardPage = () => {
  const [currentSelectedProductId, setCurrentSelectedProductId] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>("64c9b5f4f2c4b7a0b8b45678");
  const [productIds, setProductIds] = useState<string[]>([]);
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

  return (
    <main>
      <div className='flex'>
        <div className='z-30 h-screen'>
          <SidebarMenu />
        </div>

        <div className='z-20'>
          <PassportList onPassportClick={handlePassportClick} productIds={productIds}/>
        </div>

        <div className='z-10'>
          <InfoWindow currentSelectedProductId={currentSelectedProductId} />
        </div>

        <div className='absolute w-screen h-screen z-0'>
          <Map currentSelectedProductId={currentSelectedProductId} />
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;