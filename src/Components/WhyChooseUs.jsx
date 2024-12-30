import React from 'react';
import './WhyChooseUs.css';
import { useState, useEffect } from 'react';

const WhyChooseUs = () => {
    const [reasons, setreasons] = useState([]);

    useEffect(() => {
      // Fetch the JSON file
      fetch('public/data/Reason.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch JSON');
          }
          return response.json();
        })
        .then((data) => setreasons(data))
        .catch((error) => console.error('Error fetching the JSON:', error));
    }, []);
  
    if (reasons.length === 0) {
      return <p>Loading reasons...</p>; // Show a loading message until data is fetched
    }

  return (
    <div className="why-choose-us">
      <h2>Why Choose Us</h2>
      <p>
        Mehul Mahavar have been offering legal solutions with a higher success rate for more than 5 years. See
        our winning cases here.
      </p>
      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
