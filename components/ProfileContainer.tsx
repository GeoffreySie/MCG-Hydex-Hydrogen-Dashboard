import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import LoadingScreen from './LoadingScreen';
import { useUser } from '../lib/hooks/useUser';

interface ProfileContainerProps {
  userId: string;
}

const ProfileContainer: React.FC<ProfileContainerProps> = ({ userId }) => {
  const { user, isLoading, isError } = useUser(userId);

  if (isLoading) return <LoadingScreen />;
  if (isError) return <div>Error loading user data</div>;
  if (!user) return <div>No user data found</div>;

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center">
            <FaUserCircle className="text-4xl text-gray-500 mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">{user.name}</h2>
          </div>
          <div className="flex items-center justify-between text-sm mt-4">
            <p className="mt-1 max-w-2xl text-gray-500">{user.email}</p>
            <button className="text-blue-600 hover:text-blue-800">Change email</button>
          </div>
          <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm">Change password</button>
        </div>
        <div className="border-t border-gray-200">
          <dl className="grid grid-cols-1 sm:grid-cols-3">
            <div className="bg-gray-50 px-4 py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Current Plan</dt>
              <dd className="mt-1 flex items-center text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.userPlan}
                <button className="ml-4 text-blue-600 hover:text-blue-800">Change plan</button>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Map Preference</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <select
                  id="mapPreference"
                  name="mapPreference"
                  className="mt-1 block w-full pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Light</option>
                  <option>Dark</option>
                  <option>Satellite</option>
                </select>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
