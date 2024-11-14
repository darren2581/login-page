import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our App</h1>
      <p>Please choose an option below to get started:</p>
      <div className="button-group">
        <Link to="/signup" className="home-button">
          Sign Up
        </Link>
        <Link to="/login" className="home-button">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
