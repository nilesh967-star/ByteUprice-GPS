import React from 'react';
import './MainContent.css';
import StatsCard from './StatsCard';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="about-section">
        <h3>How It's Going</h3>
        <h1>Revolutionizing Package Tracking: Secure, Real-Time, Everywhere.</h1>
        <p>
          We are transforming package tracking with a cutting-edge, cost-effective solution designed for both individuals and enterprises. Our platform ensures reliable tracking for local and international shipments across all environments.
        </p>
      </div>
      <div className="image-section">
        <img src="team-working.jpg" alt="Team working" />
      </div>
      <div className="stats-section">
        <StatsCard title="3.5" subtitle="Years Experience" />
        <StatsCard title="23" subtitle="Project Challenges" />
        <StatsCard title="500k+" subtitle="Positive Reviews" />
        <StatsCard title="1M+" subtitle="Package Placed" />
      </div>
    </div>
  );
};

export default MainContent;
