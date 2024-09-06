import React, { useState } from 'react';
import axios from 'axios';
import '../../seeDetails/SeeDetailsForm.css';
import { useNavigate } from 'react-router-dom';

export default function ChildGetDetailsForm() {
  const [fullName, setFullName] = useState('');
  const [parentNic, setParentNic] = useState('');
  const [childDetails, setChildDetails] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    let errors = {};
    if (!fullName) errors.fullName = 'Full name is required';
    if (!parentNic) errors.parentNic = 'parent Nic is required';

    setErrors(errors);
    console.log("Form Data:", {
      fullName,
      parentNic,
    });

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.get('http://localhost:3000/child-profile/findoneChild', {
          params: {
            fullName,
            parentNic,
          },
        });

        setChildDetails(response.data);
        navigate('/child-details', {state: {child:response.data } });

      } catch (error) {
        console.error('Error fetching user details', error);
        setChildDetails(null);
      }
    }
  };

  return (
    <div className='see-details-container'>
      <div className='see-details-card'>
      <br/><h3 className='see-details-title'>See Details Of Child</h3>

        <form className='see-details-form' onSubmit={handleSubmit}>
          
          <div className='form-group'>
          <label  htmlFor='name'>Full Name :</label>
          <input  id='fullName' type='text' placeholder='Enter Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
          {errors.fullName && <span className='error'>{errors.fullName}</span>}
          </div>
          
          <div className='form-group'>
          <label  htmlFor='nicNo'>Parent NIC:</label>
          <input  id='nic' type='text' placeholder='Enter NIC' value={parentNic} onChange={(e) => setParentNic(e.target.value)} />
          {errors.parentNic && <span className='error'>{errors.parentNic}</span>}
          </div>
         
          <button type='submit' className='submit-button' onClick={handleSubmit}>See Details</button>
  
      
        </form> 
        <br/>
        {childDetails && (
          <div className='user-details'>
            <h3>User Details</h3>
            <p>Full Name: {childDetails.fullName}</p>
            <p>Birth Weight: {childDetails.birthWeight}</p>
            <p>Birth Height: {childDetails.birthHeight}</p>
            <p>Allergies: {childDetails.alergies}</p>
            <p>Medical Records: {childDetails.medicalRecords}</p>
            <p>Gender: {childDetails.gender}</p>
            <p>Birth Date: {childDetails.birthDate}</p>
            <p>Birth Place: {childDetails.birthPlace}</p>
            <p>Born Diseases: {childDetails.bornDiseases}</p>
            <p>Vaccines Given: {childDetails.vaccinesGiven}</p>
            <p>Vaccines To Be Given: {childDetails.vaccinesToBeGiven}</p>
          </div>
        )}
      </div>
    </div>
  );
}
