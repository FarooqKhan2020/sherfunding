import React from "react";
import "./services.css";
import { Link } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaCalculator,
  FaCoins,
  FaTools,
  FaWallet,
  FaChartLine,
} from "react-icons/fa";

const servicesData = [
  {
    title: "Collateral Loans",
    text: "Secure the capital you need with Collateral Loans. Borrow as much or...",
    img: "/images/service1.webp",
    icon: FaMoneyBillWave,
  },
  {
    title: "SBA 7A loan",
    text: "Quickly assess your financing needs with our Business Funding Calculator. Borrow flexibly...",
    img: "/images/service2.webp",
    icon: FaCalculator,
  },
  {
    title: "Small Business Loans",
    text: "Discover ideal small business loan solutions. Startup, expansion, equipment financing - flexible...",
    img: "/images/service3.webp",
    icon: FaCoins,
  },
  {
    title: "Equipment Financing",
    text: "Get the tools your business needs with flexible equipment financing solutions...",
    img: "/images/service4.webp",
    icon: FaTools,
  },
  {
    title: "Working Capital",
    text: "Manage daily operations smoothly with our working capital loan options...",
    img: "/images/service5.webp",
    icon: FaWallet,
  },
  {
    title: "Merchant Cash Advance",
    text: "Fast access to funds based on your business revenue performance...",
    img: "/images/service6.webp",
    icon: FaChartLine,
  },
];

const Services = () => {
  return (
    <section className="services-section py-5">
      <div className="container text-center">

        {/* TAG */}
        <div className="services-tag mb-3">OUR SERVICES</div>

        {/* HEADING */}
        <h2 className="services-heading mb-3">
          Comprehensive Business Loan Services We Offer
        </h2>

        {/* TEXT */}
        <p className="services-text mb-5">
          SherFunding provides comprehensive financial consulting and guidance to help
          you navigate <strong>business loan</strong> options with confidence.
        </p>

        {/* CARDS */}
        <div className="row g-4">
          {servicesData.map((service, index) => {
            const Icon = service.icon; // ✅ FIXED

            return (
              <div className="col-lg-4 col-md-6" key={index}>
                 <Link to="/form" className="service-link">
                <div className="service-card">

                  {/* IMAGE */}
                  <div className="service-img">
                    <img src={service.img} alt={service.title} />
                  </div>

                  {/* ICON */}
                  <div className="service-icon">
                    <Icon />
                  </div>

                  {/* CONTENT */}
                  <div className="service-content">
                    <h5>{service.title}</h5>
                    <p>{service.text}</p>
                  </div>

                </div>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;