import React, { useState } from 'react';
import '../../create/signup.css';
import '../../seeDetails/SeeDetailsForm.css';
import axios from 'axios';


export default function ChildUpdateForm({ child }) {  // Accept `user` as a prop

  const [fullName, setFullName] = useState(child?.fullName || '');
  const [birthWeight, setBirthWeight] = useState(child?.birthWeight || '');
  const [birthHeight, setBirthHeight] = useState(child?.birthHeight || '');
  const [alergies, setAlergies] = useState(child?.alergies || '');
  const [medicalRecords, setMedicalRecords] = useState(child?.medicalRecords || '');
  const [parentNic, setParentNic] = useState(child?.parentNic || '');
  const [gender, setGender] = useState(child?.gender || '');
  const [birthDate, setBirthDate] = useState(child?.birthDate || '');
  const [birthPlace, setBirthPlace] = useState(child?.birthPlace || '');
  const [bornDiseases, setBornDiseases] = useState(child?.bornDiseases || '');
  const [vaccinesGiven, setVaccinesGiven] = useState(child?.vaccinesGiven || '');
  const [vaccinesToBeGiven, setVaccinesToBeGiven] = useState(child?.vaccinesToBeGiven || '');
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
        const response = await axios.patch('http://localhost:3000/child-profile/updateChildProfile', {  
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
        console.log('Profile updated successfully:', response.data);
        alert('Profile Updated Successfully');
        // Clear form fields or handle success accordingly
        // setFullName('');
        // setNicNo('');
        // setEmail('');
        // setContactNo('');
        // setUserType('');
        // setUserName('');
        // setPassword('');
      } catch (error) {
        console.error('Error updating form', error);
      }
    }
  };

  return (
    <div className='see-details-container'>
      <div className='see-details-card'>
      <br/><h3 className='see-details-title'>Update Child's Profile</h3><br/>
        <form className='see-details-form' onSubmit={handleSubmit}>

        <div className="form-group">
          <label className='ftext' htmlFor='name'>Full Name :</label><br/>
          <input
            className='fbox'
            id='textbox'
            type='text'
            placeholder='Enter Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && <span className='error'>{errors.fullName}</span>}
          </div>

          <div className="form-group">
          <label className='ftext' htmlFor='gender'>Gender :</label><br/>
          <select
            className='fbox'
            id='textbox'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value=''>Select Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
          {errors.gender && <span className='error'>{errors.gender}</span>}
          </div>

          <div className="form-group">
          <label className='ftext' htmlFor='birthDate'>Birth Date :</label><br/>
          <input
            className='fbox'
            id='textbox'
            type='date'
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          {errors.birthDate && <span className='error'>{errors.birthDate}</span>}
          </div>

          <div className="form-group">
          <label className='ftext' htmlFor='birthPlace'>Birth Place :</label><br/>
          <input
            className='fbox'
            id='textbox'
            type='text'
            placeholder='Enter Birth Place'
            value={birthPlace}
            onChange={(e) => setBirthPlace(e.target.value)}
          />
          {errors.birthPlace && <span className='error'>{errors.birthPlace}</span>}
          </div>

          <div className="form-group">
          <label className='ftext' htmlFor='weight'>Birth Weight :</label><br/>
          <input
            className='fbox'
            id='textbox'
            type='text'
            placeholder='Enter Weight'
            value={birthWeight}
            onChange={(e) => setBirthWeight(e.target.value)}
          />
          {errors.birthdayWeight && <span className='error'>{errors.birthdayWeight}</span>}
          </div>
 
          <div className="form-group">
          <label className='ftext' htmlFor='height'>Birth Height :</label><br/>
          <input
            className='fbox'
            id='textbox'
            type='text'
            placeholder='Enter Height'
            value={birthHeight}
            onChange={(e) => setBirthHeight(e.target.value)}
          />
          {errors.birthdayHeight && <span className='error'>{errors.birthdayHeight}</span>}
          </div>

          <div className="form-group">
          <label className='ftext' htmlFor='allergies'>Allergies :</label><br/>
          <input
            className='fbox'
            id='textbox'
            type='text'
            placeholder='Add Allergies'
            value={alergies}
            onChange={(e) => setAlergies(e.target.value)}
          />
          {errors.allergies && <span className='error'>{errors.allergies}</span>}
          </div>

          <div className="form-group">
          <label className='ftext' htmlFor='medicalRecords'>Medical Records :</label><br/>
          <input
            className='fbox'
            id='textbox'
            type='text'
            placeholder='Enter Records'
            value={medicalRecords}
            onChange={(e) => setMedicalRecords(e.target.value)}
          />
          {errors.medicalRecords && <span className='error'>{errors.medicalRecords}</span>}
          </div>

          <div className="form-group">
          <label className='ftext' htmlFor='bornDiseases'>Born Diseases :</label><br/>
          <input
            className='fbox'
            id='textbox'
            type='text'
            placeholder='Enter Diseases'
            value={bornDiseases}
            onChange={(e) => setBornDiseases(e.target.value)}
          />
          {errors.bornDiseases && <span className='error'>{errors.bornDiseases}</span>}
          </div>

          <div className="form-group">
          <label className='ftext' htmlFor='vaccinesGiven'>Vaccines Given :</label><br/>
          <input
            className='fbox'
            id='textbox'
            type='text'
            placeholder='Enter Vaccines Given'
            value={vaccinesGiven}
            onChange={(e) => setVaccinesGiven(e.target.value)}
          />
          {errors.vaccinesGiven && <span className='error'>{errors.vaccinesGiven}</span>}
          </div>

          <div className="form-group">
          <label className='ftext' htmlFor='vaccinesToBeGiven'>Vaccines to Be Given :</label><br/>
          <input
            className='fbox'
            id='textbox'
            type='text'
            placeholder='Enter Vaccines to Be Given'
            value={vaccinesToBeGiven}
            onChange={(e) => setVaccinesToBeGiven(e.target.value)}
          />
          {errors.vaccinesToBeGiven && <span className='error'>{errors.vaccinesToBeGiven}</span>}
          </div>

          <div className="form-group">
          <label className='ftext' htmlFor='parentNic'>Parent NIC :</label><br/>
          <input
            className='fbox'
            id='textbox'
            type='text'
            placeholder='Enter NIC'
            value={parentNic}
            onChange={(e) => setParentNic(e.target.value)}
          />
          {errors.parentNic && <span className='error'>{errors.parentNic}</span>}
          </div>

            <button type='submit' className='submit-button'>Update</button>
        
        </form>
      </div>
    </div>
  );
}
