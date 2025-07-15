// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import flagImg from '../assets/flag.png';

const Navbar = () => {
  return (
    <>
      <div className="top-bar">
  <img src={flagImg} alt="Sri Lanka Flag" className="flag-icon" />
  <span>Sri Lanka</span>
</div>

      {/* Main Navbar */}
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="logo">LTCD</div>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="branches">Branches</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

