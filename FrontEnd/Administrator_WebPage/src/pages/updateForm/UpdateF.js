import React from 'react'
import Uform from '../../components/update/Uform'
import '../getDetailsForm/getDetails.css'

export default function UpdateF() {
  return (
    <div className="get-details-page">
      <div className="get-details-container">
        <h1 className="get-details-title">Account Update</h1>
        <p className="get-details-description">
          Edite your account information below.
        </p>
        <div className="get-details-form">
          <Uform/>
        </div>  
        <p className="get-details-info">
          If you need to update or change any information,  use this form.
        </p>
      </div>
    </div>
  )
}
