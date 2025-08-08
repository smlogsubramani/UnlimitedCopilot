import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Usecase.css";
import { 
  ArrowRight, 
  Code, 
  FileText,  
  Pill, 
  Headphones, 
  Plane, 
  UserPlus,
  Radio,
  LaptopMinimalCheck,
  PackageOpen,
  Search,
  Info
} from "lucide-react";
import Footer from "../components/Footer";

const UseCase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedProduct, setSelectedProduct] = useState(null);

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
      title: "Inventory Management Assistant",
      description: "Enhance inventory operations with AI-powered automation for real-time updates, precise tracking, and seamless supplier coordination. Minimize errors, cut costs, and maintain optimal stock levels effortlessly.",
      link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_modelDrivenAgent/canvas?__version__=2&enableFileAttachment=true",
      icon: <Code size={24} />,
      color: "#26C6DA",
      category: "business",
      details: {
        overview: "Enhance inventory operations with AI-powered automation for real-time updates, precise tracking, and seamless supplier coordination. Minimize errors, cut costs, and maintain optimal stock levels effortlessly.",
        client: ["Retail", "FMCG Companies"],
        challenges: [
          "Manual Processes: Traditional inventory tracking is error-prone and time-consuming, leading to operational disruptions.",
          "Stockouts & Delays: Lack of real-time visibility causes shortages and delays in fulfilling orders.",
          "Inefficient Restocking: Poor order management results in mismatches, increased costs, and wasted resources."
        ],
        solutions: [
          "Centralized Information Management: Access and manage detailed product and supplier records from a single interface.",
          "Instant Inventory Updates: Easily add, edit, or remove product details for accurate and up-to-date stock data.",
          "Real-Time Stock Monitoring: Gain clear visibility into stock levels to prevent shortages and overstock situations.",
          "Automated Restocking: Generate and process purchase orders quickly, reducing manual efforts and delays.",
          "Integrated Order Management: Sync customer orders with inventory updates to ensure accurate fulfillment and timely delivery."
        ],
        features: [
          "Real-Time Stock Updates",
          "Automated Purchase Orders",
          "Accurate Order Tracking",
          "Supplier Coordination & Management",
          "Dynamic Inventory Data Access",
          "Error-Free & Efficient Operations"
        ],
        tools: [
          "Microsoft Copilot Studio – For building the conversational AI chatbot to interact with users and automate processes.",
          "Power Automate – For seamless workflow automation, including purchase order generation and notifications.",
          "Microsoft Dataverse – For storing and managing product, order, and supplier data in a centralized way.",
          "Microsoft Outlook – For automated approval workflows and real-time notifications."
        ],
        flowchart: "Trigger → AI Analysis → Process → Complete"
      }
    },
    // ... (other products remain unchanged, but ensure all have 'details' field for consistency)
    {
      id: "02",
      title: "Asset Management Agent",
      description: "Transform your invoicing process with the Asset Management Copilot model—effortlessly create and update invoices with unmatched accuracy and efficiency. Streamline your operations and save valuable time, all in one smart solution!",
      link: "https://copilotstudio.microsoft.com/environments/Default-008502d6-3f79-46f0-ab37-9354e3fe80ff/bots/cr28f_agent1_KK3RZL/canvas?__version__=2&enableFileAttachment=true",
      icon: <FileText size={24} />,
      color: "#FFA726",
      category: "business",
      details: {
        overview: "Transform your invoicing process with the Asset Management Copilot model—effortlessly create and update invoices with unmatched accuracy and efficiency. Streamline your operations and save valuable time, all in one smart solution!",
        client: "Corporate Finance Teams",
        challenges: ["Manual invoice creation", "Error-prone data entry", "Time-consuming updates"],
        solutions: ["Automated invoice generation", "Real-time updates", "Seamless integration with financial systems"],
        features: ["Automated Invoice Creation", "Real-Time Updates", "Error Detection", "System Integration"],
        tools: ["Microsoft Copilot Studio", "Power Automate", "Microsoft Dataverse"],
        flowchart: "Invoice Creation → Data Validation → System Integration → Finalization"
      }
    },
    {
      id: "03",
      title: "Prescription Refill Management",
      description: "Streamline your prescription management with our chatbot, ensuring accurate refills and efficient medication tracking for improved health outcomes.",
      link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/contoso_prescriptionRefillAssistant/canvas?__version__=2&enableFileAttachment=true",
      icon: <Pill size={24} />,
      color: "#E91E63",
      category: "health",
      details: {
        overview: "Streamline your prescription management with our chatbot, ensuring accurate refills and efficient medication tracking for improved health outcomes.",
        client: "Healthcare Providers",
        challenges: ["Manual refill processes", "Medication tracking errors", "Patient compliance issues"],
        solutions: ["Automated refill requests", "Real-time tracking", "Patient reminders"],
        features: ["Automated Refill Requests", "Medication Tracking", "Patient Notifications", "Compliance Monitoring"],
        tools: ["Microsoft Copilot Studio", "Microsoft Dataverse", "Power Automate"],
        flowchart: "Refill Request → Validation → Tracking → Notification"
      }
    },
    {
      id: "04",
      title: "IT Help Desk Agent",
      description: "Enhance your IT support experience with our chatbot, allowing users to view, create, escalate, and update tickets seamlessly for efficient IT issue resolution.",
      link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_itHelpDesko2_X-e/canvas?__version__=2&enableFileAttachment=true",
      icon: <Headphones size={24} />,
      color: "#3F51B5",
      category: "it",
      details: {
        overview: "Enhance your IT support experience with our chatbot, allowing users to view, create, escalate, and update tickets seamlessly for efficient IT issue resolution.",
        client: "IT Departments",
        challenges: ["Slow ticket resolution", "Manual ticket management", "User frustration"],
        solutions: ["Automated ticket creation", "Real-time status updates", "Escalation management"],
        features: ["Ticket Creation", "Status Tracking", "Escalation Handling", "User Support"],
        tools: ["Microsoft Copilot Studio", "Power Automate", "Microsoft Dataverse"],
        flowchart: "Ticket Creation → Analysis → Escalation → Resolution"
      }
    },
    {
      id: "05",
      title: "Travel Reimbursement Assistant",
      description: "Effortlessly streamline your travel reimbursement process with our chatbot, designed to automate approval workflows and deliver a user-friendly experience for improved employee satisfaction.",
      link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_travelReimbursementAssistant/canvas?__version__=2&enableFileAttachment=true",
      icon: <Plane size={24} />,
      color: "#009688",
      category: "hr",
      details: {
        overview: "Effortlessly streamline your travel reimbursement process with our chatbot, designed to automate approval workflows and deliver a user-friendly experience for improved employee satisfaction.",
        client: "Corporate HR Departments",
        challenges: ["Manual reimbursement processes", "Approval delays", "Employee dissatisfaction"],
        solutions: ["Automated reimbursement requests", "Fast approval workflows", "User-friendly interface"],
        features: ["Reimbursement Submission", "Automated Approvals", "Status Tracking", "Employee Notifications"],
        tools: ["Microsoft Copilot Studio", "Power Automate", "Microsoft Dataverse"],
        flowchart: "Submission → Approval → Processing → Notification"
      }
    },
    {
      id: "06",
      title: "Employee Onboarding Agent",
      description: "Intuitive onboarding assistant designed for easy use. Enables quick and accurate data submission with secure storage and personalized flows, enhancing the new hire experience and HR efficiency.",
      link: "https://employee-onboardinator-agent.streamlit.app",
      icon: <UserPlus size={24} />,
      color: "#F44336",
      category: "hr",
      details: {
        overview: "Simplify and accelerate the onboarding process with an AI-powered assistant that collects new hire data, validates inputs, stores information securely, and provides personalized, conversational guidance for a seamless HR experience.",
        client: "Corporate HR Department",
        challenges: ["Time-Consuming Data Collection: Manual onboarding processes are slow and inefficient.","Validation Issues: Ensuring accurate and secure ID verification is complex.","Lack of Personalization: New hires often experience inconsistent and impersonal onboarding journeys."],
        solutions: ["Guided Conversational Onboarding: The assistant interacts with new hires, collecting accurate and complete data step by step.","Data Validation: Ensures secure and error-free validation of critical details like IDs, contact info, and educational background.","Secure Data Handling: All information is stored in a reliable database for easy access and integration.","Personalized Experience: AI-driven conversations make onboarding engaging and consistent."],
        features: ["Real-Time Data Collection & Validation", "Secure Storage in Database", "Personalized, Conversational Guidance", "Automated Error Detection","Efficient & Consistent HR Workflow","Scalable for Large Teams"],
        tools: ["Python – For backend logic and data processing.", "Streamlit – For building an interactive and user-friendly onboarding interface.", "Database – For secure and scalable data storage.", "Model: Gemma2-9B-IT – For generating dynamic, context-aware, and personalized responses."],
        flowchart: "Start -> Employee Data Input -> Validation -> Secure Storage -> Personalized Flow Assignment -> Onboarding Completion"
      }
    },
    {
      id: "07",
      title: "ATC Crash Analysis Assistant",
      description: "The system takes ATC audio files, converts them into downloadable documents, and lets users ask questions directly from the content for quick insights.",
      link: "https://blackbox-archive-analysis.streamlit.app/",
      icon: <Radio size={24} />,
      color: "#795548",
      category: "business",
      details: {
        overview: "Enhance aviation safety by transforming ATC audio communications into structured, data-driven reports and enabling instant, context-aware crash analysis through an AI-powered chatbot. This assistant leverages advanced LLMs, transcription models, and AI agents to uncover critical insights, ensuring faster, more accurate safety evaluations.",
        client: "Civil Aviation Authorities",
        challenges: ["Manual Analysis Overload: Analyzing hours of pilot-ATC dialogue manually is time-consuming and error-prone.","Missed Critical Errors: Crucial communication slips often go unnoticed due to human limitations.","Slow Reporting: Delays in producing reports can postpone vital safety recommendations, increasing operational risk."],
        solutions: ["Rapid Transcription: Convert ATC audio into text using OpenAI Whisper Model, supported by Pydub for audio handling.","AI-Driven Investigation: AI agents (CrewAI, LangChain) analyze conversations like relentless investigators to identify red flags and anomalies.","LLM-Powered Insights: Utilize LLAMA 3.1 for generating context-rich, actionable insights from transcripts.","Interactive Reporting: Deliver structured reports and visual insights through a Streamlit dashboard for ease of interpretation."],
        features: ["Automated ATC Audio Transcription", "AI-Based Anomaly & Risk Detection", "LLM-Powered Contextual Crash Analysis", "Dynamic Report Generation","Interactive Streamlit Dashboard for Visualization","End-to-End Workflow from Audio to Actionable Insights"],
        tools: ["Python – For scripting, data handling, and integrating components.", "OpenAI Whisper – For high-accuracy speech-to-text transcription.", "Pydub – For audio preprocessing and format handling.", "CrewAI & LangChain – For building autonomous AI investigative workloads.","LLAMA 3.1 – For advanced contextual analysis and report generation.","Streamlit – For creating interactive dashboards and visual reports."],
        flowchart: "ATC Audio → Pydub (Preprocessing) → Whisper (Transcription) → CrewAI + LangChain + LLAMA 3.1 (Analysis) → Python Integration → Structured Crash Report → Streamlit Dashboard"
      }
    },
    {
      id: "08",
      title: "Automated Hardware Support",
      description: "Streamlined hardware support: AI-powered agent for image-based defect analysis, warranty verification, and appointment booking. Enhances efficiency and user experience with dedicated portals.",
      link: "https://automated-hardware-support-agent.streamlit.app/",
      icon: <LaptopMinimalCheck size={24} />,
      color: "#607D8B",
      category: "it",
      details: {
        overview: "Enhance the efficiency of hardware support processes with an AI-driven assistant that diagnoses issues from images, verifies service tags, manages appointments, and identifies nearby service centers—delivering immediate assistance to users while reducing IT team workload.",
        client: "Enterprises and IT service providers",
        challenges: ["Complex Defect Analysis: Diagnosing hardware defects from user-uploaded images accurately and efficiently.", "Warranty Verification: Validating service tags and warranty details without delays.","Appointment Scheduling: Managing appointments without overlaps or delays.","Service Center Identification: Quickly locating legal and technical nearby service centers for user convenience."],
        solutions: ["Automated Defect Analysis: Uses LLaMA 3 Vision Model to quickly analyze and identify hardware issues from uploaded images.", "Streamlined Verification: Centralized data repository verifies service tags and warranty status for fast resolution.","Integrated Appointment Booking: Automates scheduling with available technicians for warranty-valid cases.","Service Center Identification: Employs web scraping to locate authorized nearby service centers for immediate support."],
        features: ["AI-Based Hardware Defect Detection from Images", "Automated Warranty & Service Tag Verification","Real-Time Appointment Scheduling with Technicians","Service Center Locator using Web Data","Reduced IT Personnel Workload","Instant User Assistance"],
        tools: ["Python – For backend processing and automation workflows.", "LLaMA 3 Vision Model – For image-based defect detection.", "Centralized Database – For warranty and service tag verification.", "Web Scraping (Python + BeautifulSoup/Scrapy) – For real-time service center identification.","Streamlit – For an interactive user interface and dashboard."],
        flowchart: "User Uploads Image → LLaMA 3 Vision (Defect Detection) → Service Tag & Warranty Verification → Appointment Scheduling → Service Center Lookup → User Confirmation & Notification"
      }
    },
    {
      id: "09",
      title: "Inventory Management Assistant",
      description: "Streamline your inventory management effortlessly with automated stock updates, order tracking, and organized product handling, reducing operational challenges and ensuring seamless supplier coordination.",
      link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_inventoryManagementAssistant/canvas?__version__=2&enableFileAttachment=true",
      icon: <PackageOpen size={24} />,
      color: "#8BC34A",
      category: "business",
      details: {
        overview: "Streamline your inventory management effortlessly with automated stock updates, order tracking, and organized product handling, reducing operational challenges and ensuring seamless supplier coordination.",
        client: ["Retail", "FMCG Companies"],
        challenges: [
          "Manual Processes: Traditional inventory tracking is error-prone and time-consuming, leading to operational disruptions.",
          "Stockouts & Delays: Lack of real-time visibility causes shortages and delays in fulfilling orders.",
          "Inefficient Restocking: Poor order management results in mismatches, increased costs, and wasted resources."
        ],
        solutions: [
          "Centralized Information Management: Access and manage detailed product and supplier records from a single interface.",
          "Instant Inventory Updates: Easily add, edit, or remove product details for accurate and up-to-date stock data.",
          "Real-Time Stock Monitoring: Gain clear visibility into stock levels to prevent shortages and overstock situations.",
          "Automated Restocking: Generate and process purchase orders quickly, reducing manual efforts and delays.",
          "Integrated Order Management: Sync customer orders with inventory updates to ensure accurate fulfillment and timely delivery."
        ],
        features: [
          "Real-Time Stock Updates",
          "Automated Purchase Orders",
          "Accurate Order Tracking",
          "Supplier Coordination & Management",
          "Dynamic Inventory Data Access",
          "Error-Free & Efficient Operations"
        ],
        tools: [
          "Microsoft Copilot Studio – For building the conversational AI chatbot to interact with users and automate processes.",
          "Power Automate – For seamless workflow automation, including purchase order generation and notifications.",
          "Microsoft Dataverse – For storing and managing product, order, and supplier data in a centralized way.",
          "Microsoft Outlook – For automated approval workflows and real-time notifications."
        ],
        flowchart: "Trigger → AI Analysis → Process → Complete"
      }
    },
    {
      id: "10",
      title: "Liquor Forecasting",
      description: "Gain strategic clarity with sales forecasting and supplier clustering tools. Forecast total and item-level sales using advanced time series models. Cluster products and vendors by performance to streamline decisions and boost growth.",
      link: "https://liquorforecasting.streamlit.app/",
      icon: <PackageOpen size={24} />,
      color: "#B13BFF",
      category: "business",
      details: {
        overview: "An interactive, AI-driven platform that delivers data-driven insights for sales forecasting, product performance, and supplier analysis. This assistant enables smarter decision-making, optimized inventory management, and strategic supplier partnerships for improved business outcomes.",
        client: "A Retail or Distribution Company",
        challenges: ["Uncertain Sales Trends: Limited visibility into future demand leads to inefficient inventory and supply chain operations.", "Complex Supplier Analysis: Difficulty in identifying high-performing suppliers due to fragmented data.","Inconsistent Product Insights: Lack of clear product performance analysis impacts marketing and sales strategies.","Inefficient Categorization: Need for smarter clustering of suppliers and products for strategic decisions."],
        solutions: ["Accurate Sales Forecasting: Uses SARIMA and ML models for reliable 12-month sales predictions.","Supplier Clustering: Applies K-Means and hierarchical clustering for performance-based vendor grouping.","Product Insights: Provides category-level performance analysis for targeted marketing.","Interactive Dashboards: Streamlit-powered visualizations for actionable insights."],
        features: ["AI-Powered Sales Forecasting (12 Months)","Category & Product-Level Insights","Supplier Performance Clustering","Interactive Visual Dashboards for Decision-Making","Data-Driven Inventory & Marketing Strategies"],
        tools: ["Python – For time-series forecasting and data processing.", "SARIMA / ML Models – For accurate sales predictions.", "Streamlit – For building an interactive dashboard.", "Neo4j – For visualizing supplier-product relationships and clusters.","Database – For structured data storage."],
        flowchart: "Raw Sales Data → Forecasting Model (SARIMA) → Category-Level Predictions → Supplier Clustering (K-Means/Hierarchical) → Product Segmentation → Streamlit Dashboard for Insights"
      }
    },
    {
      id: "11",
      title: "Legal Edge Chatbot",
      description: "Streamline access to legal knowledge by enabling natural language queries with precise, context-aware answers. Transform legal documents into a searchable, intelligent format to support faster, more informed decision-making.",
      link: "https://legal-edge-chatbot.streamlit.app/",
      icon: <PackageOpen size={24} />,
      color: "#EC7FA9",
      category: "business",
      details: {
        overview: "An AI-powered assistant designed to streamline responses to legal inquiries and provide quick, accurate access to essential legal documents. It ensures consistency, reduces response times, and centralizes knowledge for legal teams and stakeholders.",
        client: "A legal department or law firm",
        challenges: ["Time-Consuming Document Search: Legal staff spent hours locating files across folders and systems.","Inconsistent Responses: Common legal queries were answered inconsistently, causing delays.","No Centralized Knowledge Base: Employees lacked a unified platform for accurate legal information.","Knowledge Fragmentation: Expertise scattered across individuals created inefficiencies and errors."],
        solutions: ["Conversational Legal Assistant: Handles legal queries through a chatbot interface for instant, accurate responses.", "Automated Document Retrieval: Fetches and shares relevant legal documents stored in SharePoint for consistency and compliance.","Workflow Automation: Standardizes responses and streamlines access to frequently requested documents.","Time Optimization: Reduces repetitive tasks for legal staff, enabling focus on complex cases."],
        features: ["AI-Powered Legal Query Resolution","Instant Access to Legal Documents","Integration with SharePoint for Document Management","Automated Workflow for Standardized Responses","Centralized Legal Knowledge Base","Faster Turnaround for Stakeholders."],
        tools: ["Python – For backend logic and document query handling.", "Streamlit – For creating an interactive interface for legal teams and stakeholders.", "SharePoint – For secure storage and retrieval of legal documents.", "LLMs – For conversational query handling and natural language responses."],
        flowchart: "User Submits Query → Python Backend Processes Request → Document Search in SharePoint → Relevant File & Answer Fetched → Displayed via Streamlit Interface"
      }
    },
    {
      id: "12",
      title: "Multilingual Email Search & Indexing Assistant - PST files",
      description: "A multilingual AI assistant for natural language email archive search, seamlessly integrating with Microsoft tools to deliver efficient, compliant, and productivity-enhancing results.",
      link: "https://legal-edge-chatbot.streamlit.app/",
      icon: <PackageOpen size={24} />,
      color: "#EC7FA9",
      category: "business",
      details: {
        overview: "A multilingual AI assistant for natural language email archive search, seamlessly integrating with Microsoft tools to deliver efficient, compliant, and productivity-enhancing results.",
        client: "Corporate IT and Legal Teams",
        challenges: ["Time-consuming email searches", "Multilingual content handling", "Compliance issues"],
        solutions: ["Natural language search", "Multilingual support", "Compliance with Microsoft tools"],
        features: ["Natural Language Search", "Multilingual Support", "Compliance Integration", "Fast Indexing"],
        tools: ["Python", "Microsoft Graph API", "Streamlit", "LLMs"],
        flowchart: "Email Query → Natural Language Processing → Search Indexing → Results Display"
      }
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || product.category === filter;
    return matchesSearch && matchesFilter;
  });

  useEffect(() => {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.style.animationName = 'none';
      setTimeout(() => {
        card.style.animationName = 'fadeIn';
      }, 10);
    });
  }, [filter, searchTerm, viewMode]);

  const handleDetailsClick = (product) => {
    console.log("Details button clicked for product:", product.title);
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  // Helper function to render array or string as bullet points
  const renderAsBullets = (data, key) => {
    if (!data) return null;
    if (Array.isArray(data)) {
      return (
        <ul>
          {data.map((item, index) => (
            <li key={`${key}-${index}`}>{item}</li>
          ))}
        </ul>
      );
    }
    return <ul><li>{data}</li></ul>;
  };

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
                <div className="product-buttons">
                  {["06", "07", "08", "10", "11"].includes(product.id) && (
                    <button 
                      className="product-button" 
                      style={{backgroundColor: product.color, border: 'none'}}
                      onClick={() => handleDetailsClick(product)}
                    >
                      Details <Info size={16} className="button-icon" />
                    </button>
                  )}
                  <a 
                    href={`https://your-product-site.com/product?id=${product.id}`} 
                    className="product-button" 
                    style={{backgroundColor: product.color}}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Explore <ArrowRight size={16} className="button-icon" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedProduct && (
          <div className="popup-overlay">
            <div 
              className="popup-content" 
              style={{ "--popup-accent-color": selectedProduct.color }}
            >
              <button className="popup-close" onClick={closePopup}>×</button>
              <h2>{selectedProduct.title}</h2>
              <div className="popup-section" style={{animationDelay: '0.1s'}}>
                <h3>Overview</h3>
                <p>{selectedProduct.details?.overview || "No overview available"}</p>
              </div>
              <div className="popup-section" style={{animationDelay: '0.2s'}}>
                <h3>Client</h3>
                {renderAsBullets(selectedProduct.details?.client, 'client')}
              </div>
              <div className="popup-section" style={{animationDelay: '0.3s'}}>
                <h3>Challenges</h3>
                {renderAsBullets(selectedProduct.details?.challenges, 'challenges')}
              </div>
              <div className="popup-section" style={{animationDelay: '0.4s'}}>
                <h3>Solutions</h3>
                {renderAsBullets(selectedProduct.details?.solutions, 'solutions')}
              </div>
              <div className="popup-section" style={{animationDelay: '0.5s'}}>
                <h3>Features</h3>
                {renderAsBullets(selectedProduct.details?.features, 'features')}
              </div>
              <div className="popup-section" style={{animationDelay: '0.6s'}}>
                <h3>Tools Used</h3>
                {renderAsBullets(selectedProduct.details?.tools, 'tools')}
              </div>
              <div className="popup-section" style={{animationDelay: '0.7s'}}>
                <h3>Flowchart</h3>
                {renderAsBullets(selectedProduct.details?.flowchart, 'flowchart')}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UseCase;