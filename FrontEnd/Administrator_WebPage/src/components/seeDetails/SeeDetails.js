import React, { useState } from 'react';
import axios from 'axios';
import '../create/signup.css'
import '../button/button.css'

export default function SeeDetails() {
  const [fullName, setFullName] = useState('');
  const [nicNo, setNicNo] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [errors, setErrors] = useState({});
  const [userDetails, setUserDetails] = useState(null);

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
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }
    if (!contactNo) {
      errors.contactNo = 'Contact number is required';
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.get('https://your-api-endpoint.com/users', {
          params: {
            nicNo,
            email,
          },
        });

        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details', error);
        setUserDetails(null);
      }
    }
  };

  return (
    <div className='container'>
      <div className='cover'>
      <br/><h3 className='text'>See Details Of User's</h3><br/>

        <form className='box' onSubmit={handleSubmit}>
          
          <label className='ftext' htmlFor='name'>Full Name :</label>
          <input className='fbox' id='n' type='text' placeholder='Enter Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
          {errors.fullName && <span className='error'>{errors.fullName}</span>}
          <br/>
          
          <label className='ftext' htmlFor='nicNo'>NIC No:</label>
          <input className='fbox' id='N' type='text' placeholder='Enter NIC' value={nicNo} onChange={(e) => setNicNo(e.target.value)} />
          {errors.nicNo && <span className='error'>{errors.nicNo}</span>}
          <br/>
          
          <label className='ftext' htmlFor='email'>Email :</label>
          <input className='fbox' id='E' type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <span className='error'>{errors.email}</span>}
          <br/>
          
          <label className='ftext' htmlFor='contactNo'>Contact No :</label>
          <input className='fbox' id='contactNo' type='text' placeholder='Enter Number' value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
          {errors.contactNo && <span className='error'>{errors.contactNo}</span>}
          <br/>
      
        </form>

        <div className='Button'>
          <button type='submit' className='buton' onClick={handleSubmit}>See Details</button>
       </div>

        {userDetails && (
          <div className='user-details'>
            <h3>User Details</h3>
            <p>Full Name: {userDetails.fullName}</p>
            <p>NIC No: {userDetails.nicNo}</p>
            <p>Email: {userDetails.email}</p>
            <p>Contact No: {userDetails.contactNo}</p>
            <p>User Type: {userDetails.userType}</p>
          </div>
        )}
      </div>
    </div>
  );
}
