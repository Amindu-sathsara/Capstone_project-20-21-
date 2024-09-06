import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../components/seeDetails/details.css';

export default function UserDetailsPage() {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div className="user-details-container">
      <div className="user-details-card">
        <h2 className="user-details-title">User Details</h2>
        {user ? (
          <div className="user-details-content">
            <div className="detail-item">
              <span className="detail-label">Full Name:</span>
              <span className="detail-value">{user.fullName}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">NIC No:</span>
              <span className="detail-value">{user.nicNo}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{user.email}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Contact No:</span>
              <span className="detail-value">{user.contactNo}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">User Type:</span>
              <span className="detail-value">{user.userType}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">User Name:</span>
              <span className="detail-value">{user.userName}</span>
            </div>
          </div>
        ) : (
          <p className="no-details">No user details available</p>
        )}
      </div>
    </div>
  );
}