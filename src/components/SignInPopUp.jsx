// SignInPopup.js
import React, { useState, useEffect } from 'react';
import { FaTimes, FaUser , FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignInPopup = ({ showSignIn, setShowSignIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (showSignIn) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSignIn]);

  const handleSignIn = (e) => {
    e.preventDefault();
    
    const button = e.target.querySelector('.signin-btn');
    button.innerText = 'Signing in...';
    button.disabled = true;
    
    setTimeout(() => {
      if (username === 'admin' && password === 'Password') {
        setShowSignIn(false);
        setError('');
        navigate('/Usecase');
      } else {
        setError('Invalid username or password');
        button.innerText = 'Sign In';
        button.disabled = false;
      }
    }, 800); // Simulated delay for effect
  };

  const closeModal = () => {
    const overlay = document.querySelector('.signin-overlay');
    if (overlay) {
      overlay.style.opacity = '0';
      setTimeout(() => setShowSignIn(false), 300);
    } else {
      setShowSignIn(false);
    }
  };

  return (
    <>
      {showSignIn && (
        <div className="signin-overlay" onClick={(e) => {
          if (e.target.className === 'signin-overlay') closeModal();
        }}>
          <div className="signin-popup">
            <div className="signin-header">
              <h2>Welcome !!</h2>
              <button 
                className="close-btn" 
                onClick={closeModal}
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>
            <form onSubmit={handleSignIn}>
              <div className="input-group">
                <FaUser  className="input-icon" />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="remember-forgot" id='pw'>
                <label className="remember-me">
                  <input 
                    type="checkbox" 
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)} 
                  />
                  Remember me
                </label>
                <a href="#pw" className="forgot-password">Forgot password?</a>
              </div>
              
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="signin-btn">Sign In</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInPopup;