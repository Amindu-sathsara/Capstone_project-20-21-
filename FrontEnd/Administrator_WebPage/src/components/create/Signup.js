import React, { useState } from 'react'
import './signup.css'
import axios from 'axios';
import '../button/button.css'

export default function Signup() {

  const [fullName, setFullName] = useState('');
  const [nicNo, setNicNo] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [userType, setUserType] = useState('');
  const [errors, setErrors] = useState({});

  // Function to handle the Form
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

// Proceed with form submission
if (Object.keys(errors).length === 0) {
  try {
    const response = await axios.post('https://localhost:3000', {
      fullName,
      nicNo,
      email,
      contactNo,
      userType,
    });
  
  console.log('Form submitted successfully:', response.data);
  setFullName('');
  setNicNo('');
  setEmail('');
  setContactNo('');
  setUserType('');
} catch (error){
  console.error('Error submitting form', error);
}
}
};

  return (
    <div className='container'>
     <div className='cover'>
       <form className='box' onSubmit={handleSubmit}>
        
          <label className='ftext' htmlFor='name'>Full Name :</label>
          <input className='fbox'id='n'type='text' placeholder='Enter Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
          {errors.fullName && <span className='error'>{errors.fullName}</span>}
          <br/>
        
        
          <label className='ftext' htmlFor='number'>NIC No:</label>
          <input className='fbox' id='N'type='number' placeholder='Enter NIC' value={nicNo} onChange={(e) => setNicNo(e.target.value)} />
          {errors.nicNo && <span className='error'>{errors.nicNo}</span>}
          <br/>
        
        
          <label className='ftext' htmlFor='email'>Email :</label>
          <input className='fbox' id='E'type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          {errors.email && <span className='error'>{errors.email}</span>}
          <br/>
        
        
          <label className='ftext' htmlFor='number'>Contact No :</label>
          <input className='fbox' type='number' placeholder='Enter Number' value={contactNo} onChange={(e) => setContactNo(e.target.value)}/>
          {errors.contactNo && <span className='error'>{errors.contactNo}</span>}
          <br/>

          <label className='ftext'> User Type :</label>
           <select className="fbox" id='S' value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option>Parent</option>
            <option>HealthCare Professional</option>
           </select>
           {errors.userType && <span className='error'>{errors.userType}</span>}
           <br/>
       </form>
       <div className='Button'>
          <button type='submit' className='buton' onClick={handleSubmit}>Create</button>
       </div>

      </div> 
    </div>
  );
}
