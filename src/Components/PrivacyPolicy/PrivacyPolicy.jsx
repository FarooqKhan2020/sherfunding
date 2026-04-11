import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <section className="privacy-section py-5">
      <div className="container">

        {/* TITLE */}
        <h1 className="privacy-title text-center mb-3">
          Privacy Policy
        </h1>

        <p className="text-muted text-center mb-5">
          Effective Date: {new Date().getFullYear()}
        </p>

        <div className="privacy-content">

          <h4>Introduction</h4>
          <p>
            At <strong>NextGen Capital Solutions</strong>, we are committed to protecting your privacy and safeguarding your personal and business information. This Privacy Policy explains how we collect, use, and protect your data when you apply for business loans or use our services.
          </p>

          <h4>Information We Collect</h4>
          <p>When applying for business funding, we may collect the following information:</p>
          <ul>
            <li>Personal details such as name, email address, and phone number</li>
            <li>Business information including company name, revenue, and industry</li>
            <li>Financial data such as bank statements and credit history</li>
            <li>Details related to your loan application</li>
          </ul>

          <h4>How We Use Your Information</h4>
          <p>Your information is used for the following purposes:</p>
          <ul>
            <li>To evaluate your eligibility for business loans</li>
            <li>To connect you with appropriate lenders and financial partners</li>
            <li>To process and manage your loan applications</li>
            <li>To improve our services and user experience</li>
            <li>To communicate updates, offers, and important notifications</li>
          </ul>

          <h4>Sharing of Information</h4>
          <p>
            We may share your information with trusted lenders, financial institutions, and partners strictly for the purpose of providing business loan services. We do not sell or rent your personal information to third parties.
          </p>

          <h4>Data Security</h4>
          <p>
            We implement industry-standard security measures to protect your sensitive business and financial data from unauthorized access, misuse, or disclosure.
          </p>

          <h4>Cookies & Tracking Technologies</h4>
          <p>
            Our website may use cookies and similar technologies to enhance your experience, analyze traffic, and improve our services. You can manage cookie preferences through your browser settings.
          </p>

          <h4>Your Rights</h4>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request corrections or updates to your information</li>
            <li>Request deletion of your data where applicable</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>

          <h4>Contact Us</h4>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p>
            📧 info@nextgencapitalsolution.com
          </p>

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;