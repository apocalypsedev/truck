import React, { useState } from 'react';
import axios from 'axios';

const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/users/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token); // Store token in local storage
      setMessage('Login successful');
      // Redirect to a protected route or home page after successful login
      // e.g., window.location.href = '/home';
    } catch (err) {
      setMessage('Error: ' + err.response.data.msg);
    }
  };

  return (
    <div className='mt-20 bg-slate-200'>
      <h2>Login User</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginUser;
