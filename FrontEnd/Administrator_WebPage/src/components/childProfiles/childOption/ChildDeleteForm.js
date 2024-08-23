import React, { useState } from 'react';
import axios from 'axios';
import '../createChildForm/cCcreate.css';

export default function ChildDeleteForm() {
  const [fullName, setFullName] = useState('');
  const [parentNic, setParentNic] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!parentNic.trim()) {
      setErrors({ parentNic: 'Parent NIC is required' });
      return;
    }
    if (!fullName.trim()) {
      setErrors({ fullName: 'Full Name is required' });
      return;
    }

    try {
      const response = await axios.delete(`your-api-endpoint/${parentNic}/${fullName}`);
      
      if (response.status === 200) {
        setMessage('Child profile deleted successfully!');
        setErrors({});
        setFullName('');
        setParentNic('');
      } else {
        setMessage('Failed to delete child profile.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Failed to delete child profile.');
    }
  };

  return (
    <div className='container'>
      <div className='cover'>
        <br/><h3 className='text'>Delete Child's Profile</h3><br/>
        {message && <p className='message'>{message}</p>}
        <form className='box' onSubmit={handleDelete}>
          
          <label className='ftext' htmlFor='parentNic'>Parent NIC:</label>
          <input
            className='fbox'
            id='parentNic'
            type='text'
            placeholder='Enter NIC'
            value={parentNic}
            onChange={(e) => setParentNic(e.target.value)}
          />
          {errors.parentNic && <span className='error'>{errors.parentNic}</span>}
          <br />

          <label className='ftext' htmlFor='fullName'>Full Name:</label>
          <input
            className='fbox'
            id='fullName'
            type='text'
            placeholder='Enter Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && <span className='error'>{errors.fullName}</span>}
          <br />

          <div className='Button'>
            <button type='submit' className='buton'>Delete Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
}
