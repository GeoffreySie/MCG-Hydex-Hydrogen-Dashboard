// components/ProtectedRoute.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../app/context/AuthContext';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push('/signin'); // Redirect to sign-in page if not authenticated
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Optionally, render a loading spinner or similar
  }

  return <>{children}</>;
};

export default ProtectedRoute;