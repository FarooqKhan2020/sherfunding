import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicesDetailData } from './servicesData.js'; // we'll create this data file
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = servicesDetailData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="container text-center py-5">
        <h2>Service Not Found</h2>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/services')}>
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <section className="service-detail py-5">
      <div className="container">
        <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="row">
          <div className="col-lg-6">
            <img src={service.image} alt={service.title} className="img-fluid rounded shadow" />
          </div>
          <div className="col-lg-6">
            <span className="service-badge">{service.category}</span>
            <h1 className="service-title mt-2">{service.title}</h1>
            <p className="service-lead lead">{service.shortDescription}</p>
            <div className="service-description mt-4">
              <p>{service.fullDescription}</p>
              <h4>Key Features:</h4>
              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="mt-4">
                <button className="btn btn-primary btn-lg" onClick={() => navigate('/form')}>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;