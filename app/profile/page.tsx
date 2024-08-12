// app/profile/page.tsx
'use client';

import React from 'react';
import SidebarMenu from '@/components/SidebarMenu';
import ProfileContainer from '@/components/ProfileContainer';

const ProfilePage: React.FC = () => {
  // For now, we'll use a placeholder user ID
  const placeholderUserId = "64c9b5f4f2c4b7a0b8b45678";

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="rounded-md flex flex-col md:flex-row bg-neutral-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-screen">
        <SidebarMenu />
        <div className="flex-1 overflow-y-auto">
          <ProfileContainer userId={placeholderUserId} />
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
