// src/components/Routes.js

import React, { useState } from 'react';

const routesData = [
  { location: 'Vaijapur', price: '2000', time: '9.00pm' },
  { location: 'Loni', price: '2000', time: '8.00pm' },
  {location : 'Shirdi',price :'1600',time:'8.30pm'},
  {location: 'Kannad',price:'2000',time:'7.00 pm'}
  // Add more routes as necessary
];

const Routes = () => {
  const [location, setLocation] = useState('');
  const [routeInfo, setRouteInfo] = useState(null);

  const handleSearch = () => {
    const foundRoute = routesData.find(route => route.location.toLowerCase() === location.toLowerCase());
    setRouteInfo(foundRoute || { location: 'Not found', price: '', time: '' });
  };

  return (
    <div className="routes-container">
      <h2>Find Your Bus Route</h2>
      <div className="input-group mb-3 ">
      <input
        type="text"
        placeholder="Enter your location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="form-control"
      />
      <button onClick={handleSearch} className="btn btn-primary  ">Search</button>
      </div>
      {routeInfo && (
        <div className="mt-3">
          <h3>Route Information</h3>
          <p><strong>Location:</strong> {routeInfo.location}</p>
          <p><strong>Price:</strong> {routeInfo.price}</p>
          <p><strong>Time:</strong> {routeInfo.time}</p>
        </div>
      )}
    </div>
  );
};

export default Routes;
