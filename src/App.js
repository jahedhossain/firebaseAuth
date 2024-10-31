import { useEffect, useState } from "react";
import "./App.css";
import AuthPage from "./AuthPage"; // Ensure this import is correct
import { auth } from "./firebase";
import { signOut } from 'firebase/auth';

function App() {
  const [user, setUser] = useState({
    displayName: '',
    email: '',
    photoURL: ''
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  return (
    <div className="App">
      <div>
        {user ? (
          <>
            <h1>Welcome, {user.displayName}</h1>
            <p>Email: {user.email}</p>
            <img src={user.photoURL} alt={user.displayName} />
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <AuthPage onUserSignIn={setUser} /> // Pass setUser to AuthPage
        )}
      </div>
    </div>
  );
}

export default App;
