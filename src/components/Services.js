import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { icon: 'service1.png', title: 'Website Design', description: 'High-quality designs tailored for your needs.' },
    { icon: 'service2.png', title: 'Web Development', description: 'Robust and scalable development solutions.' },
    { icon: 'service3.png', title: 'E-Commerce Solutions', description: 'End-to-end e-commerce platform setup.' },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;