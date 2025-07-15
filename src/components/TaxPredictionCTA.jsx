import React from "react";
import { Link } from "react-router-dom";  // Import Link
import "./TaxPredictionCTA.css";
import taxImage from "../assets/tax-image.png"; // Replace with actual image path

const TaxPredictionCTA = () => {
  return (
    <div className="tax-cta-section">
      <div className="tax-cta-content">
        <img src={taxImage} alt="Tax Planning" className="tax-image" />
        <div className="tax-text">
          <h2 className="tax-title">TAX PREDICTION”</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. It has survived not only five centuries...
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. It has survived not only five centuries...
          </p>
          {/* Use Link instead of button to navigate */}
          <Link to="/taxprediction" className="predict-btn">
            PREDICT NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaxPredictionCTA;

