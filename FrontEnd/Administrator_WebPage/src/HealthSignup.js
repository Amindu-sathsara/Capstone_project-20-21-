import React, { useState } from 'react'
import './signup.css'


export default function HealthSignup() {

// Define Variable for inputs
  const [fullName, setFullName] = useState('');
  const [nicNo, setNicNo] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [occupation, setOccupation] = useState('');
  const [errors, setErrors] = useState({});

// Function to handle the Form
  const handleSubmit = (e) => {
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
if (!occupation) {
  errors.occupation = 'Occupation is required';
}
setErrors(errors);

// Proceed with form submission
if (Object.keys(errors).length === 0) {
  
  console.log('Form submitted:', { fullName, nicNo, email, contactNo, occupation });
}
};

  return (
    <div className='container'>
       <div className='cover'>
       <form className='box' onSubmit={handleSubmit}>
        <br/><h3 className='text'>Create account For Healthcare Professionals</h3><br/>
        
          <label className='ftext'id='n' htmlFor='name'>Full Name :</label>
          <input className='fbox'type='text' placeholder='Enter Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)}/>
          {errors.fullName && <span className='error'>{errors.fullName}</span>}
          <br/>
        
          <label className='ftext'id='N' htmlFor='number'>NIC No:</label>
          <input className='fbox' type='number' placeholder='Enter NIC' value={nicNo} onChange={(e) => setNicNo(e.target.value)}/>
          {errors.nicNo && <span className='error'>{errors.nicNo}</span>}
          <br/>
        
        
          <label className='ftext'id='E' htmlFor='email'>Email :   </label>
          <input className='fbox' type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <span className='error'>{errors.email}</span>}
          <br/>
      
        
          <label className='ftext' htmlFor='number'>Contact No :</label>
          <input className='fbox' type='number' placeholder='Enter Number' value={contactNo} onChange={(e) => setContactNo(e.target.value)}/>
          {errors.contactNo && <span className='error'>{errors.contactNo}</span>}
          <br/>
       
          <label className='ftext' htmlFor='text'>Occupation :</label>
          <input className='fbox'type='text' value={occupation} onChange={(e) => setOccupation(e.target.value)}/>
          {errors.occupation && <span className='error'>{errors.occupation} </span>}
       
        <div className='Button' >
         <button type='submit' className='buton'>Create</button>
        </div>
       </form>
      </div> 
    </div>
  );
}
