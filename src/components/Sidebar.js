import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Setting</h2>
      </div>
      <ul className="menu-items">
        <li>About Us</li>
        <li>Device</li>
        <li>Geofences</li>
        <li>Saved Commands</li>
        <li>Notifications</li>
      </ul>
      <div className="logout-btn">
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
