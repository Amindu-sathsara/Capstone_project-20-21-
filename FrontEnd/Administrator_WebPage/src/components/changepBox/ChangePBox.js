import React from 'react'
import './changepBox.css'

export default function ChangePBox({ title, para1, para2 }) {
  return (
    <div className="option-box">
      <div className="option-box-content">
        <h2 className="option-box-title">{title}</h2>
        <div className="option-box-description">
          <p>{para1}</p>
          <p>{para2}</p>
        </div>
      </div>
    </div>
  )
}