import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <footer className="contact-section">
      <div className="container">
        <div className="row">
          {/* Quick Links */}
          <div className="col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#testimonial">Testimonial</a></li>
              <li><a href="#sitemap">Sitemap</a></li>
            </ul>
          </div>

          {/* What We Do */}
          <div className="col">
            <h3 className="footer-title">What We Do</h3>
            <ul className="footer-list">
              <li>Website Design</li>
              <li>Website Development</li>
              <li>Ecommerce Solution</li>
              <li>Social Application Development</li>
              <li>Digital Marketing</li>
              <li>Mobile Application Development</li>
              <li>Software Development</li>
              <li>Multimedia Solutions</li>
              <li>Web Hosting Services</li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="col">
            <h3 className="footer-title">Get In Touch</h3>
            <div className="footer-contact">
              <p><strong>Corporate Office:</strong></p>
              <p>Plot No-2, Block-b-1, Sewak Park, New Delhi - 110059, IN</p>
              <p>Mobile: +91 9968 353 570</p>
              <p>Email: contact@samwebstudio.com</p>
              <p>H No-100 1St Floor BLK- WZ Village Shadipur, New Delhi West Delhi DL 110008 IN</p>
              <p><strong>Branch Office:</strong></p>
              <p>Plot no-68, Block 8, Second Floor, South Patel Nagar, New Delhi, Delhi 110008, IN</p>
            </div>
          </div>

          {/* Local Presence */}
          <div className="col">
            <h3 className="footer-title">Our Local Presence</h3>
            <ul className="footer-list">
              <li>Web Design Company in Delhi</li>
              <li>Website Designing Company Noida</li>
              <li>Website Designing Company Gurugram</li>
              <li>Website Designing Company Bangalore</li>
              <li>Website Designing Company Pune</li>
              <li>SEO Company in Noida</li>
              <li>SEO Company in Gurugram</li>
              <li>SEO Company in Bangalore</li>
              <li>SEO Company in Pune</li>
            </ul>
          </div>
        </div>

        {/* Footer Badges */}
        <div className="footer-badges">
          <img src="debitcards.png" alt="Debit Cards" />
          <img src="dmca.png" alt="DMCA Protection" />
          <img src="clutch.png" alt="Clutch" />
          <img src="goodfirms.png" alt="GoodFirms" />
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
