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
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
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
if (!password) {
  errors.password = 'Password is required';
} else if (password.length < 6) {
  errors.password = 'Password must be at least 6 characters long';
}
if (!userName) {
  errors.userName = 'userName is required';
}
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
        'Content-Type':'application/json',
      },
    });
    console.log('Account create successfully:', response.data);
    alert("Account create Successfully");
  setFullName('');
  setNicNo('');
  setEmail('');
  setContactNo('');
  setUserType('');
  setUserName('');
  setPassword('');
} catch (error){
  console.error('Error submitting form', error);
}
}
};

  return (
    <div className='container'>
     <div className='cover'>
       <form className='box' onSubmit={handleSubmit}>
        
          <label className='ftext' htmlFor='name'>Full Name :</label><br/>
          <input className='fbox'id='n'type='text' placeholder='Enter Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
          {errors.fullName && <span className='error'>{errors.fullName}</span>}
          <br/>
        
        
          <label className='ftext' htmlFor='number'>NIC No:</label><br/>
          <input className='fbox' id='n'type='number' placeholder='Enter NIC' value={nicNo} onChange={(e) => setNicNo(e.target.value)} />
          {errors.nicNo && <span className='error'>{errors.nicNo}</span>}
          <br/>
        
        
          <label className='ftext' htmlFor='email'>Email :</label><br/>
          <input className='fbox' id='n'type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          {errors.email && <span className='error'>{errors.email}</span>}
          <br/>
        
        
          <label className='ftext' htmlFor='number'>Contact No :</label><br/>
          <input className='fbox' id='n' type='number' placeholder='Enter Number' value={contactNo} onChange={(e) => setContactNo(e.target.value)}/>
          {errors.contactNo && <span className='error'>{errors.contactNo}</span>}
          <br/>

          <label className='ftext'> User Type :</label><br/>
           <select className="fbox" id='n' value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option>PARENT</option>
            <option>DOCTOR</option>
           </select>
           {errors.userType && <span className='error'>{errors.userType}</span>}
           <br/>

           <label className='ftext' htmlFor='userName'>UserName :</label><br/>
          <input className='fbox' id='n' type='userName' placeholder='Enter UserName' value={userName} onChange={(e) => setUserName(e.target.value)} />
          {errors.userName && <span className='error'>{errors.userName}</span>}
          <br/>

          <label className='ftext' htmlFor='password'>Password :</label><br/>
          <input className='fbox' id='n' type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <span className='error'>{errors.password}</span>}
        
      
       <div>
          <button type='submit' className='buton'>Create</button>
       </div>
       </form>
      </div> 
    </div>
  );
}
