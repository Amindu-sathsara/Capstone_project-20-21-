import React, { useState } from 'react';
import axios from 'axios';
import './cCcreate.css';

export default function CCreateForm() {
  const [fullName, setFullName] = useState('');
  const [birthdayWeight, setBirthdayWeight] = useState('');
  const [birthdayHeight, setBirthdayHeight] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medicalRecords, setMedicalRecords] = useState('');
  const [parentNic, setParentNic] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [bornDiseases, setBornDiseases] = useState('');
  const [vaccinesGiven, setVaccinesGiven] = useState('');
  const [vaccinesToBeGiven, setVaccinesToBeGiven] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};

    if (!fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    if (!birthdayWeight.trim()) {
      errors.birthdayWeight = 'required';
    } else if (isNaN(birthdayWeight)) {
      errors.birthdayWeight = 'Birthday weight must be a number';
    }
    if (!birthdayHeight.trim()) {
      errors.birthdayHeight = 'required';
    } else if (isNaN(birthdayHeight)) {
      errors.birthdayHeight = 'Birthday height must be a number';
    }
    if (!parentNic.trim()) {
      errors.parentNic = 'required';
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
        parentNic,
        gender,
        birthDate,
        birthPlace,
        bornDiseases,
        vaccinesGiven,
        vaccinesToBeGiven
      };

      try {
        const response = await axios.post('your-api-url', data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className='container'>
      <div className='cover'>
        <form className='box' onSubmit={handleSubmit}>
          <label className='ftext' htmlFor='name'>Full Name :</label>
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

          <label className='ftext' htmlFor='gender'>Gender :</label>
          <select
            className='fbox'
            id='gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value=''>Select Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
          {errors.gender && <span className='error'>{errors.gender}</span>}
          <br />

          <label className='ftext' htmlFor='birthDate'>Birth Date :</label>
          <input
            className='fbox'
            id='birthDate'
            type='date'
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          {errors.birthDate && <span className='error'>{errors.birthDate}</span>}
          <br />

          <label className='ftext' htmlFor='birthPlace'>Birth Place :</label>
          <input
            className='fbox'
            id='birthPlace'
            type='text'
            placeholder='Enter Birth Place'
            value={birthPlace}
            onChange={(e) => setBirthPlace(e.target.value)}
          />
          {errors.birthPlace && <span className='error'>{errors.birthPlace}</span>}
          <br />

          <label className='ftext' htmlFor='weight'>Birthday Weight :</label>
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

          <label className='ftext' htmlFor='height'>Birthday Height :</label>
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

          <label className='ftext' htmlFor='medicalRecords'>Medical Records :</label>
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

          <label className='ftext' htmlFor='bornDiseases'>Born Diseases :</label>
          <input
            className='fbox'
            id='bornDiseases'
            type='text'
            placeholder='Enter Diseases'
            value={bornDiseases}
            onChange={(e) => setBornDiseases(e.target.value)}
          />
          {errors.bornDiseases && <span className='error'>{errors.bornDiseases}</span>}
          <br />

          <label className='ftext' htmlFor='vaccinesGiven'>Vaccines Given :</label>
          <input
            className='fbox'
            id='vaccinesGiven'
            type='text'
            placeholder='Enter Vaccines Given'
            value={vaccinesGiven}
            onChange={(e) => setVaccinesGiven(e.target.value)}
          />
          {errors.vaccinesGiven && <span className='error'>{errors.vaccinesGiven}</span>}
          <br />

          <label className='ftext' htmlFor='vaccinesToBeGiven'>Vaccines to Be Given :</label>
          <input
            className='fbox'
            id='vaccinesToBeGiven'
            type='text'
            placeholder='Enter Vaccines to Be Given'
            value={vaccinesToBeGiven}
            onChange={(e) => setVaccinesToBeGiven(e.target.value)}
          />
          {errors.vaccinesToBeGiven && <span className='error'>{errors.vaccinesToBeGiven}</span>}
          <br />

          <label className='ftext' htmlFor='parentNic'>Parent NIC :</label>
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
            <button type='submit' className='buton'>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
