import React from 'react'
import SeeDetails from '../../components/seeDetails/SeeDetails'
import './getDetails.css'

export default function GetDetails() {
  return (
    <div className="get-details-page">
      <div className="get-details-container">
        <h1 className="get-details-title">Account Details</h1>
        <p className="get-details-description">
          View and manage your account information below.
        </p>
        <div className="get-details-form">
          <SeeDetails />
        </div>
        <p className="get-details-info">
          If you need to update any information, please use the form above.
        </p>
      </div>
    </div>
  )
}