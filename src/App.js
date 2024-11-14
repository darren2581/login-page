import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import SignOut from './components/SignOut';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import './App.css'; // Import global CSS for consistent styles

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Stop loading after the auth check
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="loading-screen">Loading...</div>; // Show a loading screen if needed

  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={user ? <Navigate to="/profile-details" /> : <SignUp />} />
            <Route path="/login" element={user ? <Navigate to="/profile-details" /> : <Login />} />

            {/* Protected Routes */}
            <Route path="/signout" element={user ? <SignOut /> : <Navigate to="/login" />} />
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
            <Route path="/profile-details" element={user ? <ProfileDetails /> : <Navigate to="/login" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
