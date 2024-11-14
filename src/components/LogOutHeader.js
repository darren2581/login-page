import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LogOutHeader.css';

const LogOutHeader = () => {
  const navigate = useNavigate();

  const handleSignOutRedirect = () => {
    // Navigate to the SignOut page
    navigate('/signout');
  };

  const handleMainPageRedirect = () => {
    // Navigate to the MainPage page
    navigate('/mainpage');
  };

  return (
    <header className="logout-header">
      <div className="header-content">
        <h1 className="app-title">App</h1>
        <button onClick={handleSignOutRedirect} className="logout-button">Log Out</button>
        <button onClick={handleMainPageRedirect} className="mainpage-button">
          <span class="material-symbols-outlined">home</span>
        </button>
      </div>
    </header>
  );
};

export default LogOutHeader;