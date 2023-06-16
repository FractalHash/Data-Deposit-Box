import React, { useState } from 'react';
import './LogIn.scss';
import logo from '../../assets/images/Vector.png';
import axios from 'axios';
import validator from 'validator';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    try {
      const response = await axios.post("http://localhost:8080/login", { email, password })
      navigate("/user")
    } catch (error) {
      alert("could not login")
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt='logo' />
      <h1>Data Deposit Box</h1>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className='email'
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
            className='password'
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </div>
        <div className="form-group">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="form-group">
          <Link to="/">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
