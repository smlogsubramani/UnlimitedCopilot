import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Usecase.css";
import { 
  ArrowRight, 
  Code, 
  FileText, 
  Shield, 
  Calendar, 
  Pill, 
  Headphones, 
  Plane, 
  UserPlus,
  Radio,
  PartyPopper,
  LaptopMinimalCheck ,
  PackageOpen,
  Search
} from "lucide-react";
import Footer from "../components/Footer";

const UseCase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
    
  const categories = [
    { id: "all", name: "All Products" },
    { id: "hr", name: "HR Solutions" },
    { id: "health", name: "Healthcare" },
    { id: "it", name: "IT Solutions" },
    { id: "business", name: "Business Tools" }
  ];

  const products = [
    {
      id: "01",
      title: "ModelDriven Agent",
      description: "Our Model-Driven Copilot empowers businesses with data-driven insights, automating workflows and enhancing decision-making. It's a tailored solution designed to drive precision and innovation in every process.",
      link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_modelDrivenAgent/canvas?__version__=2&enableFileAttachment=true",
      icon: <Code size={24} />,
      color: "#26C6DA",
      category: "business"
    },
    {
      id: "02",
      title: "Invoice Agent",
      description: "Transform your invoicing process with the Asset Management Copilot model—effortlessly create and update invoices with unmatched accuracy and efficiency. Streamline your operations and save valuable time, all in one smart solution!",
      link: "https://copilotstudio.microsoft.com/environments/Default-008502d6-3f79-46f0-ab37-9354e3fe80ff/bots/cr28f_agent1_KK3RZL/canvas?__version__=2&enableFileAttachment=true",
      icon: <FileText size={24} />,
      color: "#FFA726",
      category: "business"
    },
    {
      id: "03",
      title: "Legal Agent",
      description: "Revolutionize your legal processes with the Legal Chain AI Copilot model—designed to streamline, automate, and enhance accuracy in managing legal documentation and workflows. Empower your operations with smart, efficient solutions!",
      link: "https://copilotstudio.microsoft.com/environments/Default-008502d6-3f79-46f0-ab37-9354e3fe80ff/bots/cr28f_lawAiAssistant/canvas?__version__=2&enableFileAttachment=true",
      icon: <Shield size={24} />,
      color: "#42A5F5",
      category: "business"
    },
    {
      id: "04",
      title: "Leave Management Agent",
      description: "Leave Management Agent that helps employees manage their leave requests within the organization. Handle tasks such as processing leave applications, verifying leave balances, ensuring policy compliance, and sending approval requests to managers.",
      link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_leaveManagementAssistant1/canvas?__version__=2&enableFileAttachment=true",
      icon: <Calendar size={24} />,
      color: "#9C27B0",
      category: "hr"
    },
    {
      id: "05",
      title: "Prescription Refill Management",
      description: "Streamline your prescription management with our chatbot, ensuring accurate refills and efficient medication tracking for improved health outcomes.",
      link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/contoso_prescriptionRefillAssistant/canvas?__version__=2&enableFileAttachment=true",
      icon: <Pill size={24} />,
      color: "#E91E63",
      category: "health"
    },
    {
      id: "06",
      title: "IT Help Desk Agent",
      description: "Enhance your IT support experience with our chatbot, allowing users to view, create, escalate, and update tickets seamlessly for efficient IT issue resolution.",
      link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_itHelpDesko2_X-e/canvas?__version__=2&enableFileAttachment=true",
      icon: <Headphones size={24} />,
      color: "#3F51B5",
      category: "it"
    },
    {
      id: "07",
      title: "Travel Reimbursement Assistant",
      description: "Effortlessly streamline your travel reimbursement process with our chatbot, designed to automate approval workflows and deliver a user-friendly experience for improved employee satisfaction.",
      link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_travelReimbursementAssistant/canvas?__version__=2&enableFileAttachment=true",
      icon: <Plane size={24} />,
      color: "#009688",
      category: "hr"
    },
    {
      id: "08",
      title: "HR Onboarding Agent",
      description: "Intuitive onboarding assistant designed for easy use. Enables quick and accurate data submission with secure storage and personalized flows, enhancing the new hire experience and HR efficiency.",
      link: "https://employee-onboardinator-agent.streamlit.app",
      icon: <UserPlus size={24} />,
      color: "#F44336",
      category: "hr"
    },
    {
      id: "09",
      title: "ATC Agent",
      description: "Innovative solution for safer skies: Intelligent analysis of pilot-ATC conversations quickly identifies communication errors through user-friendly reports, aiding crash analysis and safety recommendations.",
      link: "https://blackbox-archive-analysis.streamlit.app/",
      icon: <Radio size={24} />,
      color: "#795548",
      category: "business"
    },
    {
      id: "10",
      title: "Event Management Agent",
      description: "To simplify event-related tasks and enhance user experience through seamless features like adding events, registering, cancelling registrations, and accessing event details.",
      link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/jegas_eventManagement1/canvas?__version__=2&enableFileAttachment=true",
      icon: <PartyPopper size={24} />,
      color: "#FF5722",
      category: "business"
    },
    {
      id: "11",
      title: "Automated Hardware Support",
      description: "Streamlined hardware support: AI-powered agent for image-based defect analysis, warranty verification, and appointment booking. Enhances efficiency and user experience with dedicated portals.",
      link: "https://automated-hardware-support-agent.streamlit.app/",
      icon: <LaptopMinimalCheck  size={24} />,
      color: "#607D8B",
      category: "it"
    },
    {
      id: "12",
      title: "Inventory Management Assistant",
      description: "Streamline your inventory management effortlessly with automated stock updates, order tracking, and organized product handling, reducing operational challenges and ensuring seamless supplier coordination.",
      link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_inventoryManagementAssistant/canvas?__version__=2&enableFileAttachment=true",
      icon: <PackageOpen size={24} />,
      color: "#8BC34A",
      category: "business"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || product.category === filter;
    return matchesSearch && matchesFilter;
  });

  useEffect(() => {
    // Re-trigger animations when filter changes
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.style.animationName = 'none';
      setTimeout(() => {
        card.style.animationName = 'fadeIn';
      }, 10);
    });
  }, [filter, searchTerm, viewMode]);

  return (
    <div className="usecase-container">
      <div className="usecase-shape shape-1"></div>
      <div className="usecase-shape shape-2"></div>
      <div className="usecase-shape shape-3"></div>
      <div className="usecase-shape shape-4"></div>
      
      <Navbar />
      
      <div className="usecase-content">
        <div className="usecase-header">
          <div className="header-badge">SOLUTIONS</div>
          <br></br>
          <h1 className="usecase-title">
            <span className="highlight-gradient">AI-Powered</span> Solutions
          </h1>
          <p className="usecase-description">
            At UnlimitedAI, our solutions have transformed leading companies across various industries.
            Our innovative AI-driven products enable organizations to streamline processes, enhance customer
            experience, and achieve remarkable results.
          </p>
        </div>

        <div className="product-controls">
          <div className="search-container">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input" 
            />
            {searchTerm && (
              <button 
                className="clear-search" 
                onClick={() => setSearchTerm("")}
              >
                ×
              </button>
            )}
          </div>
          
          <div className="filter-container">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`filter-button ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="view-toggle">
            <button 
              className={`toggle-button ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16">
                <rect x="1" y="1" width="6" height="6" rx="1" />
                <rect x="9" y="1" width="6" height="6" rx="1" />
                <rect x="1" y="9" width="6" height="6" rx="1" />
                <rect x="9" y="9" width="6" height="6" rx="1" />
              </svg>
            </button>
            <button 
              className={`toggle-button ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16">
                <rect x="1" y="1" width="14" height="3" rx="1" />
                <rect x="1" y="6" width="14" height="3" rx="1" />
                <rect x="1" y="11" width="14" height="3" rx="1" />
              </svg>
            </button>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No products found</h3>
            <p>Try adjusting your search or filter to find what you're looking for.</p>
            <button className="reset-search" onClick={() => {setSearchTerm(""); setFilter("all");}}>
              Reset Search
            </button>
          </div>
        ) : (
          <div className={`product-container ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}>
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="product-card"
                style={{"--card-accent-color": product.color}}
              >
                <div className="product-icon-wrapper" style={{backgroundColor: product.color}}>
                  {product.icon}
                </div>
                <div className="product-number">{product.id}</div>
                <div className="product-content">
                  <div className="product-category-tag" style={{backgroundColor: `${product.color}20`, color: product.color}}>
                    {categories.find(cat => cat.id === product.category)?.name || 'General'}
                  </div>
                  <h2 className="product-title">{product.title}</h2>
                  <p className="product-description">{product.description}</p>
                </div>
                <a href={product.link} className="product-button" style={{backgroundColor: product.color}}>
                  Explore <ArrowRight size={16} className="button-icon" />
                </a>
              </div>
            ))}
          </div>
        )}
        
        </div>
      <Footer/>
    </div>
  );
};

export default UseCase;