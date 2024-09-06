import React from 'react'
import './about.css'

export default function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About KidsCare</h1>
        <p>Revolutionizing Children's Healthcare Management</p>
      </header>

      <section className="about-content">
        <div className="about-intro">
          <h2>Welcome to KidsCare</h2>
          <p>
            KidsCare is a comprehensive platform designed to revolutionize how children's healthcare records are managed and maintained. Our mission is to provide an efficient and secure solution for healthcare providers and parents, ensuring timely vaccinations and accurate medical records for children.
          </p>
        </div>

        <div className="about-vision-mission">
          <div className="vision">
            <h3>Our Vision</h3>
            <p>
              To lead the way in child healthcare management through innovation and digitalization, ensuring every child receives the care they need at the right time.
            </p>
          </div>
          <div className="mission">
            <h3>Our Mission</h3>
            <ul>
              <li>Streamline healthcare processes by offering a centralized platform for managing medical records.</li>
              <li>Enhance accessibility for healthcare professionals and parents, allowing easy access to vital information.</li>
              <li>Reduce errors in traditional paper-based systems, improving accuracy in healthcare management.</li>
              <li>Promote timely vaccinations and health checkups to safeguard children's health.</li>
            </ul>
          </div>
        </div>

        <div className="about-features">
          <h3>Key Features</h3>
          <div className="feature-grid">
            <div className="feature-item">
              <h4>Centralized Management</h4>
              <p>Manage child profiles, track vaccination schedules, and maintain detailed health records all in one place.</p>
            </div>
            <div className="feature-item">
              <h4>Enhanced Accessibility</h4>
              <p>Easy access to vital information for healthcare professionals and parents.</p>
            </div>
            <div className="feature-item">
              <h4>Error Reduction</h4>
              <p>Minimize errors associated with traditional paper-based systems.</p>
            </div>
            <div className="feature-item">
              <h4>Timely Care</h4>
              <p>Ensure children receive vaccinations and health checkups on schedule.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>&copy; 2024 KidsCare. All rights reserved.</p>
      </footer>
    </div>
  )
}