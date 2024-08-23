import React, { useState } from 'react';
import axios from 'axios';
import '../createChildForm/cCcreate.css';

export default function ChildGetDetailsForm() {
  const [fullName, setFullName] = useState('');
  const [birthdayWeight, setBirthdayWeight] = useState('');
  const [birthdayHeight, setBirthdayHeight] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medicalRecords, setMedicalRecords] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [bornDiseases, setBornDiseases] = useState('');
  const [vaccinesGiven, setVaccinesGiven] = useState('');
  const [vaccinesToBeGiven, setVaccinesToBeGiven] = useState('');
  const [parentNic, setParentNic] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleFetch = async (e) => {
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
      const response = await axios.get(`your-api-endpoint/${parentNic}/${fullName}`);
      const data = response.data;
      
      setFullName(data.fullName || '');
      setBirthdayWeight(data.birthdayWeight || '');
      setBirthdayHeight(data.birthdayHeight || '');
      setAllergies(data.allergies || '');
      setMedicalRecords(data.medicalRecords || '');
      setGender(data.gender || '');
      setBirthDate(data.birthDate || '');
      setBirthPlace(data.birthPlace || '');
      setBornDiseases(data.bornDiseases || '');
      setVaccinesGiven(data.vaccinesGiven || '');
      setVaccinesToBeGiven(data.vaccinesToBeGiven || '');
      setMessage('Child profile fetched successfully!');
      setErrors({});
    } catch (error) {
      console.error(error);
      setMessage('Failed to fetch child profile.');
    }
  };

  return (
    <div className='container'>
      <div className='cover'>
        <br/><h3 className='text'>Get Child's Profile Information</h3><br/><br/>
        {message && <p className='message'>{message}</p>}
        <form className='box' onSubmit={handleFetch}>
          
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
            <button type='submit' className='buton'>Get Details</button>
          </div>
        </form>
        
        {fullName && (
          <div className='details'>
            <h4>Child Details:</h4>
            <p><strong>Full Name:</strong> {fullName}</p>
            <p><strong>Birthday Weight:</strong> {birthdayWeight}</p>
            <p><strong>Birthday Height:</strong> {birthdayHeight}</p>
            <p><strong>Allergies:</strong> {allergies}</p>
            <p><strong>Medical Records:</strong> {medicalRecords}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Birth Date:</strong> {birthDate}</p>
            <p><strong>Birth Place:</strong> {birthPlace}</p>
            <p><strong>Born Diseases:</strong> {bornDiseases}</p>
            <p><strong>Vaccines Given:</strong> {vaccinesGiven}</p>
            <p><strong>Vaccines To Be Given:</strong> {vaccinesToBeGiven}</p>
          </div>
        )}
      </div>
    </div>
  );
}
