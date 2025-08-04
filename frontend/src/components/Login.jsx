import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <div className="input-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="text"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input id="remember-me" type="checkbox" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="submit-btn">
            Sign In
          </button>
      </form>

        <div className="login-footer">
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;