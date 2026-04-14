import React from 'react';
import './SherFunding.css';

function SherFunding() {
  const features = [
    'Lender Matching',
    'Application Support',
    'Competitive Analysis',
    'Funding Guidance'
  ];

  return (
    <section className="SherFunding-section">
      <div className="SherFunding-container">
        {/* Left Side - Images */}
        <div className="SherFunding-left">
          <div className="SherFunding-images-wrapper">
            <div className="SherFunding-image-stack">
              <img 
                src="images/Rectangle-5.webp" 
                alt="Business team meeting" 
                className="SherFunding-img main-img"
              />
              <img 
                src="images/Rectangle-6.webp" 
                alt="Business consultation" 
                className="SherFunding-img secondary-img"
              />
              <img 
                src="images/Rectangle-4.webp" 
                alt="Business consultation1" 
                className="SherFunding-img secondary-img1"
              />
              <div className="experience-badge">
                <span className="badge-text">Years Of Experience</span>
                <span className="badge-number">20</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="SherFunding-right">
          <div className="SherFunding-content">
            <span className="SherFunding-tag">WE ARE BETTER BUSINESS CAPITAL SOLUTIONS</span>
            
            <h1 className="SherFunding-heading">
              Better Business Capital Solutions Provides Tailored Support For <br />
              <span className="heading-highlight">Business Loans And Financing.</span>
            </h1>
            
            <p className="SherFunding-description">
              Whether you're starting a new business or expanding an existing one, we guide you through every step of the funding process. Our expert team connects you with the right lenders, offers personalized financing strategies, and ensures a smooth path to securing the capital you need.
            </p>

            {/* Features Grid */}
            <div className="SherFunding-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-dot"></div>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => window.location.href = '/applynow'} 
              className="SherFunding-apply-btn">APPLY NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SherFunding;