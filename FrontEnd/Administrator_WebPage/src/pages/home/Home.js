import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Upside from '../../components/upside/Upside'
import { Button } from 'react-bootstrap'
import { Menu, X } from 'lucide-react'
import './home.css'
import './navbar.css'
import '../../components/button/button.css'

export default function Home() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const goToForm = () => navigate('/form')
  const goToChangeP = () => navigate('/changeP')
  const goToCCreate = () => navigate('/CCreate')
  const goToChildOption = () => navigate('/cOption')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">KidsCare Administrator Website</div>
          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/contact" className="nav-link">Help Us</a>
          </div>
          <button className="navbar-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <Upside title="KidsCare Account Management" />
      
      <section className="account-management">
        <div className="buton-group">
          <Button className='buton' onClick={goToForm}>Create Account</Button>
          <Button className='buton' onClick={goToChangeP}>Change Permission</Button>
        </div>
      </section>

      <section className="child-profile">
        <h2 className="section-title">Work With Child Profile</h2>
        <div className="content-wrapper">
          <img src="/TR_Healthcare-Medical-Trends_Feature.webp" alt="Child healthcare" className="profile-image" />
          <div className="button-group">
            <Button className='buton' onClick={goToCCreate}>Create Profile</Button>
            <Button className='buton' onClick={goToChildOption}>Other Options</Button>
          </div>
        </div>
      </section>
    </div>
  )
}