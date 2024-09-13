import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <h2>About Us</h2>
      <div className="user-profile">
        <img src="profile.jpg" alt="User Profile" />
      </div>
    </div>
  );
};

export default TopBar;
