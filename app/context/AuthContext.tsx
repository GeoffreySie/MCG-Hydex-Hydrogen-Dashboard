"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CognitoUser } from 'amazon-cognito-identity-js';
import userPool from '../../lib/UserPool';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  setIsAuthenticated: (value: boolean) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUserSession = () => {
      const user = userPool.getCurrentUser();
      if (user) {
        user.getSession((err: any, session: any) => {
          if (err) {
            console.error('Error getting session:', err);
            setIsAuthenticated(false);
          } else {
            setIsAuthenticated(session.isValid());
          }
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    };

    checkUserSession();
  }, []);

  const signOut = () => {
    const user = userPool.getCurrentUser();
    if (user) {
      user.signOut();
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, setIsAuthenticated, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};