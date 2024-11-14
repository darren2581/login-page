import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import RegistrationPage from './RegistrationPage';
import SignUp from './SignUp';
import Login from './Login';
import SignOut from './SignOut';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import { MainPage } from './MainPage';  // Named import


const Authentication = () => {
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
            <Route path="/" element={<RegistrationPage />} />
            <Route path="/signup" element={user ? <Navigate to="/profile-details" /> : <SignUp />} />
            <Route path="/login" element={user ? <Navigate to="/profile-details" /> : <Login />} />

            {/* Protected Routes */}
            <Route path="/signout" element={user ? <SignOut /> : <Navigate to="/login" />} />
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
            <Route path="/profile-details" element={user ? <ProfileDetails /> : <Navigate to="/login" />} />

            <Route path="/mainpage" element={<MainPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Authentication