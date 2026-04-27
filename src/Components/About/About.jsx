import React from "react";
import "./About.css";
import { FaCheckCircle, FaRocket, FaHandshake, FaChartLine, FaShieldAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
function About() {
  const features = [
    {
      icon: <FaChartLine />,
      title: "Industry Expertise",
      description: "Years of experience in financing & loan approvals"
    },
    {
      icon: <FaHandshake />,
      title: "Client-First Approach",
      description: "Dedicated support throughout the entire process"
    },
    {
      icon: <FaRocket />,
      title: "Proven Results",
      description: "Helping businesses grow with confidence"
    }
  ];

  const steps = [
    { number: "01", title: "Strategy", description: "Tailored loan plans for your business" },
    { number: "02", title: "Support", description: "Complete application assistance" },
    { number: "03", title: "Growth", description: "Ongoing financial guidance" }
  ];

  return (
    <section className="about-page">
      <div className="about-bg-pattern"></div>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="about-content">
              <div className="about-tag-wrapper">
                <span className="about-tag">ABOUT Better Business Capital Solutions</span>
                <div className="tag-line"></div>
              </div>
              
              <h2 className="about-heading">
                A Trusted Partner for <span className="heading-highlight">Business Loan Success</span>
              </h2>
              
              <p className="about-text">
                Better Business Capital Solutions helps business owners secure the right
                funding with personalized guidance, lender matching, and strategy
                planning. We specialize in small business loans, SBA financing,
                equipment loans, working capital, and tailored capital solutions
                for growth.
              </p>

              <p className="about-text">
                Our team works closely with every client to understand their goals,
                prepare strong loan applications, and navigate lender requirements
                so they can move forward with confidence.
              </p>

              {/* Features Grid */}
              <div className="about-features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="about-feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-info">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="about-btn-wrapper">
                <Link to="/applynow" className="about-btn">
                  <span>Apply for Funding</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6">
            <div className="about-visual">
              {/* Main Image */}
              <div className="about-img-wrapper">
                <img
                  src="/logo/logo.JPG"
                  alt="About Better Business Capital Solutions"
                  className="about-main-img d-lg-none"
                />
                <div className="img-shine"></div>
              </div>

              {/* Floating Card */}
              <div className="about-floating-card">
                <div className="card-header">
                  <div className="card-icon">
                    <FaShieldAlt />
                  </div>
                  <h5>Our Mission</h5>
                </div>
                <p className="card-text">
                  We simplify business financing and connect you with the right
                  lenders for faster approvals and better growth opportunities.
                </p>

                <div className="about-steps">
                  {steps.map((step, index) => (
                    <div key={index} className="step-item">
                      <div className="step-number">{step.number}</div>
                      <div className="step-content">
                        <h6>{step.title}</h6>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-footer">
                  <FaClock />
                  <span>Get funded in as little as 24 hours</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="deco-dot dot-1"></div>
              <div className="deco-dot dot-2"></div>
              <div className="deco-dot dot-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;