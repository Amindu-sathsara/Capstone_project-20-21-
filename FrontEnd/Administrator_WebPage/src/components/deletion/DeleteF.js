import React, { useState } from 'react';
import '../create/signup.css';
import axios from 'axios';
import '../../components/button/button.css';

export default function Signup() {
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
        alert('Account Deleted Succussfully');

        // Clear the form fields after successful deletion
        setFullName('');
        setNicNo('');
      } catch (error) {
        console.error('Error deleting account', error);
      }
    }
  };

  return (
    <div className='container'>
      <div className='cover'>
        <br />
        <h3 className='text'>Delete User's Accounts</h3>
        <br />
        <form className='box' onSubmit={handleSubmit}>
          <label className='ftext' htmlFor='name'>Full Name :</label><br/>
          <input
            className='fbox'
            id='n'
            type='text'
            placeholder='Enter Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && <span className='error'>{errors.fullName}</span>}
          <br />

          <label className='ftext' htmlFor='nic'>NIC No:</label><br/>
          <input
            className='fbox'
            id='n'
            type='text'
            placeholder='Enter NIC'
            value={nicNo}
            onChange={(e) => setNicNo(e.target.value)}
          />
          {errors.nicNo && <span className='error'>{errors.nicNo}</span>}
          <br />

          <div>
            <button type='submit' className='buton'>
              Delete
            </button>
          </div>
          <br/>
        </form>
      </div>
    </div>
  );
}
