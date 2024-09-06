import React from 'react'
import ChildDeleteForm from '../../components/childProfiles/childOption/ChildDeleteForm'
import '../deletionForm/deletionPage.css'

export default function ChildDelete() {
  return (
    
    <div className="deletion-page">
      <div className="deletion-container">
        <h1 className="deletion-title">Profile Deletion</h1>
        <p className="deletion-description">
          We're sorry to see you go. Please confirm your profile deletion below.
        </p>
        <div className="deletion-form">
          <ChildDeleteForm/>
          </div>
        <p className="deletion-warning">
          Warning: This action cannot be undone. Child's data will be permanently deleted.
        </p>
      </div>
    </div>
  )
}
