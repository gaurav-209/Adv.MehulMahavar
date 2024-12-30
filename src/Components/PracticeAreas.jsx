import React from 'react';
import './PracticeAreas.css';

const PracticeAreas = () => {
  const practiceAreas = [
    "Matrimonial and Family Law",
    "Criminal Law",
    "Civil Litigation",
    "Arbitration and Mediation",
    "Property Disputes",
    "Corporate Law",
    "Court Marriages",
    "High Court Matters",
  ];

  return (
    <div className="services-section">
      <h2>Our Practice Areas</h2>
      <p>
        Advocate Mehul Mahavar provides expert legal solutions across various domains of law, ensuring each case is handled with the utmost dedication and precision. Explore the practice areas where we strive for justice and deliver exceptional results.
      </p>
      <ul className="practice-areas-list">
        {practiceAreas.map((area, index) => (
          <li key={index} className="practice-area-item">
            {area}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PracticeAreas;
