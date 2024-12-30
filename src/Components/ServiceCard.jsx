// ServiceCard.js
import React, { useState, useEffect } from 'react';
import './ServiceCard.css';

const ServiceCard = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch the JSON file
    fetch('public/data/Service.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch JSON');
        }
        return response.json();
      })
      .then((data) => setServices(data))
      .catch((error) => console.error('Error fetching the JSON:', error));
  }, []);

  if (services.length === 0) {
    return <p>Loading services...</p>; // Show a loading message until data is fetched
  }

  return (
    <div className="service-cards">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
