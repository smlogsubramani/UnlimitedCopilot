import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ProductDetails.css';
import { Code, SquareCheck, Bot, Brain, LucideSettings, MessageCircleWarning, ImagePlay } from 'lucide-react';

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false); // State for image popup
  const [flowStatus, setFlowStatus] = useState(null); // State to track flow trigger status

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page loads at the top
  }, []);

  // Scroll animation for fade-in effects
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.fade-in');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Toggle image popup
  const toggleImagePopup = () => {
    setIsImagePopupOpen(!isImagePopupOpen);
  };

  // Function to trigger Power Automate flow
  const triggerPowerAutomateFlow = async () => {
  setFlowStatus('Triggering flow...'); // Show loading state
  try {
    const flowUrl = 'https://e3ce6a5bed6ee60eaf3e95da640198.13.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/a41ae13c15704796ba28ee39b4bda14a/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wTOBF80vYy5d4Uxvzmdyi2xxiGuaeYQ-IJE8L4G7w6Q';

    const response = await fetch(flowUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    const status = response.status;
    const responseText = await response.text();
    console.log('Response Status:', status);
    console.log('Response Body:', responseText);

    if (status === 200 || status === 202) {
      try {
        const responseJson = JSON.parse(responseText);
        // Check for flow-specific error in the response body
        if (responseJson.status === 'Failed' || responseJson.error) {
          setFlowStatus(`Flow triggered but failed: ${responseJson.error?.message || 'Unknown error in flow execution'}`);
        } else {
          setFlowStatus('Flow triggered successfully!');
        }
      } catch (e) {
        // Non-JSON response (e.g., empty or plain text) is common for manual triggers
        setFlowStatus('Flow triggered successfully!');
      }
    } else {
      setFlowStatus(`Failed to trigger flow. Status: ${status}. Details: ${responseText || 'No additional details'}`);
    }
  } catch (error) {
    console.error('Request error:', error);
    setFlowStatus(`Request error: ${error.message}. Likely CORS or network issue.`);
  }

  // Clear status message after 5 seconds
  setTimeout(() => setFlowStatus(null), 5000);
};

  if (!product) {
    return (
      <div className={`main-container ${product.id === "14" ? "main-container-fullwidth" : ""}`}>
        <Navbar />
        <div className="content-column">
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Product Not Found</h2>
                <p className="section-subtitle">Please go back and select a product.</p>
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/usecase')}
              >
                <i className="fas fa-arrow-left"></i> Back to Products
              </button>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }

  // Helper function to render array or string as bullet points with tick icon
  const renderAsBullets = (data, key) => {
    if (!data) return <p>No data available</p>;
    
    const iconMap = {
      challenges: <MessageCircleWarning size={20} style={{ marginRight: '8px', color: '#EC7FA9' }} />,
      solutions: <SquareCheck size={20} style={{ marginRight: '8px', color: '#0b556a' }} />,
      features: <Brain size={20} style={{ marginRight: '8px', color: '#0e6d88' }} />,
      tools: <Code size={20} style={{ marginRight: '8px', color: '#4b5563' }} />,
      default: <SquareCheck size={20} style={{ marginRight: '8px', color: '#0b556a' }} />
    };

    const icon = iconMap[key] || iconMap.default;

    if (Array.isArray(data)) {
      return (
        <ul className="solution-benefits">
          {data.map((item, index) => (
  <li key={`${key}-${index}`}>
    {React.cloneElement(icon, { key: index })}
    {key === 'solutions' ? (
      <span dangerouslySetInnerHTML={{ __html: item }} />
    ) : (
      item
    )}
  </li>
))}

        </ul>
      );
    }
    return (
      <ul className="solution-benefits">
        <li>
          {icon}
          {data}
        </li>
      </ul>
    );
  };

  return (
    <div className={`main-container ${product.id === "14" ? "main-container-fullwidth" : ""}`}>
      <div className="product-details-shape shape-1"></div>
      <div className="product-details-shape shape-2"></div>
      <div className="product-details-shape shape-3"></div>
      <div className="product-details-shape shape-4"></div>
      
      <Navbar />
      
      <div className="content-column">
        <section className="section hero">
          <div className="hero-background">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
              <div className="shape shape-4"></div>
            </div>
          </div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">{product.title}</h1>
                <p className="hero-subtitle">{product.description}</p>
                <div className="hero-buttons">
                  <button 
                    className="btn btn-secondary"
                    onClick={() => navigate('/usecase')}
                  >
                    <i className="fas fa-arrow-left"></i> Back to Products
                  </button>
                  {product.id === "14" && (
                    <button
                      className="btn btn-primary"
                      onClick={triggerPowerAutomateFlow}
                      style={{ marginLeft: '10px' }}
                    >
                      <i className="fas fa-play"></i> Trigger Flow
                    </button>
                  )}
                </div>
                {flowStatus && (
                  <p className="flow-status" style={{ marginTop: '10px', color: flowStatus.includes('success') ? 'green' : 'red' }}>
                    {flowStatus}
                  </p>
                )}
                <div className="hero-stats">
                  <div className="stat">
                    <span className="stat-number">99%</span>
                    <span className="stat-label">Accuracy</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Availability</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Integrations</span>
                  </div>
                </div>
              </div>
              <div className="hero-visual">
                <div className="agent-preview">
                  <div className="agent-interface">
                    <div className="interface-header">
                      <div className="status-indicator"></div>
                      <span>{product.title}</span>
                    </div>
                    <div className="interface-body">
                      <div className="message bot-message">
                        <i className="fas fa-robot"></i>
                        <span>Hello! I'm your AI assistant. How can I help you today?</span>
                      </div>
                      <div className="message user-message">
                        <span>Show me {product.category} analytics</span>
                        <i className="fas fa-user"></i>
                      </div>
                      <div className="message bot-message">
                        <i className="fas fa-robot"></i>
                        <span>Explore {product.title} features!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the component remains unchanged */}
        <section id="details" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">About Our {product.title}</h2>
              <p className="section-subtitle">
                Discover how our advanced AI agent transforms business operations
              </p>
            </div>
            <div className="description-content">
              <div className="description-text">
                <div className="feature-card fade-in">
                  <div className="feature-icon">
                    <Brain />
                  </div>
                  <div className="feature-content">
                    <h3>Intelligent Understanding</h3>
                    <p>{product.details?.overview || 'A powerful AI-driven assistant designed to enable multilingual natural language search across email archives.'}</p>
                  </div>
                </div>
                <div className="feature-card fade-in">
                  <div className="feature-icon">
                    <LucideSettings />
                  </div>
                  <div className="feature-content">
                    <h3>Clients</h3>
                    <div className="metric">
                      <span>{renderAsBullets(product.details?.client, 'client')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="challenges" className="section section-dark challenges">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Business Challenges We Solve</h2>
              <p className="section-subtitle">
                Addressing critical pain points in modern business operations
              </p>
            </div>
            <div className="challenges-content">
              <div className="challenges-grid">
                {product.details?.challenges.map((challenge, index) => (
                  <div key={`challenge-${index}`} className="challenge-card fade-in">
                    <div className="challenge-icon">
                      <SquareCheck size={24} />
                    </div>
                    <h3>{challenge.split(':')[0]}</h3>
                    <p>{challenge.split(':').slice(1).join(':').trim()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Features</h2>
              <p className="section-subtitle">
                How our AI agent transforms challenges into opportunities
              </p>
            </div>
            <div className="solutions-content">
              <div className="solution-tabs">
                <button className="tab-button" data-tab="automation">
                  <i className="fa-regular fa-hand-point-right"></i>
                  {product.details?.features[0] || 'Natural Language Search'}
                </button>
                <button className="tab-button" data-tab="integration">
                  <i className="fa-regular fa-hand-point-right"></i>
                  {product.details?.features[1] || 'Multilingual Support'}
                </button>
                <button className="tab-button" data-tab="support">
                  <i className="fa-regular fa-hand-point-right"></i>
                  {product.details?.features[2] || 'Compliance Integration'}
                </button>
                <button className="tab-button" data-tab="analytics">
                  <i className="fa-regular fa-hand-point-right"></i>
                  {product.details?.features[3] || 'Fast Indexing'}
                </button>
                <button className="tab-button" data-tab="analytics">
                  <i className="fa-regular fa-hand-point-right"></i>
                  {product.details?.features[4] || 'Fast Indexing'}
                </button>
                <button className="tab-button" data-tab="analytics">
                  <i className="fa-regular fa-hand-point-right"></i>
                  {product.details?.features[5] || 'Fast Indexing'}
                </button>
              </div>
              <br />
              <div className="tab-content" id="solutions">
                <div className="tab-pane active" id="automation">
                  <div className="solution-details">
                    <div className="solution-text">
                      <h2 className="section-title metric" style={{ textAlign: 'left' }}>Solutions</h2>
                      {renderAsBullets(product.details?.solutions, 'solutions')}
                    </div>
                    <div className="solution-visual">
                      <div className="flow-row top-row">

                        <div className="flow-step">
                          <ImagePlay />
                          <span>Trigger</span>
                        </div>

                        <div className="flow-arrow">→</div>

                        {/* Wrap AI + Down Arrow */}
                        <div className="vertical-group">
                          <div className="flow-step">
                            <Brain />
                            <span>AI Analysis</span>
                          </div>
                          <div className="down-arrow">↓</div>
                        </div>

                      </div>

                      <div className="flow-row bottom-row">

                        <div className="flow-step">
                          <SquareCheck />
                          <span>Complete</span>
                        </div>

                        <div className="flow-arrow">←</div>

                        <div className="flow-step">
                          <LucideSettings />
                          <span>Process</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="integration">
                  <div className="solution-details">
                    <div className="solution-text">
                      <h3>Seamless System Integration</h3>
                      <p>Connect all your business tools and platforms through a single intelligent interface, eliminating data silos and providing unified access to information.</p>
                      <ul className="solution-benefits">
                        <li>
                          <SquareCheck size={16} style={{ marginRight: '8px', color: '#0b556a' }} />
                          API-first architecture
                        </li>
                        <li>
                          <SquareCheck size={16} style={{ marginRight: '8px', color: '#0b556a' }} />
                          Real-time data synchronization
                        </li>
                        <li>
                          <SquareCheck size={16} style={{ marginRight: '8px', color: '#0b556a' }} />
                          Cross-platform compatibility
                        </li>
                        <li>
                          <SquareCheck size={16} style={{ marginRight: '8px', color: '#0b556a' }} />
                          Secure data exchange
                        </li>
                      </ul>
                    </div>
                    <div className="solution-visual">
                      <div className="integration-hub">
                        <div className="hub-center">
                          <i className="fas fa-robot"></i>
                          <span>AI Agent</span>
                        </div>
                        <div className="hub-connection">
                          <i className="fab fa-microsoft"></i>
                          <span>Office 365</span>
                        </div>
                        <div className="hub-connection">
                          <i className="fas fa-database"></i>
                          <span>CRM</span>
                        </div>
                        <div className="hub-connection">
                          <i className="fas fa-chart-bar"></i>
                          <span>Analytics</span>
                        </div>
                        <div className="hub-connection">
                          <i className="fas fa-cloud"></i>
                          <span>Cloud Storage</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="support">
                  <div className="solution-details">
                    <div className="solution-text">
                      <h3>Always-On Customer Support</h3>
                      <p>Provide consistent, high-quality customer support 24/7 with our AI agent that learns from every interaction to continuously improve response quality.</p>
                      <ul className="solution-benefits">
                        <li>
                          <SquareCheck size={16} style={{ marginRight: '8px', color: '#0b556a' }} />
                          Instant response times
                        </li>
                        <li>
                          <SquareCheck size={16} style={{ marginRight: '8px', color: '#0b556a' }} />
                          Multilingual support
                        </li>
                        <li>
                          <SquareCheck size={16} style={{ marginRight: '8px', color: '#0b556a' }} />
                          Escalation handling
                        </li>
                        <li>
                          <SquareCheck size={16} style={{ marginRight: '8px', color: '#0b556a' }} />
                          Sentiment analysis
                        </li>
                      </ul>
                    </div>
                    <div className="solution-visual">
                      <div className="support-metrics">
                        <div className="metric-card">
                          <i className="fas fa-clock"></i>
                          <span className="metric-number">&lt; 1s</span>
                          <span className="metric-label">Response Time</span>
                        </div>
                        <div className="metric-card">
                          <i className="fas fa-smile"></i>
                          <span className="metric-number">98%</span>
                          <span className="stat-label">Satisfaction</span>
                        </div>
                        <div className="metric-card">
                          <i className="fas fa-globe"></i>
                          <span className="metric-number">30+</span>
                          <span className="metric-label">Languages</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="analytics">
                  <div className="solution-details">
                    <div className="solution-text">
                      <h3>Predictive Analytics & Insights</h3>
                      <p>Leverage AI-powered analytics to gain deep insights into your business operations, predict trends, and make data-driven decisions with confidence.</p>
                      <ul className="solution-benefits">
                        <li>
                          <SquareCheck size={16} style={{ marginRight: '8px', color: '#0b556a' }} />
                          Predictive modeling
                        </li>
                        <li>
                          <SquareCheck size={16} style={{ marginRight: '8px', color: '#0b556a' }} />
                          Real-time dashboards
                        </li>
                        <li>
                          <SquareCheck size={16} style={{ marginRight: '8px', color: '#0b556a' }} />
                          Anomaly detection
                        </li>
                        <li>
                          <SquareCheck size={16} style={{ marginRight: '8px', color: '#0b556a' }} />
                          Custom reporting
                        </li>
                      </ul>
                    </div>
                    <div className="solution-visual">
                      <div className="analytics-chart">
                        <div className="chart-header">
                          <h4>Business Performance</h4>
                          <span className="trend-up"><i className="fas fa-arrow-up"></i> +23%</span>
                        </div>
                        <div className="chart-bars">
                          <div className="bar" style={{ height: '40%' }}></div>
                          <div className="bar" style={{ height: '60%' }}></div>
                          <div className="bar" style={{ height: '80%' }}></div>
                          <div className="bar" style={{ height: '90%' }}></div>
                          <div className="bar" style={{ height: '70%' }}></div>
                          <div className="bar" style={{ height: '95%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="optimization">
                  <div className="solution-details">
                    <div className="solution-text">
                      <h3>Optimized Performance</h3>
                      <p>Advanced optimization techniques ensure maximum efficiency and performance across all operations.</p>
                      <ul className="solution-benefits">
                        <li>
                          <SquareCheck size={16} style={{ marginRight: '8px', color: '#0b556a' }} />
                          Performance optimization
                        </li>
                        <li>
                          <SquareCheck size={16} style={{ marginRight: '8px', color: '#0b556a' }} />
                          Resource management
                        </li>
                        <li>
                          <SquareCheck size={16} style={{ marginRight: '8px', color: '#0b556a' }} />
                          Scalable architecture
                        </li>
                        <li>
                          <SquareCheck size={16} style={{ marginRight: '8px', color: '#0b556a' }} />
                          Quality assurance
                        </li>
                      </ul>
                    </div>
                    <div className="solution-visual">
                      <div className="support-metrics">
                        <div className="metric-card">
                          <i className="fas fa-tachometer-alt"></i>
                          <span className="metric-number">99.9%</span>
                          <span className="metric-label">Uptime</span>
                        </div>
                        <div className="metric-card">
                          <i className="fas fa-rocket"></i>
                          <span className="metric-number">2x</span>
                          <span className="metric-label">Faster</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tools" className="section">
          <div className="container">
            <div className="section-header">
              <h3 className="section-title" style={{ textAlign: 'left' }}>Tools Used</h3>
            </div>
            <div className="demo-content">
              <div className="demo-info">
                {renderAsBullets(product.details?.tools, 'tools')}
                <div className="demo-stats">
                  <div className="demo-stat">
                    <span className="stat-number">0</span>
                    <span className="stat-label">Conversations</span>
                  </div>
                  <div className="demo-stat">
                    <span className="stat-number">&lt; 2s</span>
                    <span className="stat-label">Avg Response</span>
                  </div>
                </div>
              </div>
              <div className="demo-visual">
                <h3 className="section-title" style={{ textAlign: 'left' }}>Process Flow</h3>
                <img
                  src={product.details?.image || 'https://assets.website-files.com/62fcdf037b1adc93af4e4cff/6356816eee9bd33825544e45_flowchart-2.png'}
                  alt={`${product.title} Process Flow`}
                  className="process-image fade-in clickable-image"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    border: '1px solid #dadce0',
                    marginTop: '20px',
                    cursor: 'pointer'
                  }}
                  onClick={toggleImagePopup}
                />
              </div>
            </div>
          </div>
        </section>

        {isImagePopupOpen && (
          <div className="image-popup-overlay" onClick={toggleImagePopup}>
            <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
              <button className="image-popup-close" onClick={toggleImagePopup}>×</button>
              <img
                src={product.details?.image || 'https://assets.website-files.com/62fcdf037b1adc93af4e4cff/6356816eee9bd33825544e45_flowchart-2.png'}
                alt={`${product.title} Process Flow Enlarged`}
                className="image-popup"
                style={{
                  maxWidth: '90%',
                  maxHeight: '90vh',
                  borderRadius: '8px'
                }}
              />
            </div>
          </div>
        )}
      </div>

      {product.id !== "14" && (
  <div className="chat-column" id="live-demo">
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-avatar">
          <Bot />
        </div>
        <div className="chat-info">
          <h4>AI Copilot Agent</h4>
          <span className="status online">Online</span>
        </div>
      </div>
      <div className="chat-iframe">
        <iframe
          title='agent'
          src={product.details?.agent}
          style={{ width: '100%', height: '100%' }}
        ></iframe>
      </div>
    </div>
  </div>
)}


      <Footer />
    </div>
  );
};

export default ProductDetails;
