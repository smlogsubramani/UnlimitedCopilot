import React, { useState , useEffect } from "react";
import "../styles/Service.css";
import DataIntegrationIcon from '../assets/UBTI-Icons_v1_Solve-Data-Integration.svg';
import SoftwareBuilding from '../assets/UBTI-Icons_v1_Plan-Software-building.svg';
import AppDev from '../assets/UBTI-Icons_v1_Solve-App-Dev.svg';
import QATesting from '../assets/UBTI-Icons_v1_Solve-QA-Testing.svg';
import CloudMitigation from '../assets/UBTI-Icons_v1_Solve-Cloud-Migration.svg';
import SignInPopup from "../components/SignInPopUp";
import Analytics from '../assets/UBTI-Icons_v1_Solve-Analytics.svg';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Services = () => {
  
  const [showSignIn, setShowSignIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const elements = document.querySelectorAll(".services-scroll-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
 
  return (
    <div className="services-page">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} setShowSignIn={setShowSignIn} />
      
        <section className="services-hero services-scroll-animate">
          <div className="services-hero-content">
            <div className="services-hero-text services-animate-slide-left services-delay-1">
          <h1>Empowering Business Through Intelligent Conversations</h1>
          <p>
            Built on Microsoft Power Platform, our bots don't just chat — they
            solve.
          </p>
            </div>
            <div className="services-hero-spacer"></div> {/* Added spacer for space */}
            <div className="services-hero-image services-animate-slide-right services-delay-2">
          <img
            src="bot.png"
            alt="Chatbot"
            className="services-animated-bot"
          />
            </div>
          </div>
        </section>

        {/* Features */}
      <section className="services-features services-scroll-animate">
        <h2 className="services-animate-slide-up-no-fade">Services We Offer 🌟</h2><br></br>
        <div className="services-feature-grid">
          <div className="services-feature services-animate-slide-up services-delay-1">
            <img src={DataIntegrationIcon} alt="Data Integration" className="services-svg-icon" />
            <h4>Custom Dev</h4>
            <p>For any Dashboard & Report Requirements.</p>
          </div>
          <div className="services-feature services-animate-slide-up services-delay-2">
            <img src={Analytics} alt="Data Integration" className="services-svg-icon" />
            <h4>Solutions</h4>
            <p>Customize and deploy ready-made solutions.</p>
          </div>
          <div className="services-feature services-animate-slide-up services-delay-3">
            <img src={QATesting} alt="Data Integration" className="services-svg-icon" />
            <h4>Consulting Services</h4>
            <p>Any type of consulting, resourcing and troubleshooting.</p>
          </div>
          <div className="services-feature services-animate-slide-up services-delay-4">
            <img src={AppDev} alt="Data Integration" className="services-svg-icon" />
            <h4>Managed Services</h4>
            <p>Environment, Development to deployment completely managed.</p>
          </div>
          <div className="services-feature services-animate-slide-up services-delay-1">
            <img src={CloudMitigation} alt="Data Integration" className="services-svg-icon" />
            <h4>Training</h4>
            <p>All Levels of enterprise trainings.</p>
          </div>
          <div className="services-feature services-animate-slide-up services-delay-2">
            <img src={SoftwareBuilding} alt="Data Integration" className="services-svg-icon" />
            <h4>Licensing</h4>
            <p>Authorised Microsoft Office 365 cloud License providers.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="services-award-section">
        <div className="services-award-card">
          <div className="services-award-header">
            <h2 className="services-award-title">Microsoft Solutions Partner</h2>
            <div className="services-award-details">
              <p>We're deeply honored to have achieved the highest standards of excellence in the Microsoft suite of business platforms, from data analytics and application development to cloud migration and more.</p>
            </div>
          </div>
        
          <div className="services-partner-images">
            <div className="services-logo-container">
              <img src="https://149510500.v2.pressablecdn.com/wp-content/uploads/2024/05/Dashboard-in-a-Day.png" alt="Microsoft Partner Badge 1" className="services-partner-logo" />
              <div className="services-logo-hover-effect"></div>
            </div>
            <div className="services-logo-container">
              <img src="https://149510500.v2.pressablecdn.com/wp-content/uploads/2023/05/Microsoft-solution-partner-Digital-App-Innovation-980x599.png" alt="Microsoft Partner Badge 2" className="services-partner-logo" />
              <div className="services-logo-hover-effect"></div>
            </div>
            <div className="services-logo-container">
              <img src="https://149510500.v2.pressablecdn.com/wp-content/uploads/2023/05/Microsoft-solution-partner-Data-AI-980x599.png" alt="Microsoft Partner Badge 3" className="services-partner-logo" />
              <div className="services-logo-hover-effect"></div>
            </div>
            <div className="services-logo-container">
              <img src="https://149510500.v2.pressablecdn.com/wp-content/uploads/2024/01/InfrastructureAzure-980x599.png" alt="Microsoft Partner Badge 4" className="services-partner-logo" />
              <div className="services-logo-hover-effect"></div>
            </div>
            <div className="services-logo-container">
              <img src="https://149510500.v2.pressablecdn.com/wp-content/uploads/2024/05/Fabric_Analyst_in_a_Day-removebg-preview.png" alt="Microsoft Partner Badge 5" className="services-partner-logo" />
              <div className="services-logo-hover-effect"></div>
            </div>
          </div>
        
          <div className="services-particles">
            <div className="services-particle"></div>
            <div className="services-particle"></div>
            <div className="services-particle"></div>
            <div className="services-particle"></div>
            <div className="services-particle"></div>
          </div>
        </div>
      </section>
     
      <Footer/>
      <SignInPopup showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      
    </div>
  );
};

export default Services;