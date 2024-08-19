"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import userPool from '../../lib/UserPool';
import { useAuth } from '../context/AuthContext'; // Import useAuth

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between sign-in and sign-up
  const router = useRouter();
  const { setIsAuthenticated } = useAuth(); // Destructure setIsAuthenticated from useAuth

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    const user = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    user.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log('Sign in successful!', result);
        setIsAuthenticated(true); // Update authentication state
        router.push('/dashboard'); // Redirect to dashboard
      },
      onFailure: (err) => {
        console.error('Sign in failed:', err);
        setError(err.message || 'An error occurred during sign in.');
        setLoading(false);
      },
    });
  };

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    userPool.signUp(email, password, [], [], (err, result) => {
      if (err) {
        console.error('Sign up failed:', err);
        setError(err.message || 'An error occurred during sign up.');
        setLoading(false);
        return;
      }
      console.log('Sign up successful!', result);
      setIsSignUp(false); // Switch back to sign-in form
      setLoading(false);
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <form onSubmit={isSignUp ? handleSignUp : handleSignIn} className="bg-white w-1/3 p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border rounded w-full py-2 px-3"
          />
        </div>
        {isSignUp && (
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="border rounded w-full py-2 px-3"
            />
          </div>
        )}
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button
          type="submit"
          className={`px-4 py-2 rounded-md bg-green-800 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-green-800${loading ? ' opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      <div className="mt-4">
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-blue-500 underline"
        >
          {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};
  export default SignInPage;