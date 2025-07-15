// src/pages/SelectLand.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import './SelectLand.css';

export default function SelectLand() {
  const navigate = useNavigate(); // ✅ useNavigate hook

  const handleSelect = (landId) => {
    fetch(`http://localhost:5000/api/land/${landId}`)
      .then((res) => res.json())
      .then((data) => {
        alert(`You selected Land ${landId}: ${data.info}`);
        navigate("/taxamount"); // ✅ navigate to tax amount
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="land-app">
      <header className="land-header">
        PROVINCIAL LAND COMMISSIONAIRE DEPARTMENT
        <div className="land-subheader">(WESTERN PROVINCE) SRI LANKA</div>
      </header>

      <div className="land-box">
        <h2 className="land-title">Select your Land</h2>
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => handleSelect(num)}
            className="land-button"
          >
            Land number {String(num).padStart(2, '0')}
          </button>
        ))}
      </div>
    </div>
  );
}
