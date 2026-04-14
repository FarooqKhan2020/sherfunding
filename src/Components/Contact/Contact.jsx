import React, { useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="contact-page">
      <div className="contact-bg-pattern"></div>
      <div className="container">
        <div className="contact-header text-center">
          <span className="contact-badge">Get In Touch</span>
          <h1 className="contact-title">Let's Talk Business</h1>
          <p className="contact-subtitle">
            Ready to secure the funding your business needs? Our team is here to help you every step of the way.
          </p>
        </div>

        <div className="row g-4">
          {/* Left Side - Contact Information */}
          <div className="col-lg-5">
            <div className="contact-info-card">
              <div className="contact-info-header">
                <h3>Contact Information</h3>
                <p>Reach out to us through any channel below</p>
              </div>
              
              <div className="contact-info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h6>Visit Us</h6>
                    <p>5940 S Rainbow Blvd, Suite 4101<br />Las Vegas, NV 89118<br />United States</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h6>Email Us</h6>
                    <Link to="mailto:info@bbcapitalsolutions.com">info@bbcapitalsolutions.com</Link>
                    <p className="response-time">Response within 24 hours</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h6>Call Us</h6>
                    <Link to="tel:+18889279004">+1 (888) 927-9004</Link>
                    <p className="response-time">Mon-Fri, 9am - 6pm PST</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <p>Follow us on social media</p>
                <div className="social-icons">
                  <Link to="#" className="social-icon" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </Link>
                  <Link to="#" className="social-icon" aria-label="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </Link>
                  <Link to="#" className="social-icon" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form-card">
              <div className="form-header">
                <h3>Send Us a Message</h3>
                <p>Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              {submitSuccess && (
                <div className="success-alert">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        className="form-control"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="+1 (702) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea
                        name="message"
                        className="form-control"
                        rows="5"
                        placeholder="Tell us about your financing needs..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="spinner"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </div>
              </form>

              <div className="form-footer">
                <p>* We respect your privacy. Your information is safe with us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;