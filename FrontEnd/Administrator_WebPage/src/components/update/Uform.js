import React, { useState } from 'react';
import '../create/signup.css';
import axios from 'axios';
import '../button/button.css';

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
    <div className='container'>
      <div className='cover'>
      <br/><h3 className='text'>Update Details Of User's</h3><br/>
        <form className='box' onSubmit={handleSubmit}>

          <label className='ftext' htmlFor='name'>Full Name :</label> <br/>
          <input className='fbox' id='n' type='text' placeholder='Enter Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
          {errors.fullName && <span className='error'>{errors.fullName}</span>}
          <br />

          <label className='ftext' htmlFor='number'>NIC No:</label> <br/>
          <input className='fbox' id='n' type='number' placeholder='Enter NIC' value={nicNo} onChange={(e) => setNicNo(e.target.value)} />
          {errors.nicNo && <span className='error'>{errors.nicNo}</span>}
          <br />

          <label className='ftext' htmlFor='email'>Email :</label> <br/>
          <input className='fbox' id='n' type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <span className='error'>{errors.email}</span>}
          <br />

          <label className='ftext' htmlFor='contactNo'>Contact No :</label> <br/>
          <input className='fbox' id='n' type='number' placeholder='Enter Number' value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
          {errors.contactNo && <span className='error'>{errors.contactNo}</span>}
          <br />

          <label className='ftext'>User Type :</label> <br/>
          <select className="fbox" id='n' value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="PARENT">PARENT</option>
            <option value="DOCTOR">DOCTOR</option>
          </select>
          {errors.userType && <span className='error'>{errors.userType}</span>}
          <br />

          <label className='ftext' htmlFor='userName'>UserName :</label> <br/>
          <input className='fbox' id='n' type='text' placeholder='Enter UserName' value={userName} onChange={(e) => setUserName(e.target.value)} />
          {errors.userName && <span className='error'>{errors.userName}</span>}
          <br />

          <label className='ftext' htmlFor='password'>Password :</label> <br/>
          <input className='fbox' id='n' type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <span className='error'>{errors.password}</span>}

          <div>
            <button type='submit' className='buton'>Update</button>
          </div>
          <br/>
        </form>
      </div>
    </div>
  );
}
