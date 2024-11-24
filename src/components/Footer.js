import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Top - Left Aligned */}
        <div className="footer-top">
          <p>© 2024 SIMEQ Technologies LLP. All Rights Reserved.</p>
        </div>

        {/* Footer Bottom - Centered Review Text */}
        <div className="footer-bottom">
          <p>Rated 4.9/5 based on 272 reviews at Google+</p>
        </div>

        {/* Social Media Icons aligned to the right */}
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
