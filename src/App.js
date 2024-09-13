import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import TopBar from './components/upperbar';
import Sidebarm from './components/Sidebarm';
import MapViewm from './components/MapViewm';
import BottomNavm from './components/BottomNavm';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Sidebarm />
      <div className="main-section">
        <TopBar />
        <MainContent />
        <MapView />
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
