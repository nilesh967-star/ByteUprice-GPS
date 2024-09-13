import React from 'react';
import './StatsCard.css';

const StatsCard = ({ title, subtitle }) => {
  return (
    <div className="stats-card">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default StatsCard;
