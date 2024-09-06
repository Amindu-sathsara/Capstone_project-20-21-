import React from 'react'
import './contactUs.css'

export default function ContactUs() {
 

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We're here to help and answer any question you might have</p>
      </header>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We are here to assist you with any questions, feedback, or technical support. Whether you're a parent, healthcare provider, or administrator, feel free to reach out to us using the methods below.</p>
          <div className="contact-details">
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+94 123 456 789</p>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <p>support@kidscare.com</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="contact-footer">
        <p>&copy; 2024 KidsCare. All rights reserved.</p>
      </footer>
    </div>
  )
}