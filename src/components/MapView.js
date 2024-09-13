import React from 'react';
import './MapView.css';
import { MapContainer, TileLayer } from 'react-leaflet';

const MapView = () => {
  return (
    <div className="map-view">
      <MapContainer center={[20, 78]} zoom={4} scrollWheelZoom={false} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default MapView;
