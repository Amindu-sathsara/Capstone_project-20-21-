// UserDetailsPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../components/seeDetails/details.css'
import '../../components/create/signup.css'

export default function ChildDetails() {
  const location = useLocation();
  const { child } = location.state || {}; // Retrieve user data from state

  return (
    <div className='containe'>
      <div className='cove'>
        <h3 id='tilt'>Child Details</h3>
        {child ? (
          <div className='user-details'>
            <p id='details'>Full Name: {child.fullName}</p>
            <p id='details'>Parent NIC: {child.parentNic}</p>
            <p id='details'>Birth Date: {child.birthDate}</p>
            <p id='details'>Birth Height: {child.birthHeight}</p>
            <p id='details'>Birth Weight: {child.birthWeight}</p>
            <p id='details'>Gender: {child.gender}</p>
            <p id='details'>Medical Reocords: {child.medicalRecords}</p>
            <p id='details'>Vaccines Given: {child.vaccinesGiven}</p>
            <p id='details'>Vaccines To Be Given: {child.vaccinesToBeGiven}</p>
          </div>
        ) : (
          <p>No user details available</p>
        )}
      </div>
    </div>
  );
}
