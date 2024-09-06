import React from 'react'
import DeleteF from "../../components/deletion/DeleteF"
import './deletionPage.css'

export default function Deletion() {
  return (
    <div className="deletion-page">
      <div className="deletion-container">
        <h1 className="deletion-title">Account Deletion</h1>
        <p className="deletion-description">
          We're sorry to see you go. Please confirm your account deletion below.
        </p>
        <div className="deletion-form">
          <DeleteF />
        </div>
        <p className="deletion-warning">
          Warning: This action cannot be undone. All your data will be permanently deleted.
        </p>
      </div>
    </div>
  )
}