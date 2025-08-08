import React, { useState, useEffect } from "react";
import "../styles/About.css";
import Navbar from "../components/Navbar";
import SignInPopup from "../components/SignInPopUp";
import Footer from "../components/Footer";

const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".about-scroll-animate");
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
    <div className="about-us">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} setShowSignIn={setShowSignIn} />

      {/* Enhanced Hero Section */}
      <section className="about-hero about-scroll-animate">
        <div className="about-glass-overlay"></div>
        <div className="about-hero-content">
          <div className="about-hero-text about-animate-slide-left about-delay-1">
            <h1>
              Empowering Business Through Intelligent Conversations 🚀
            </h1>
            <p>
              Built on Microsoft Power Platform, our bots don't just chat — they
              transform businesses.
            </p>
            <div className="about-hero-features">
              <div className="about-hero-feature">
                <span>✨</span> No-Code Bot Building
              </div>
              <div className="about-hero-feature">
                <span>🤝</span> Seamless Integrations
              </div>
              <div className="about-hero-feature">
                <span>📈</span> Actionable Analytics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Identity Carousel */}
      <section className="about-identity-carousel about-scroll-animate">
        <div className="about-section-header">
          <h2 className="about-section-title about-animate-slide-up delay-1">Who We Are 🪄</h2>
          <p className="about-section-subtitle about-animate-slide-up delay-2">Pioneers in AI-driven business solutions</p>
        </div>
        <div className="about-carousel">
          <div className="about-carousel-card about-animate-slide-left delay-1">
            <div className="about-card-icon">🤖</div>
            <h3>Copilot Studio</h3>
            <span>
              Empowering users with intuitive no-code tools to build intelligent bots that automate tasks, answer queries, and boost efficiency.
            </span>
          </div>
          <div className="about-carousel-card about-animate-slide-left delay-2">
            <div className="about-card-icon">🎓</div>
            <h3>Training Events</h3>
            <span>
              Hands-on sessions like "Copilot Studio in a Day" to equip professionals with AI bot-building skills in an engaging environment.
            </span>
          </div>
          <div className="about-carousel-card about-animate-slide-left delay-3">
            <div className="about-card-icon">💼</div>
            <h3>Industry Use Cases</h3>
            <span>
              Real-world applications across healthcare, education, retail, and more—transforming industries with smart AI solutions.
            </span>
          </div>
          <div className="about-carousel-card about-animate-slide-left delay-4">
            <div className="about-card-icon">🌍</div>
            <h3>Microsoft Partnership</h3>
            <span>
              Collaborating with Microsoft to deliver certified excellence and align with the latest in AI-driven business transformation.
            </span>
          </div>
        </div>
      </section>

      {/* Enhanced Features */}
      <section className="about-features about-scroll-animate">
        <div className="about-feature-background"></div>
        <div className="about-section-header">
          <h2 className="about-section-title about-animate-slide-up-no-fade">Our Edge 🚀</h2>
          <p className="about-section-subtitle about-animate-slide-up delay-1">What sets our solutions apart</p>
        </div>
        <div className="about-feature-grid">
          <div className="about-feature about-animate-slide-up delay-1">
            <div className="about-feature-icon">🌐</div>
            <h4>Microsoft-Certified Solutions</h4>
            <p>We leverage certified Microsoft technologies for trusted, enterprise-grade AI deployments.</p>
          </div>
          <div className="about-feature about-animate-slide-up delay-2">
            <div className="about-feature-icon">💬</div>
            <h4>Real-time Conversations</h4>
            <p>Our bots handle user queries instantly with natural, engaging responses.</p>
          </div>
          <div className="about-feature about-animate-slide-up delay-3">
            <div className="about-feature-icon">⚡</div>
            <h4>Zero-Code Experience</h4>
            <p>Build powerful bots without writing a single line of code using Copilot Studio's intuitive interface.</p>
          </div>
          <div className="about-feature about-animate-slide-up delay-4">
            <div className="about-feature-icon">🔄</div>
            <h4>Seamless Integrations</h4>
            <p>Easily integrate bots with your existing systems, CRMs, and workflows.</p>
          </div>
          <div className="about-feature about-animate-slide-up delay-5">
            <div className="about-feature-icon">📊</div>
            <h4>Analytics-Ready</h4>
            <p>Track conversations, identify trends, and gain insights to improve customer engagement.</p>
          </div>
          <div className="about-feature about-animate-slide-up delay-6">
            <div className="about-feature-icon">🤝</div>
            <h4>Industry Adaptability</h4>
            <p>Tailored use cases for education, healthcare, logistics, and more.</p>
          </div>
        </div>
      </section>

      <Footer/>
      <SignInPopup showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
    </div>
  );
};

export default About;