import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './HeroSection.css';
import heroVideo from '../assets/herovideo1.mp4';

const HeroSection = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <section className="hero-section">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          {/* Left side */}
          <div className="hero-left">
            <h1>
              <span>PROVINCIAL LAND COMMISSIONAIRE</span><br />
              <span>DEPARTMENT</span>
            </h1>
            <p>(WESTERN PROVINCE) SRI LANKA</p>

            {/* ✅ Updated Button */}
            <button className="about-btn" onClick={() => navigate('/about')}>
              About Us
            </button>
          </div>

          {/* Right side buttons */}
          <div className="hero-buttons">
            <button>Land Registration</button>
            <button>Land Tax Calculation</button>
            <button>Land Tax Calculation</button>
            <button>Land Tax Calculation</button>
            <button>Land Tax Calculation</button>
          </div>

          {/* Bottom stats */}
          <div className="hero-stats">
            <div className="stat-box">
              <div className="stat-header">
                <h2>+1000</h2>
                <h4>LANDS</h4>
              </div>
              <p>Lorem ipsum is simply dummy text of the printing industry.</p>
            </div>
            <div className="stat-box">
              <div className="stat-header">
                <h2>+40</h2>
                <h4>BRANCHES</h4>
              </div>
              <p>Lorem ipsum is simply dummy text of the printing industry.</p>
            </div>
            <div className="stat-box">
              <div className="stat-header">
                <h2>+40000</h2>
                <h4>TAXPAYERS</h4>
              </div>
              <p>Lorem ipsum is simply dummy text of the printing industry.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;




