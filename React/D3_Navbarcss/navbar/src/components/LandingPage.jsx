import React from 'react';
import Navbar from './Navbar';
import banner from './assets/banner.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Experience the Future</h1>
          <p className="hero-subtitle">
            Welcome to the new era of our platform. A seamless and intuitive design crafted for perfection.
          </p>
          <button className="cta-button">Get Started Now</button>
        </div>
        <div className="hero-banner">
          <img className="banner-img" src={banner} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
