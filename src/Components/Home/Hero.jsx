import React from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section d-flex align-items-center">
      <div className="overlay"></div>

      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-7 text-white">

            {/* Tag */}
            <div className="hero-tag mb-3">
              • Business Funding Solutions •
            </div>

            {/* Heading */}
            <h1 className="hero-heading mb-4">
              Business Loans: Quick Funding for Small Businesses
            </h1>

            {/* Paragraph */}
            <p className="hero-text mb-4">
              At Better Business Capital Solutions, we’re committed to helping small and
              mid-sized businesses succeed by providing fast, hassle-free funding
              solutions and business loans. With approvals in as little as one
              business day, our alternative financing options range from $3,000
              to $500,000 and are available to businesses across the United
              States, Puerto Rico, and Canada.
            </p>

            {/* Button */}
            <button
              className="btn hero-btn hover-lift"
              onClick={() => navigate('/applynow')}
            >
              Apply Now For Business Loans
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;