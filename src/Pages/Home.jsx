import React, { useState } from "react";
import { FaRobot, FaArrowRight, FaBrain, FaTools, FaComments, FaChartBar, FaLaptopCode, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 
import SignInPopup from "../components/SignInPopUp";
import "../styles/Index.css";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const products = [
    {
      id: 1,
      title: "AI Customer Support",
      description: "Intelligent virtual agents that handle customer inquiries with human-like understanding and empathy, available 24/7.",
      icon: <FaRobot className="product-icon" />,
      link: "/products/customer-support",
      color: "#0078d4"
    },
    {
      id: 2,
      title: "Smart Document Analysis",
      description: "Extract insights from documents and automate data processing workflows with advanced AI comprehension.",
      icon: <FaBrain className="product-icon" />,
      link: "/products/document-analysis",
      color: "#0078d4"
    },
    {
      id: 3,
      title: "Process Automation",
      description: "Streamline complex business processes with AI-driven automation solutions that adapt to your workflows.",
      icon: <FaTools className="product-icon" />,
      link: "/products/process-automation",
      color: "#0078d4"
    }
  ];

  const capabilities = [
    {
      icon: <FaComments />,
      title: "Conversational AI",
      description: "Build intelligent chatbots and virtual assistants that understand natural language and provide contextually relevant responses.",
      color: "#2b88d8"
    },
    {
      icon: <FaLaptopCode />,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows with intelligent agents that integrate seamlessly with your existing systems.",
      color: "#2b88d8"
    },
    {
      icon: <FaChartBar />,
      title: "Data Analysis & Insights",
      description: "Extract valuable insights from your data with advanced analytics capabilities that help drive informed business decisions.",
      color: "#2b88d8"
    },
    {
      icon: <FaGlobe />,
      title: "Multilingual Support",
      description: "Engage with customers globally using AI that understands and responds in multiple languages with cultural awareness.",
      color: "#2b88d8"
    }
  ];

  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} setShowSignIn={setShowSignIn} />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <motion.div 
            className="hero-text"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <div className="hero-tag-wrapper">
              <span className="tagline">Microsoft Copilot Studio Showcase</span>
            </div>
            <h1 className="hero-title"><span className="title_hero">Transforming Ideas into</span> <br /><span className="highlight">Intelligent Solutions</span></h1>
            <p className="hero-description">
              Discover how businesses are leveraging Microsoft Copilot Studio to build 
              powerful AI applications that drive innovation and enhance customer experiences.
            </p>
            <div className="hero-cta">
              <button className="hero-primary-btn" onClick={() => setShowSignIn(true)}> {/* Modify onClick handler */}
                Explore Use Cases
                <span className="btn-icon"><FaArrowRight /></span>
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="blob-background"></div>
            <div className="hero-image-placeholder">
              <div className="placeholder-content">
                <div className="ai-icon">
                  <FaRobot />
                </div>
                <div className="placeholder-text">
                  <h3>UnlimitedAI</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating shapes for hero section */}
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Our Products</span>
              <h2 className="section-title">Solutions Built with<br /><span className="highlight">Microsoft Copilot Studio</span></h2>
              <p className="section-description">
                Explore cutting-edge AI applications that are transforming industries and redefining user experiences.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="products-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {products.map((product) => (
              <motion.div 
                key={product.id} 
                className="product-card"
                variants={fadeIn}
                whileHover={{ y: -12, boxShadow: "0 20px 40px rgba(0, 120, 212, 0.2)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="product-icon-wrapper" style={{ 
                  background: `linear-gradient(135deg, ${product.color}15, ${product.color}30)`,
                  color: product.color
                }}>
                  {product.icon}
                </div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <button className="product-link" onClick={() => setShowSignIn(true)}>
                  Learn More <FaArrowRight className="arrow ml-2" size={14} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="capabilities-section">
        <div className="container">
          <div className="section-header light">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Capabilities</span>
              <h2 className="section-title">What Microsoft Copilot Studio Can Do</h2>
              <p className="section-description">
                Harness the power of conversational AI to build intelligent solutions that transform your business operations.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="capabilities-container"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {capabilities.map((capability, index) => (
              <motion.div 
                className="capability-item"
                key={index}
                variants={fadeIn}
              >
                <motion.div 
                  className="capability-content"
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.25)",
                    background: "rgba(255, 255, 255, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <div className="capability-icon" style={{ color: capability.color }}>
                    {capability.icon}
                  </div>
                  <div className="capability-text">
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* SignIn Popup */}
      <SignInPopup showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
    </div>
  );
};

export default Home;