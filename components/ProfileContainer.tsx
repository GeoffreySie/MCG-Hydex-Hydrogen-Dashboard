// components/ProfileContainer.tsx

import React from 'react';

interface ProfileContainerProps {
  userName: string;
}

const ProfileContainer: React.FC<ProfileContainerProps> = ({ userName }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{userName}</h2>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium">User details</h3>
        <ul className="list-disc list-inside ml-4">
          <li className="text-blue-500 cursor-pointer">Change email</li>
          <li className="text-blue-500 cursor-pointer">Change password</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium">Pricing plan</h3>
        <ul className="list-disc list-inside ml-4">
          <li className="text-blue-500 cursor-pointer">Change plan</li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium">Map settings</h3>
        <div className="ml-4">
          <label htmlFor="mode" className="block text-sm font-medium text-gray-700">Change mode</label>
          <select id="mode" name="mode" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>Light</option>
            <option>Dark</option>
            <option>Satellite</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
