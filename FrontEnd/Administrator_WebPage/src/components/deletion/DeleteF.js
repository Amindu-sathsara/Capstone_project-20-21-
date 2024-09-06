import React, { useState } from 'react';
import axios from 'axios';
import './DeleteAccountForm.css';

export default function DeleteF() {
  const [fullName, setFullName] = useState('');
  const [nicNo, setNicNo] = useState('');
  const [errors, setErrors] = useState({});

  // Function to handle the Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    let errors = {};
    if (!fullName) {
      errors.fullName = 'Full name is required';
    }
    if (!nicNo) {
      errors.nicNo = 'NIC number is required';
    }
    setErrors(errors);

    // Proceed with form submission if there are no errors
    if (Object.keys(errors).length === 0) {
      try {
        // Replace with your actual delete endpoint URL
        const response = await axios.delete('http://localhost:3000/users/deleteuser', {
          data: {
            fullName,
            nicNo,
          },
        });

        console.log('Account deleted successfully:', response.data);
        alert('Account Deleted Successfully');

        // Clear the form fields after successful deletion
        setFullName('');
        setNicNo('');
      } catch (error) {
        console.error('Error deleting account', error);
      }
    }
  };

  return (
    <div className="delete-account-container">
      <div className="delete-account-card">
        <h2 className="delete-account-title">Delete User's Account</h2>
        <form className="delete-account-form" onSubmit={handleSubmit}>
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

          <button type="submit" className="delete-button">
            Delete Account
          </button>
        </form>
      </div>
    </div>
  );
}