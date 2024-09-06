import React from 'react'
import './upside.css'
import { useNavigate } from 'react-router-dom'

export default function Upside({ Upside, title }) {

  const navigate = useNavigate();

  const goToLearnMore = () => navigate('/learnMore')

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{Upside}</p>
        <button onClick={goToLearnMore} className="cta-button">Learn More</button>
      </div>
      <div className="hero-image-container">
        <img src="/health care.jpeg" alt="Kids Healthcare" className="hero-image" />
      </div>
    </div>
  )
}