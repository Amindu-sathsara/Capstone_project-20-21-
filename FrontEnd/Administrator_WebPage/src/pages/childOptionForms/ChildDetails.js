// UserDetailsPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../components/seeDetails/details.css'

export default function ChildDetails() {
  const location = useLocation();
  const { child } = location.state || {}; // Retrieve user data from state

  return (
    <div className='see-details-container'>
      <div className='see-details-card'>
        <h3 className='see-details-title'>Child Details</h3>
        {child ? (
           <div className="user-details-content">

            <div className="detail-item">
            <span className="detail-label">Full Name:</span>
            <span className="detail-value">{child.fullName}</span> 
            </div>

            <div className="detail-item">
            <span className="detail-label">Parent NIC:</span>
            <span className="detail-value">{child.parentNic}</span> 
            </div>

            <div className="detail-item">
            <span className="detail-label">Birth Date:</span>
            <span className="detail-value">{child.birthDate}</span> 
            </div>

            <div className="detail-item">
            <span className="detail-label">Birth Height:</span>
            <span className="detail-value">{child.birthHeight}</span> 
            </div>

            <div className="detail-item">
            <span className="detail-label">Birth Weight:</span>
            <span className="detail-value">{child.birthWeight}</span> 
            </div>

            <div className="detail-item">
            <span className="detail-label">Gender:</span>
            <span className="detail-value">{child.gender}</span> 
            </div>

            <div className="detail-item">
            <span className="detail-label">Medical Reocords:</span>
            <span className="detail-value">{child.medicalRecords}</span> 
            </div>

            <div className="detail-item">
            <span className="detail-label">Vaccines Given:</span>
            <span className="detail-value">{child.vaccinesGiven}</span> 
            </div>

            <div className="detail-item">
            <span className="detail-label">Vaccines To Be Given:</span>
            <span className="detail-value">{child.vaccinesToBeGiven}</span> 
            </div>
            
          </div>

        ) : (
          <p>No user details available</p>
        )}
      </div>
    </div>
  );
}
