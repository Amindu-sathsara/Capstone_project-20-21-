import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SeeDetailsForm.css';

export default function SeeDetails() {
  const [fullName, setFullName] = useState('');
  const [nicNo, setNicNo] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [errors, setErrors] = useState({});
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};
    if (!fullName) errors.fullName = 'Full name is required';
    if (!nicNo) errors.nicNo = 'NIC number is required';
    if (!email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Invalid email format';
    if (!contactNo) errors.contactNo = 'Contact number is required';
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.get('http://localhost:3000/users/findone', {
          params: { fullName, nicNo, email, contactNo },
        });
        setUserDetails(response.data);
        navigate('/user-details', { state: { user: response.data } });
      } catch (error) {
        console.error('Error fetching user details', error);
        setUserDetails(null);
      }
    }
  };

  return (
    <div className="see-details-container">
      <div className="see-details-card">
        <h2 className="see-details-title">See User Details</h2>
        <form className="see-details-form" onSubmit={handleSubmit}>
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

          <button type="submit" className="submit-button">
            See Details
          </button>
        </form>

        {userDetails && (
          <div className="user-details">
            <h3>User Details</h3>
            <p><strong>Full Name:</strong> {userDetails.fullName}</p>
            <p><strong>NIC No:</strong> {userDetails.nicNo}</p>
            <p><strong>Email:</strong> {userDetails.email}</p>
            <p><strong>Contact No:</strong> {userDetails.contactNo}</p>
            <p><strong>User Type:</strong> {userDetails.userType}</p>
          </div>
        )}
      </div>
    </div>
  );
}