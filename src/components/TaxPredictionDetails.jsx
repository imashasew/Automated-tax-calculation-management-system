import React from "react";
import "./TaxPredictionDetails.css";
import team1 from "../assets/team.jpeg";
import team2 from "../assets/team.jpeg";
import team3 from "../assets/team.jpeg";
import building1 from "../assets/building1.jpg";
import building2 from "../assets/building2.jpg";
import building3 from "../assets/building3.jpg";
import building4 from "../assets/building4.jpg";

const TaxPredictionDetails = () => {
  return (
    <div className="tax-detail-section">
      <div className="tax-detail-left">
        <h2>“TAX PREDICTION”</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text...
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text.
        </p>
        <div className="team-members">
          <img src={team1} alt="Team Member 1" />
          <img src={team2} alt="Team Member 2" />
          <img src={team3} alt="Team Member 3" />
        </div>
      </div>
      <div className="tax-detail-right">
        <div className="image-grid">
          <img src={building1} alt="Building 1" />
          <img src={building2} alt="Building 2" />
          <img src={building3} alt="Building 3" />
          <img src={building4} alt="Building 4" />
        </div>
      </div>
    </div>
  );
};

export default TaxPredictionDetails;
