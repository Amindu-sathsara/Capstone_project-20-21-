import React from 'react'
import './learnMore.css'

export default function LearnMore() {
  return (
    <div className="learn-more-container">
      <header className="learn-more-header">
        <h1>Learn More About KidsCare</h1>
        <p>Simplifying and improving child healthcare management</p>
      </header>

      <section className="learn-more-content">
        <div className="intro">
          <p>
            KidsCare is a cutting-edge platform designed to simplify and improve how child healthcare records are managed. With our system, both healthcare providers and parents can easily keep track of children's medical histories, vaccination schedules, and overall health progress.
          </p>
        </div>

        <div className="features">
          <h2>Key Features of KidsCare</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <h3>Child Profile Management</h3>
              <p>Create and manage detailed profiles for every child, including medical history, vaccination records, allergies, and other health-related information.</p>
            </div>
            <div className="feature-item">
              <h3>Vaccination Schedules</h3>
              <p>Track upcoming and past vaccinations to ensure that children receive timely immunizations, which are essential for their health and well-being.</p>
            </div>
            <div className="feature-item">
              <h3>Medical History Overview</h3>
              <p>Maintain a complete, error-free digital medical history for each child that healthcare providers can access instantly.</p>
            </div>
            <div className="feature-item">
              <h3>Reports and Analytics</h3>
              <p>Generate insightful reports on vaccination rates, healthcare trends, and other important data to help administrators make informed decisions.</p>
            </div>
          </div>
        </div>

        <div className="how-it-works">
          <h2>How It Works</h2>
          <ol>
            <li><strong>Easy Registration:</strong> Parents or healthcare providers can create an account, and each child's profile can be set up with the necessary medical details.</li>
            <li><strong>Tracking Health Progress:</strong> Administrators and healthcare professionals can use the platform to track children's health progress, including vaccinations and checkups.</li>
            <li><strong>Timely Notifications:</strong> The system sends timely reminders for upcoming vaccinations, ensuring no appointment is missed.</li>
          </ol>
        </div>

        <div className="benefits">
          <h2>Benefits of KidsCare</h2>
          <ul>
            <li><strong>Improved Accuracy:</strong> Eliminates errors commonly found in paper-based systems.</li>
            <li><strong>Enhanced Accessibility:</strong> Parents and healthcare providers can access records anytime, anywhere.</li>
            <li><strong>Time-Saving:</strong> Automates processes like appointment scheduling and record updates.</li>
            <li><strong>Data Security:</strong> All records are securely stored, adhering to the latest data privacy standards.</li>
          </ul>
        </div>

        <div className="who-benefits">
          <h2>Who Can Benefit from KidsCare?</h2>
          <div className="benefit-grid">
            <div className="benefit-item">
              <h3>Healthcare Providers</h3>
              <p>Hospitals, clinics, and pediatricians can streamline their workflows and improve service delivery.</p>
            </div>
            <div className="benefit-item">
              <h3>Parents and Guardians</h3>
              <p>Parents can track their child's health and vaccinations, ensuring they receive the best care.</p>
            </div>
            <div className="benefit-item">
              <h3>Administrators</h3>
              <p>Gain insights into health data trends and manage multiple profiles easily from one dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="learn-more-footer">
        <p>&copy; 2024 KidsCare. All rights reserved.</p>
      </footer>
    </div>
  )
}