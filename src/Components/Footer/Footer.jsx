import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Content */}
        <div className="row">
          {/* Company Description */}
          <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <div className="footer-brand">
              <h3 className="footer-logo">SherFunding</h3>
            </div>
            <p className="footer-description">
              SherFunding is a full-service business solutions firm with a proven track record 
              of success—even in the most challenging circumstances.
            </p>
          </div>

          {/* Contact Information */}
          <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <div className="footer-section-title">
              <h4>Contact</h4>
            </div>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-label">Call us at</span>
                <Link to="tel:+18889279004" className="contact-link">+1 (888) 927-9004</Link>
              </li>
              <li>
                <span className="contact-label">Send us an email at</span>
                <Link to="mailto:info@SherFundingcapitalsolution.com" className="contact-link">
                  info@SherFundingcapitalsolution.com
                </Link>
              </li>
              <li>
                <span className="contact-label">Visit our office at</span>
                <address className="contact-address">
                  5940 S Rainbow Blvd, Suite 4101<br />
                  Las Vegas, NV 89118<br />
                  United States
                </address>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-12 mb-5 mb-lg-0">
            <div className="footer-section-title">
              <h4>Quick Links</h4>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ul className="footer-links">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/applynow">Apply Now</Link></li>
                  {/* <li><Link to="#">Appointments</Link></li> */}
                  <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                  <li><Link to="/termscondition">Terms And Conditions</Link></li>
                  <li><Link to="checkout">Credit Score Improvement</Link></li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="footer-links">
                  <li><Link to="form">Merchant Cash Advances</Link></li>
                  <li><Link to="form">Invoice Factoring</Link></li>
                  <li><Link to="form">Business Line of Credit</Link></li>
                  <li><Link to="form">Small Business Loans</Link></li>
                  <li><Link to="form">SBA 7A Loan</Link></li>
                  <li><Link to="form">Collateral Loans</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom">
          <div className="row">
            <div className="col-12 text-center">
              <p className="copyright">
                &copy; {new Date().getFullYear()} SherFunding. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;