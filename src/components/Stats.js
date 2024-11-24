import React from 'react';
import './Stats.css';

const Stats = () => {
  const stats = [
    { number: '430+', label: 'Happy Clients' },
    { number: '535+', label: 'Projects Completed' },
    { number: '117,940+', label: 'Lines Coded' },
  ];

  return (
    <section className="stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <h3>{stat.number}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
