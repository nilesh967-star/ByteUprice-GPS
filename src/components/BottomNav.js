import React from 'react';
import './BottomNav.css';
import { FaMap, FaFileAlt, FaCog } from 'react-icons/fa';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-item">
        <FaMap />
        <span>Map</span>
      </div>
      <div className="nav-item">
        <FaFileAlt />
        <span>Report</span>
      </div>
      <div className="nav-item">
        <FaCog />
        <span>Setting</span>
      </div>
    </div>
  );
};

export default BottomNav;
