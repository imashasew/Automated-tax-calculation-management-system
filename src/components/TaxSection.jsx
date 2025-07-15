// src/components/TaxSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TaxSection.css';
import bgImage from '../assets/bg1.jpg';
import taxVideo from '../assets/tax.mp4';

const TaxSection = () => {
  const navigate = useNavigate(); // 👈 Hook for navigation

  const handleGetStart = () => {
    navigate('/login'); // 👈 Navigate to Login page
  };

  return (
    <section
      className="tax-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="tax-overlay">
        {/* Left Column */}
        <div className="tax-left">
          <h4>
            “ <span className="underline">Tax Calculations</span>”
          </h4>
          <h1>
            DO YOU WANT TO GET <br />
            <span className="highlight">TAX MONEY?</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
            a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
        </div>

        {/* Right Column */}
        <div className="tax-card">
          <h3 className="tax-card-title">CHECK YOUR TAX AMOUNT</h3>
          <video className="tax-card-video" autoPlay loop muted playsInline>
            <source src={taxVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className="tax-card-btn" onClick={handleGetStart}>GET START</button>
        </div>
      </div>
    </section>
  );
};

export default TaxSection;

