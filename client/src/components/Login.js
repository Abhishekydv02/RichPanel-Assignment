// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import login.css file
import Page1 from './Page';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // Add state for login status

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
        rememberMe,
      });
      console.log(response.data);
      // If login successful, set loggedIn to true
      setLoggedIn(true);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  // If loggedIn is true, render Page1 component
  if (loggedIn) {
    return <Page1 />;
  }

  return (
    <div className="login-container"> {/* Apply login-container class */}
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}> {/* Apply login-form class */}
      <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label>Remember me</label>
        </div>
        <button type="submit">Login</button>
        <div>
          <span>Don't have an account? </span>
          <Link to="/register">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

