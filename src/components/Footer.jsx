import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "../styles/Footer.css"; // Create a separate CSS file for the footer if needed

 
const Footer = () => {
  return (
    <footer className="footer-container footer">
      <div className=" footer-content">
        {/* Contact Information */}
        <div className=" footer-section  contact-section">
          <div className=" contact-info">
            <p>📍 2401 E Katella Ave, Suite 450</p>
            <p>Anaheim, CA 92806</p>
            <p>📞 (714) 912-1600</p>
            <p>✉️ info@ubtiinc.com</p>
            <div className=" social-icons">
              <a href="https://www.linkedin.com/company/ubti/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className=" social-icon" />
              </a>
              <a href="https://twitter.com/ubtiinc" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className=" social-icon" />
              </a>
              <a href="https://www.youtube.com/channel/UCPoCQsgtUooguMjwJgvLjQA" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className=" social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className=" footer-section  contact-section">
          <div className=" contact-info">
            <ul className=" quick-links">
              <li><a href="/" id="Headings">Quick Links</a></li><br />
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/service">Services</a></li>
            </ul>
          </div>
        </div>
        {/* Microsoft Solutions Partner */}
        <div className=" footer-section  partner-section">
          <div className=" ms-partner">
            <img
              src="https://149510500.v2.pressablecdn.com/wp-content/uploads/2024/01/Microsoft-Solution-Partner-1.1-574-x-249-px-1.png"
              alt="Microsoft Solutions Partner"
              className=" ms-partner-image  animate-slide-up"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;