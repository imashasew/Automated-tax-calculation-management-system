// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Homepage Sections
import HeroSection from './components/HeroSection';
import VisionMission from './components/VisionMission';
import NewsSection from './components/NewsSection';
import TaxSection from './components/TaxSection';
import ServicesSection from './components/ServicesSection';
import TaxPredictionCTA from './components/TaxPredictionCTA';
import TaxPredictionDetails from './components/TaxPredictionDetails';


// Pages
import About from './pages/about';
import Contact from './pages/Contact';
import Branches from './pages/Branches';
import Login from './pages/Login';
import SelectLand from './pages/SelectLand';
import TaxAmount from './pages/TaxAmount';
import TaxPredictionForm from './pages/TaxPredictionForm';


// Combined Homepage Component
function Home() {
  return (
    <>
      <HeroSection />
      <VisionMission />
      <NewsSection />
      <TaxSection />
      <ServicesSection />
      <TaxPredictionCTA />
      <TaxPredictionDetails />
    </>
  );
}

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selectland" element={<SelectLand />} />
        <Route path="/taxamount" element={<TaxAmount />} />
        <Route path="/taxprediction" element={<TaxPredictionForm />} />
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;





