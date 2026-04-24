import React, { useEffect, useState } from 'react';
import ServicesHome from '../Home/Services';
import './Services.css';
import { Link } from 'react-router-dom';

function Services() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <>
      {/* Hero Banner Section */}
      <section className="services-page-hero">
        <div className="hero-bg-pattern"></div>
        <div className="hero-gradient-overlay"></div>
        
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className={`hero-content ${animated ? 'animated' : ''}`}>
                <div className="hero-badge-wrapper">
                  <span className="hero-badge">Financing Solutions</span>
                  {/* <div className="badge-shine"></div> */}
                </div>
                
                <h1 className="hero-title">
                  Loans and Financing Solutions for{' '}
                  <span className="hero-highlight">Every Business Need</span>
                </h1>
                
                <p className="hero-description">
                  Explore our range of business loan services designed to support startups, 
                  growing companies, and established enterprises with flexible financing, 
                  expert guidance, and quick access to capital.
                </p>

                <div className="hero-stats">
                  <div className="stat-card">
                    <div className="stat-icon">🏦</div>
                    <div>
                      <span className="stat-number">500+</span>
                      <span className="stat-label">Businesses Funded</span>
                    </div>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-card">
                    <div className="stat-icon">💰</div>
                    <div>
                      <span className="stat-number">$50M+</span>
                      <span className="stat-label">Capital Provided</span>
                    </div>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-card">
                    <div className="stat-icon">⭐</div>
                    <div>
                      <span className="stat-number">98%</span>
                      <span className="stat-label">Client Satisfaction</span>
                    </div>
                  </div>
                </div>

                <div className="hero-cta">
                  <Link to="/applynow" className="hero-btn-primary">
                    Apply for Funding
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                  <Link to="/contact" className="hero-btn-secondary">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="hero-wave-divider">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 64L60 69.3C120 75 240 85 360 80C480 75 600 53 720 48C840 43 960 53 1080 58.7C1200 64 1320 64 1380 64L1440 64L1440 120L1380 120C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120L0 120Z" fill="#f8f9fb"/>
          </svg>
        </div>
      </section>

      {/* Services Component Section */}
      <section className="services-import-section">
        <div className="container">
          <div className={`section-header ${animated ? 'fade-in-up' : ''}`}>
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Comprehensive <span className="title-highlight">Financial Services</span></h2>
            <p className="section-subtitle">
              Tailored solutions designed to help your business grow and succeed
            </p>
          </div>
        </div>
        
        {/* Imported Services Component */}
        <ServicesHome />
      </section>

      {/* Trust Badges Section */}
      <section className="trust-badges">
        <div className="container">
          <div className="trust-wrapper">
            <div className="trust-item">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              <span>5-Star Rated</span>
            </div>
            <div className="trust-item">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
              </svg>
              <span>24/7 Support</span>
            </div>
            <div className="trust-item">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>Fast Approval</span>
            </div>
            <div className="trust-item">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>Secure & Safe</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;