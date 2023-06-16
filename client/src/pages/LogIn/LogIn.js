import React, { useState } from 'react';
import './LogIn.scss';
import axios from 'axios';
import validator from 'validator';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle Submit TODO
  };

  return (
    <div className="login-container">
      <img src='' alt='logo' />
      <h1>Data Deposit Box</h1>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <Link to="/" type="submit" className="signin-button">
            Sign In
          </Link>
        </div>
        <div className="form-group">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="form-group">
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
