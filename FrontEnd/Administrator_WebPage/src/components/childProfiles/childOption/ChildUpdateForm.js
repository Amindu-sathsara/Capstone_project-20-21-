import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../createChildForm/cCcreate.css';

export default function CCreateForm({ existingData }) { // Accept existing data as a prop
  const [fullName, setFullName] = useState(existingData?.fullName || '');
  const [birthdayWeight, setBirthdayWeight] = useState(existingData?.birthdayWeight || '');
  const [birthdayHeight, setBirthdayHeight] = useState(existingData?.birthdayHeight || '');
  const [allergies, setAllergies] = useState(existingData?.allergies || '');
  const [medicalRecords, setMedicalRecords] = useState(existingData?.medicalRecords || '');
  const [vaccinationDetails, setVaccinationDetails] = useState(existingData?.vaccinationDetails || '');
  const [parentNic, setParentNic] = useState(existingData?.parentNic || '');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (existingData) {
      setFullName(existingData.fullName);
      setBirthdayWeight(existingData.birthdayWeight);
      setBirthdayHeight(existingData.birthdayHeight);
      setAllergies(existingData.allergies);
      setMedicalRecords(existingData.medicalRecords);
      setVaccinationDetails(existingData.vaccinationDetails);
      setParentNic(existingData.parentNic);
    }
  }, [existingData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};

    if (!fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    if (!birthdayWeight.trim()) {
      errors.birthdayWeight = 'Birthday weight is required';
    } else if (isNaN(birthdayWeight)) {
      errors.birthdayWeight = 'Birthday weight must be a number';
    }
    if (!birthdayHeight.trim()) {
      errors.birthdayHeight = 'Birthday height is required';
    } else if (isNaN(birthdayHeight)) {
      errors.birthdayHeight = 'Birthday height must be a number';
    }
    if (!parentNic.trim()) {
      errors.parentNic = 'Parent NIC is required';
    } else if (!/^\d{9}[vVxX]$/.test(parentNic)) { // Example NIC format validation
      errors.parentNic = 'Invalid NIC format';
    }

    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      
      const data = {
        fullName,
        birthdayWeight,
        birthdayHeight,
        allergies,
        medicalRecords,
        vaccinationDetails,
        parentNic
      };

      try {
        const response = await axios.put(`your-api-url/${existingData.id}`, data); // Send PUT request with existingData ID
        console.log(response.data);
        
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className='container'>
      <div className='cover'>
      <br/><h3 className='text'>Update Child Profile Information</h3><br/>
        <form className='box' onSubmit={handleSubmit}>
          
          <label className='ftext' htmlFor='name'>Full Name :</label>
          <input
            className='fbox'
            id='name'
            type='text'
            placeholder='Enter Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && <span className='error'>{errors.fullName}</span>}
          <br />
          
          <label className='ftext' htmlFor='weight'>Birthday Weight:</label>
          <input
            className='fbox'
            id='weight'
            type='text'
            placeholder='Enter Weight'
            value={birthdayWeight}
            onChange={(e) => setBirthdayWeight(e.target.value)}
          />
          {errors.birthdayWeight && <span className='error'>{errors.birthdayWeight}</span>}
          <br />
          
          <label className='ftext' htmlFor='height'>Birthday Height:</label>
          <input
            className='fbox'
            id='height'
            type='text'
            placeholder='Enter Height'
            value={birthdayHeight}
            onChange={(e) => setBirthdayHeight(e.target.value)}
          />
          {errors.birthdayHeight && <span className='error'>{errors.birthdayHeight}</span>}
          <br />
          
          <label className='ftext' htmlFor='allergies'>Allergies :</label>
          <input
            className='fbox'
            id='allergies'
            type='text'
            placeholder='Add Allergies'
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
          />
          {errors.allergies && <span className='error'>{errors.allergies}</span>}
          <br />
          
          <label className='ftext' htmlFor='medicalRecords'>Medical Records:</label>
          <input
            className='fbox'
            id='medicalRecords'
            type='text'
            placeholder='Enter Records'
            value={medicalRecords}
            onChange={(e) => setMedicalRecords(e.target.value)}
          />
          {errors.medicalRecords && <span className='error'>{errors.medicalRecords}</span>}
          <br />
          
          <label className='ftext' htmlFor='vaccinationDetails'>Vaccination Details:</label>
          <input
            className='fbox'
            id='vaccinationDetails'
            type='text'
            placeholder='Enter Details'
            value={vaccinationDetails}
            onChange={(e) => setVaccinationDetails(e.target.value)}
          />
          {errors.vaccinationDetails && <span className='error'>{errors.vaccinationDetails}</span>}
          <br />

          <label className='ftext' htmlFor='parentNic'>Parent NIC:</label>
          <input
            className='fbox'
            id='parentNic'
            type='NIC'
            placeholder='Enter NIC'
            value={parentNic}
            onChange={(e) => setParentNic(e.target.value)}
          />
          {errors.parentNic && <span className='error'>{errors.parentNic}</span>}
          <br />
          
          <div className='Button'>
            <button type='submit' className='buton'>Update</button>
          </div>
        </form>
      </div> 
    </div>
  );
}
