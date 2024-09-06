import React from 'react'
import ChildUpdateForm from '../../components/childProfiles/childOption/ChildUpdateForm'
import '../getDetailsForm/getDetails.css'

const ChildUpdate = () => {
  return (
    <div className="get-details-page">
    <div className="get-details-container">
      <h1 className="get-details-title">Profile Update</h1>
      <p className="get-details-description">
        Edite Child profile information below.
      </p>
      <div className="get-details-form">
       <ChildUpdateForm/>
       </div>  
        <p className="get-details-info">
          If you need to update or change any information,  use this form.
        </p>
      </div>
    </div>
  )
}

export default ChildUpdate
