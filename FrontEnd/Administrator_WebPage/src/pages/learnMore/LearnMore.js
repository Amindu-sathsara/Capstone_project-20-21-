import React from 'react'
import { ArrowRight, Shield, Clock, BarChartIcon as ChartBar, Users } from 'lucide-react'
import './learnMore.css'

export default function LearnMore() {
  return (
    <div className="learn-more-container">
      <header className="learn-more-header">
        <h1>Discover KidsCare</h1>
        <p>Revolutionizing Child Healthcare Management</p>
      </header>

      <section className="learn-more-content">
        <div className="intro">
          <p>
            KidsCare is an innovative platform designed to transform how child healthcare records are managed. Our system empowers both healthcare providers and parents to effortlessly monitor children's medical histories, vaccination schedules, and overall health progress.
          </p>
        </div>

        <div className="features">
          <h2>Key Features of KidsCare</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <Shield className="feature-icon" />
              <h3>Comprehensive Child Profiles</h3>
              <p>Create and manage detailed health profiles for each child, including medical history, vaccinations, allergies, and more.</p>
            </div>
            <div className="feature-item">
              <Clock className="feature-icon" />
              <h3>Smart Vaccination Tracking</h3>
              <p>Stay on top of immunization schedules with automated reminders and real-time tracking of vaccination status.</p>
            </div>
            <div className="feature-item">
              <ChartBar className="feature-icon" />
              <h3>Insightful Analytics</h3>
              <p>Generate comprehensive reports on health trends, vaccination rates, and other crucial metrics for informed decision-making.</p>
            </div>
            <div className="feature-item">
              <Users className="feature-icon" />
              <h3>Collaborative Care</h3>
              <p>Foster seamless communication between healthcare providers and parents for coordinated and effective child care.</p>
            </div>
          </div>
        </div>

        <div className="how-it-works">
          <h2>How KidsCare Works</h2>
          <ol>
            <li><strong>Simple Onboarding:</strong> Quick account creation for parents and healthcare providers, with easy setup of child profiles.</li>
            <li><strong>Continuous Monitoring:</strong> Real-time tracking of children's health progress, including vaccinations and regular check-ups.</li>
            <li><strong>Proactive Care:</strong> Automated reminders for upcoming vaccinations and appointments to ensure timely healthcare interventions.</li>
          </ol>
        </div>

        <div className="benefits">
          <h2>The KidsCare Advantage</h2>
          <ul>
            <li><strong>Enhanced Accuracy:</strong> Eliminate errors common in traditional record-keeping systems.</li>
            <li><strong>Seamless Accessibility:</strong> Access vital health information anytime, anywhere, ensuring continuity of care.</li>
            <li><strong>Efficiency Boost:</strong> Streamline administrative tasks, freeing up more time for quality patient care.</li>
            <li><strong>Robust Data Protection:</strong> State-of-the-art security measures to safeguard sensitive health information.</li>
          </ul>
        </div>

        <div className="who-benefits">
          <h2>Who Thrives with KidsCare?</h2>
          <div className="benefit-grid">
            <div className="benefit-item">
              <h3>Healthcare Providers</h3>
              <p>Optimize workflows, enhance patient care, and improve overall service delivery in pediatric healthcare settings.</p>
            </div>
            <div className="benefit-item">
              <h3>Parents and Guardians</h3>
              <p>Gain peace of mind with easy access to your child's complete health records and proactive care management.</p>
            </div>
            <div className="benefit-item">
              <h3>Health Administrators</h3>
              <p>Leverage data-driven insights for better resource allocation and policy-making in child healthcare.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="learn-more-footer">
        <p>&copy; 2024 KidsCare. All rights reserved.</p>
        <a href="#" className="cta-button">Get Started <ArrowRight className="icon" /></a>
      </footer>
    </div>
  )
}

