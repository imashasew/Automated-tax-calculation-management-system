import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate to SelectLand.jsx
    navigate('/selectland');  // ✅ Updated path
  };

  return (
    <div className="login-page">
      <h1 className="login-title">
        PROVINCIAL LAND COMMISSIONAL DEPARTMENT
        <br />
        <span className="login-subtitle">(WESTERN PROVINCE) SRI LANKA</span>
      </h1>

      <h2 className="login-section-title">SIGN IN</h2>

      <div className="login-box">
        <input type="text" placeholder="NIC number" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <p className="login-forgot">Forget Password</p>
      </div>
    </div>
  );
}
