import React from 'react';
import './Sidebarm.css';

const Sidebarm = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Package GPS Tracking</h2>
      </div>
      <input type="text" placeholder="Search Package" className="search-box" />
      <div className="package-list">
        <div className="package-item">
          <p>My Vehicle</p>
          <span className="status online">Online</span>
        </div>
      </div>
      <div className="user-profile">
        <img src="profile.jpg" alt="User" />
      </div>
    </div>
  );
};

export default Sidebarm;
