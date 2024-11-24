import React from 'react';
import './Header.css'; // Link to CSS file for styling

const Header = () => {
  return (
    <div>
      {/* Top Bar - All elements in a single line */}
      <div className="top-bar">
        <div className="top-bar-left">
          {/* Logo */}
          <div className="logo">SAM Web Studio</div>
        </div>
        <div className="top-bar-center">
          {/* About Us and We Are Hiring in one line near the phone number */}
          <div className="about-us-hiring">
            <a href="#about" className="top-bar-link">About Us</a>
            <a href="#careers" className="top-bar-link">We Are Hiring</a>
          </div>
        </div>
        <div className="top-bar-right">
          {/* Phone number with icon and Social Media Icons */}
          <div className="phone-number-and-icons">
            {/* Phone number */}
            <span className="phone-number">
              <i className="fas fa-phone-alt"></i> +91 98765 43210
            </span>

            {/* Social Media Icons */}
            <div className="social-media-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Section (Below Header with links) */}
      <div className="navbar">
        <nav className="navbar-links">
          <ul className="navbar-list">
            <li>Home </li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Case Studies</li>
            <li>Testimonials</li>
            <li>Blog</li>
            <li>Packages</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
