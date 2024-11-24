import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    { image: 'portfolio1.jpg', title: 'Project 1' },
    { image: 'portfolio2.jpg', title: 'Project 2' },
    { image: 'portfolio3.jpg', title: 'Project 3' },
  ];

  return (
    <section className="portfolio">
      <h2>Some of Our Latest Works</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;