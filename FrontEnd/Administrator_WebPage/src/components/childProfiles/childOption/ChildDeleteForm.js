import React, { useState } from 'react';
import '../../seeDetails/SeeDetailsForm.css';
import axios from 'axios';


export default function ChildDeleteForm() {
  const [fullName, setFullName] = useState('');
  const [parentNic, setParentNic] = useState('');
  const [errors, setErrors] = useState({});



  // Function to handle the Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    let errors = {};
    if (!fullName) {
      errors.fullName = 'Full name is required';
    }
    if (!parentNic) {
      errors.parentNic = 'NIC number is required';
    }
    setErrors(errors);

    // Proceed with form submission if there are no errors
    if (Object.keys(errors).length === 0) {
      try {
        // Replace with your actual delete endpoint URL
        const response = await axios.delete('http://localhost:3000/child-profile/deleteChildProfile', {
          data: {
            fullName,
            parentNic,
          },
        });

        console.log('Profile deleted successfully:', response.data);
        alert('Profile Deleted Succussfully');

        // Clear the form fields after successful deletion
        setFullName('');
        setParentNic('');
      } catch (error) {
        console.error('Error deleting account', error);
      }
    }
  };

  return (
    <div className='see-details-container'>
      <div className='see-details-card'>
        <br />
        <h3 className='see-details-title'>Delete User's Accounts</h3>
        <br />
        <form className='see-details-form' onSubmit={handleSubmit}>

          <div className='form-group'>
          <label className='ftext' htmlFor='name'>Full Name :</label>
          <input
            
            id='n'
            type='text'
            placeholder='Enter Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && <span className='error'>{errors.fullName}</span>}
          </div>

          <div className='form-group'>
          <label className='ftext' htmlFor='nic'>Parent NIC:</label>
          <input
            
            id='NIC'
            type='text'
            placeholder='Enter NIC'
            value={parentNic}
            onChange={(e) => setParentNic(e.target.value)}
          />
          {errors.nicNo && <span className='error'>{errors.parentNic}</span>}
          </div>
          <br/>
          
            <button type='submit' className='submit-button'>
              Delete
            </button>
          
          
        </form>
      </div>
    </div>
  );
}
