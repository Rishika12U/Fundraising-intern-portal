import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">
          <h2>Create Account</h2>
          <p>Join us today</p>
        </div>
        
        <form onSubmit={handleSignup} className="signup-form">
          <div className="form-group">
            <div className="input-field">
              <label htmlFor="fullname">Full Name</label>
              <input
                id="fullname"
                type="text"
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="input-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                required
              />
            </div>
          </div>

          <div className="terms-agreement">
            <input id="terms" type="checkbox" required />
            <label htmlFor="terms">
              I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>

        <div className="signup-footer">
          <p>Already have an account? <a href="/">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;