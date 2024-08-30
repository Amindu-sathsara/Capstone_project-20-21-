import React, { useState } from 'react';
import axios from 'axios';
import './cCcreate.css';
import '../../create/signup.css'


export default function Signup() {
  const [fullName, setFullName] = useState('');
  const [birthWeight, setBirthWeight] = useState('');
  const [birthHeight, setBirthHeight] = useState('');
  const [alergies, setAlergies] = useState('');
  const [medicalRecords, setMedicalRecords] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [bornDiseases, setBornDiseases] = useState('');
  const [vaccinesGiven, setVaccinesGiven] = useState('');
  const [vaccinesToBeGiven, setVaccinesToBeGiven] = useState('');
  const [parentNic, setParentNic] = useState('');
  const [errors, setErrors] = useState({});

  // Function to handle the Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    let errors = {};
    if (!fullName) errors.fullName = 'Full name is required';
    if (!birthWeight) errors.birthWeight = 'Birth weight is required';
    if (!birthHeight) errors.birthHeight = 'Birth height is required';
    if (!gender) errors.gender = 'Gender is required';
    if (!birthDate) errors.birthDate = 'Birth date is required';
    if (!birthPlace) errors.birthPlace = 'Birth place is required';
    if (!parentNic) errors.parentNic = 'Parent NIC is required';
    
    setErrors(errors);

    console.log("Form Data:", {
      fullName,
      gender,
      birthDate,
      birthPlace,
      birthWeight,
      birthHeight,
      alergies,
      bornDiseases,
      medicalRecords,
      vaccinesGiven,
      vaccinesToBeGiven,
      parentNic,
    });

    // Proceed with form submission
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3000/child-profile', {
          fullName,
          gender,
          birthDate,
          birthPlace,
          birthWeight,
          birthHeight,
          alergies,
          bornDiseases,
          medicalRecords, 
          vaccinesGiven, 
          vaccinesToBeGiven,
          parentNic,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Profile created successfully:', response.data);
        alert('Created Profile Successfully');
        // Clear form fields after successful submission
        setFullName('');
        setGender('');
        setBirthDate('');
        setBirthPlace('');
        setBirthWeight('');
        setBirthHeight('');
        setAlergies('');
        setBornDiseases('');
        setMedicalRecords('');
        setVaccinesGiven('');
        setVaccinesToBeGiven('');
        setParentNic('');

      } catch (error) {
        console.error('Error submitting form', error);
      }
    }
  };

  return (
    <div className='container'>
      <div className='cover'>
        <form className='box' onSubmit={handleSubmit}>
          <label className='ftext' htmlFor='name'>Full Name :</label><br/>
          <input className='fbox' id='textbox' type='text' placeholder='Enter Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
          {errors.fullName && <span className='error'>{errors.fullName}</span>}
          <br />

          <label className='ftext' htmlFor='weight'>Birth Weight :</label><br/>
          <input className='fbox' id='textbox' type='text' placeholder='Enter Birth Weight' value={birthWeight} onChange={(e) => setBirthWeight(e.target.value)} />
          {errors.birthWeight && <span className='error'>{errors.birthWeight}</span>}
          <br />

          <label className='ftext' htmlFor='height'>Birth Height :</label><br/>
          <input className='fbox' id='textbox' type='text' placeholder='Enter Birth Height' value={birthHeight} onChange={(e) => setBirthHeight(e.target.value)} />
          {errors.birthHeight && <span className='error'>{errors.birthHeight}</span>}
          <br />

          <label className='ftext' htmlFor='alergies'>Alergies :</label><br/>
          <input className='fbox' id='textbox' type='text' placeholder='Enter Alergies' value={alergies} onChange={(e) => setAlergies(e.target.value)} />
          <br />

          <label className='ftext' htmlFor='medicalRecords'>Medical Records :</label><br/>
          <textarea className='fbox' id='textbox' placeholder='Enter Medical Records' value={medicalRecords} onChange={(e) => setMedicalRecords(e.target.value)} />
          <br />

          <label className='ftext' htmlFor='gender'>Gender :</label><br/>
          <input className='fbox' id='textbox' type='text' placeholder='Enter Gender' value={gender} onChange={(e) => setGender(e.target.value)} />
          {errors.gender && <span className='error'>{errors.gender}</span>}
          <br />

          <label className='ftext' htmlFor='birthDate'>Birth Date :</label><br/>
          <input className='fbox' id='textbox' type='date' value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
          {errors.birthDate && <span className='error'>{errors.birthDate}</span>}
          <br />

          <label className='ftext' htmlFor='birthPlace'>Birth Place :</label><br/>
          <input className='fbox' id='textbox' type='text' placeholder='Enter Birth Place' value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} />
          {errors.birthPlace && <span className='error'>{errors.birthPlace}</span>}
          <br />

          <label className='ftext' htmlFor='bornDiseases'>Born Diseases :</label><br/>
          <input className='fbox' id='textbox' type='text' placeholder='Enter Born Diseases' value={bornDiseases} onChange={(e) => setBornDiseases(e.target.value)} />
          <br />

          <label className='ftext' htmlFor='vaccinesGiven'>Vaccines Given :</label><br/>
          <input className='fbox' id='textbox' type='text' placeholder='Enter Vaccines Given' value={vaccinesGiven} onChange={(e) => setVaccinesGiven(e.target.value)} />
          <br />

          <label className='ftext' htmlFor='vaccinesToBeGiven'>Vaccines To Be Given :</label><br/>
          <input className='fbox' id='textbox' type='text' placeholder='Enter Vaccines To Be Given' value={vaccinesToBeGiven} onChange={(e) => setVaccinesToBeGiven(e.target.value)} />
          <br />

          <label className='ftext' htmlFor='parentNic'>Parent NIC :</label><br/>
          <input className='fbox' id='textbox' type='number' placeholder='Enter Parent NIC' value={parentNic} onChange={(e) => setParentNic(e.target.value)} />
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
