// app/profile/page.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import SidebarMenu from '@/components/SidebarMenu';
import ProfileContainer from '@/components/ProfileContainer';

const ProfilePage: React.FC = () => {
  const router = useRouter();

  const handleClose = () => {
    router.push('/'); // Redirect to the home page or any other page
  };

  return (
    <main>
        <div
      className="rounded-md flex flex-col md:flex-row bg-neutral-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-screen" >
        <SidebarMenu />
        <ProfileContainer />
      </div>
    </main>
  );
};

export default ProfilePage;
