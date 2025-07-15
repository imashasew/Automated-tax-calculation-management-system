import React, { useState } from "react";
import axios from "axios";
import "./TaxPredictionForm.css"; // Your existing styling

export default function TaxPredictionForm() {
  const [formData, setFormData] = useState({
    landSize: "",
    landValue: "",
    regionFactor: "",
    economicGrowth: "",
    landType: "Residential",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    setError("");

    try {
      const response = await axios.post("http://localhost:5001/predict", formData);
      setResult(response.data.predicted_tax);
    } catch (err) {
      setError("Prediction failed. Please check your data or try again.");
      console.error(err);
    }
  };

  return (
    <div className="prediction-form-container">
      <h2>Land Tax Prediction</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="landSize" placeholder="Land Size" value={formData.landSize} onChange={handleChange} required />
        <input type="number" name="landValue" placeholder="Land Value" value={formData.landValue} onChange={handleChange} required />
        <input type="number" name="regionFactor" placeholder="Region Factor" value={formData.regionFactor} onChange={handleChange} required />
        <input type="number" step="0.01" name="economicGrowth" placeholder="Economic Growth %" value={formData.economicGrowth} onChange={handleChange} required />
        
        <select name="landType" value={formData.landType} onChange={handleChange}>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Agricultural">Agricultural</option>
        </select>

        <button type="submit">Predict Tax</button>
      </form>

      {result && <h3>Predicted Tax: Rs. {result}</h3>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}



