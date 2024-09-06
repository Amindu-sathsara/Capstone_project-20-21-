import React, { useState } from 'react';
import axios from 'axios';
import './SignupForm.css';

export default function SignupForm() {
  const [fullName, setFullName] = useState('');
  const [nicNo, setNicNo] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [userType, setUserType] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};
    if (!fullName) errors.fullName = 'Full name is required';
    if (!nicNo) errors.nicNo = 'NIC number is required';
    if (!email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Invalid email format';
    if (!contactNo) errors.contactNo = 'Contact number is required';
    if (!password) errors.password = 'Password is required';
    else if (password.length < 6) errors.password = 'Password must be at least 6 characters long';
    if (!userName) errors.userName = 'Username is required';
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3000/users', {
          fullName,
          nicNo,
          email,
          contactNo,
          userType,
          userName,
          password,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Account created successfully:', response.data);
        alert("Account created Successfully");
        setFullName('');
        setNicNo('');
        setEmail('');
        setContactNo('');
        setUserType('');
        setUserName('');
        setPassword('');
      } catch (error) {
        console.error('Error submitting form', error);
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="nicNo">NIC No:</label>
            <input
              id="nicNo"
              type="text"
              placeholder="Enter NIC"
              value={nicNo}
              onChange={(e) => setNicNo(e.target.value)}
            />
            {errors.nicNo && <span className="error">{errors.nicNo}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="contactNo">Contact No:</label>
            <input
              id="contactNo"
              type="tel"
              placeholder="Enter Number"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
            {errors.contactNo && <span className="error">{errors.contactNo}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="userType">User Type:</label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="PARENT">PARENT</option>
              <option value="DOCTOR">DOCTOR</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="userName">Username:</label>
            <input
              id="userName"
              type="text"
              placeholder="Enter Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {errors.userName && <span className="error">{errors.userName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button type="submit" className="submit-button">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}