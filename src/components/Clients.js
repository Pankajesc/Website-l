import React from 'react';
import './Clients.css';

const Clients = () => {
  const clientLogos = [
    'client1.png', 'client2.png', 'client3.png', 'client4.png', 'client5.png'
  ];

  return (
    <section className="clients">
      <h2>Our Clients</h2>
      <div className="client-logos">
        {clientLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Client ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default Clients;