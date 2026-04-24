import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Link } from 'react-router-dom';
import { servicesDetailData } from '../ServiceDetail/servicesData';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Content */}
        <div className="row">
          {/* Company Description */}
          <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <div className="footer-brand">
              <h3 className="footer-logo">Better Business Capital Solutions</h3>
            </div>
            <p className="footer-description">
              Better Business Capital Solutions is a full-service business solutions firm with a proven track record
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
                <Link to="tel:646-306-9371" className="contact-link">646-306-9371</Link>
              </li>
              <li>
                <span className="contact-label">Send us an email at</span>
                <Link to="mailto:info@bbcapitalsolutions.com" className="contact-link">
                  info@bbcapitalsolutions.com
                </Link>
              </li>
              <li>
                <span className="contact-label">Visit our office at</span>
                <address className="contact-address">
                  869 Walnut StMacon,<br />
                  GA 31201, USA
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
                  {servicesDetailData.map(service => (
                    <li key={service.slug}>
                      <Link to={`/services/${service.slug}`}>{service.title}</Link>
                    </li>
                  ))}
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
                &copy; {new Date().getFullYear()} Better Business Capital Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;