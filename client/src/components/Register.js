import React, { useState } from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your registration logic here
  };

  return (
    <div className="registration-container">
      <h2>Create Account</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className='inputElements'>
          <label>Name</label>
          <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div className='inputElements'>
          <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div className='rememberMe'>
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Remember me
        </label>
        </div>
        <button type="submit">Register</button>
        <div>
          <span>Already have an account? </span>
          <Link to="/login">Log in</Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
