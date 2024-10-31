// AuthPage.js
import React from 'react';
import { auth, provider } from './firebase'; // Adjust the path as needed
import { signInWithPopup, } from 'firebase/auth';

const AuthPage = () => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User Info:', user);
      // Handle user info, e.g., save it to your state or redirect
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sign in with Google</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default AuthPage;
