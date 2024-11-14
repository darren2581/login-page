import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase'; // Ensure db is properly exported from your Firebase config file
import { doc, getDoc } from 'firebase/firestore';
import LogOutHeader from './LogOutHeader'; // Import the LogOutHeader component
import '../styles/ProfileDetails.css';

const ProfileDetails = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Ensure the user is authenticated
        const user = auth.currentUser;
        if (!user) {
          throw new Error('No user is logged in');
        }

        // Get a reference to the user's document
        const profileRef = doc(db, 'users', user.uid);
        const profileSnap = await getDoc(profileRef);

        if (profileSnap.exists()) {
          setProfile(profileSnap.data());
        } else {
          console.log('No profile found');
        }
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('Could not fetch profile information');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="profile-details-page">
      <LogOutHeader /> {/* Add the LogOutHeader component here */}
      <div className="profile-details-container">
        <h2>Profile Details</h2>
        {profile ? (
          <div className="profile-details">
            <p><strong>Full Name:</strong> {profile.fullName}</p>
            <p><strong>Username:</strong> {profile.username}</p>
            <p><strong>Email:</strong> {auth.currentUser?.email}</p>
            <p><strong>Gender:</strong> {profile.gender}</p>
            <p><strong>Address:</strong> {profile.address}</p>
          </div>
        ) : (
          <p>No profile data found.</p>
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
