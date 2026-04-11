import React from "react";
// import "./PrivacyPolicy.css"; 

const TermsCondition = () => {
  return (
    <section className="privacy-section py-5">
      <div className="container">

        {/* TITLE */}
        <h1 className="privacy-title text-center mb-3">
          Terms & Conditions
        </h1>

        <p className="text-muted text-center mb-5">
          Effective Date: {new Date().getFullYear()}
        </p>

        <div className="privacy-content">

          <h4>Introduction</h4>
          <p>
            Welcome to <strong>NextGen Capital Solutions</strong>. By accessing
            or using our website and services, you agree to comply with and be
            bound by the following Terms and Conditions. Please read them
            carefully before applying for any business loan services.
          </p>

          <h4>Use of Services</h4>
          <p>
            Our platform provides access to business loan solutions and connects
            users with lenders. By using our services, you confirm that all
            information provided is accurate, complete, and up to date.
          </p>

          <h4>Eligibility</h4>
          <p>
            To use our services, you must be at least 18 years old and legally
            authorized to operate a business. You agree that any application
            submitted is for legitimate business purposes.
          </p>

          <h4>Loan Applications</h4>
          <p>
            Submission of a loan application does not guarantee approval. Loan
            approvals are subject to lender evaluation, creditworthiness, and
            financial eligibility criteria.
          </p>

          <h4>Third-Party Lenders</h4>
          <p>
            We may connect you with third-party lenders or financial
            institutions. We are not responsible for the terms, decisions, or
            agreements made between you and any lender.
          </p>

          <h4>Fees & Charges</h4>
          <p>
            NextGen Capital Solutions does not guarantee free services in all
            cases. Any applicable fees, commissions, or charges will be clearly
            disclosed before proceeding.
          </p>

          <h4>User Responsibilities</h4>
          <ul>
            <li>Provide accurate and truthful information</li>
            <li>Maintain confidentiality of your personal data</li>
            <li>Use the platform only for lawful business purposes</li>
          </ul>

          <h4>Limitation of Liability</h4>
          <p>
            We are not liable for any direct, indirect, or incidental damages
            arising from the use of our services, including loan approvals,
            rejections, or financial outcomes.
          </p>

          <h4>Intellectual Property</h4>
          <p>
            All content on this website, including text, graphics, and branding,
            is the property of NextGen Capital Solutions and may not be copied or
            reused without permission.
          </p>

          <h4>Changes to Terms</h4>
          <p>
            We reserve the right to update or modify these Terms & Conditions at
            any time. Continued use of our services constitutes acceptance of the
            updated terms.
          </p>

          <h4>Contact Us</h4>
          <p>
            If you have any questions regarding these Terms & Conditions, please
            contact us at:
          </p>
          <p>
            📧 info@nextgencapitalsolution.com
          </p>

        </div>
      </div>
    </section>
  );
};

export default TermsCondition;