import React from 'react';
import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa";
import UnlimitedLogo from '../assets/unlimitedAI.png';

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen, setShowSignIn }) => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="navbar-brand">
          <img src={UnlimitedLogo} alt="Unlimited Logo" className="logo-icon" />
        </Link>
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/service" className="nav-link">Services</Link>
          <button className="nav-link-cta" onClick={() => setShowSignIn(true)}> {/* Modify onClick handler */}
            Get Started
          </button>
        </div>
        <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <FaList className="menu-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;