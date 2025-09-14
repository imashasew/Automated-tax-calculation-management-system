import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [nic, setNic] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: nic, password }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setMessage("Login successful!");
        navigate('/selectland');
      } else {
        setMessage(data.message || "Login failed.");
      }
    } catch (err) {
      setMessage("Network error.");
    }
    setLoading(false);
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
        <input
          type="text"
          placeholder="NIC number"
          className="login-input"
          value={nic}
          onChange={e => setNic(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="login-forgot">Forget Password</p>
        {message && <div className="login-message">{message}</div>}
      </div>
    </div>
  );
}
