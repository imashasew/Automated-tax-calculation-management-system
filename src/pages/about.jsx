import React from 'react';
import './about.css'; // 👈 Link to separate CSS file

export default function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <div className="about-header-top">
          <img src="./image/Sri lanka.png" alt="Sri Lanka Emblem" className="emblem" />
          <h1 className="header-title">
            PROVINCIAL LAND COMMISSIONAIRE DEPARTMENT
          </h1>
          <img src="./image/Western.png" alt="Western Province Emblem" className="emblem" />
        </div>
        <p className="header-subtitle">(WESTERN PROVINCE) SRI LANKA</p>
      </header>

      <main className="about-main">
        <div className="about-intro">
          <p>
            The <strong>Provincial Land Commissionaire Department</strong> of the Western Province, Sri Lanka, is responsible for overseeing land
            administration, management, and taxation within the province. Our mission is to ensure fair, transparent, and efficient handling of
            land-related matters, contributing to sustainable development and lawful land use. Our core values include <strong>integrity</strong>,
            <strong> accountability</strong>, <strong>service excellence</strong>, and <strong>innovation</strong>. We support both the public and governmental bodies by providing
            services related to land ownership verification, tax assessment and prediction, land records maintenance, and dispute resolution. With
            the integration of digital technologies, we strive to enhance service delivery, reduce processing times, and make land governance more
            accessible to citizens.
          </p>
        </div>

        <div className="about-cards">
          {[
            "We are committed to upholding the principles of good governance, including fairness, public accountability, inclusivity, and continuous service improvement.",
            "We are committed to maintaining public trust by ensuring that land is managed responsibly and equitably for current and future generations.",
            "To be a leading land administration authority that promotes transparency, innovation, and trust in the management of land resources.",
            "To deliver accessible, efficient, and equitable land services that support sustainable development and safeguard land rights for all citizens of the Western Province."
          ].map((text, idx) => (
            <div key={idx} className="about-card">
              <div className="card-icon">
                <svg className="icon-svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <p className="card-text"><span>{text}</span></p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

