// UserDetailsPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../components/seeDetails/details.css'
import '../../components/create/signup.css'

export default function UserDetailsPage() {
  const location = useLocation();
  const { user } = location.state || {}; // Retrieve user data from state

  return (
    <div className='containe'>
      <div className='cove'>
        <h3 id='tilt'>User Details</h3>
        {user ? (
          <div className='user-details'>
            <p id='details'>Full Name: {user.fullName}</p>
            <p id='details'>NIC No: {user.nicNo}</p>
            <p id='details'>Email: {user.email}</p>
            <p id='details'>Contact No: {user.contactNo}</p>
            <p id='details'>User Type: {user.userType}</p>
            <p id='details'>User Name: {user.userName}</p>
          </div>
        ) : (
          <p>No user details available</p>
        )}
      </div>
    </div>
  );
}
