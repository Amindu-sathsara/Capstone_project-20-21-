import React, { useState } from 'react';
import '../create/signup.css';
import axios from 'axios';
import './uForm.css'

export default function UpdateUserForm({ user }) {  // Accept `user` as a prop

  const [fullName, setFullName] = useState(user?.fullName || '');
  const [nicNo, setNicNo] = useState(user?.nicNo || '');
  const [email, setEmail] = useState(user?.email || '');
  const [contactNo, setContactNo] = useState(user?.contactNo || '');
  const [userType, setUserType] = useState(user?.userType || '');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState(user?.userName || '');
  const [errors, setErrors] = useState({});

  // Function to handle the Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    let errors = {};
    if (!fullName) errors.fullName = 'Full name is required';
    if (!nicNo) errors.nicNo = 'NIC number is required';
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }
    if (!contactNo) errors.contactNo = 'Contact number is required';
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (!userName) errors.userName = 'Username is required';
    setErrors(errors);

    console.log("Form Data:", {
      fullName,
      nicNo,
      email,
      contactNo,
      userType,
      userName,
      password,
    });

    // Proceed with form submission
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.patch(`http://localhost:3000/users/updateuser`, {  // Use `PUT` method and pass user ID or NIC
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
        console.log('Account updated successfully:', response.data);
        alert('Data Updated Successfully');
        // Clear form fields or handle success accordingly
        // setFullName('');
        // setNicNo('');
        // setEmail('');
        // setContactNo('');
        // setUserType('');
        // setUserName('');
        // setPassword('');
      } catch (error) {
        console.error('Error updating form', error);
      }
    }
  };

  return (
    <div className='see-details-container'>
      <div className='see-details-card'>
      <br/><h3 className='see-details-title'>Update Details Of User's</h3><br/>
        <form className='see-details-form' onSubmit={handleSubmit}>
         <div className='form-group'>
          <label htmlFor='name'>Full Name :</label> 
          <input id='fullName' type='text' placeholder='Enter Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
          {errors.fullName && <span className='error'>{errors.fullName}</span>}
          <br />
          </div>

          <div className='form-group'>
          <label htmlFor='number'>NIC No:</label> 
          <input  id='NIC' type='number' placeholder='Enter NIC' value={nicNo} onChange={(e) => setNicNo(e.target.value)} />
          {errors.nicNo && <span className='error'>{errors.nicNo}</span>}
          <br />
          </div>
         
          <div className='form-group'>
          <label htmlFor='email'>Email :</label> 
          <input  id='email' type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <span className='error'>{errors.email}</span>}
          <br />
          </div>

          <div className='form-group'>
          <label htmlFor='contactNo'>Contact No :</label> 
          <input  id='contactNo' type='number' placeholder='Enter Number' value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
          {errors.contactNo && <span className='error'>{errors.contactNo}</span>}
          <br />
          </div>
          
          <div className='form-group'>
          <label >User Type :</label> 
          <select  id='userType' value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="PARENT">PARENT</option>
            <option value="DOCTOR">DOCTOR</option>
          </select>
          {errors.userType && <span className='error'>{errors.userType}</span>}
          <br />
        
          </div>

          <div className='form-group'>
          <label  htmlFor='userName'>UserName :</label> 
          <input  id='userName' type='text' placeholder='Enter UserName' value={userName} onChange={(e) => setUserName(e.target.value)} />
          {errors.userName && <span className='error'>{errors.userName}</span>}
          <br />
          </div>
          <div className='form-group'>
          <label  htmlFor='password'>Password :</label> 
          <input  id='password' type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <span className='error'>{errors.password}</span>}
          </div>
          <br/>
            <button type='submit' className='submit-button'>Update</button>
        </form>
      </div>
    </div>
  );
}
