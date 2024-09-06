import React from 'react'
import ChildGetDetailsForm from '../../components/childProfiles/childOption/ChildGetDetailsForm'
import '../getDetailsForm/getDetails.css'

export default function ChildGetDetails() {
  return (
    
    <div className="get-details-page">
      <div className="get-details-container">
        <h1 className="get-details-title">Account Details</h1>
        <p className="get-details-description">
          View and manage your account information below.
        </p>
        <div className="get-details-form">
          <ChildGetDetailsForm/>
          </div>
        <p className="get-details-info">
          If you need to update any information, please use the form above.
        </p>
      </div>
    </div>
  )
}
