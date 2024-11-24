import React from "react";
import "./Testimonial.css"; // Add corresponding CSS

const Testimonial = () => {
  return (
    <div className="Testimonial">
      {/* Best Web Designing Section */}
      <section className="Testimonial">
        <div className="container">
          <h2 className="section-title">
            Best Web Designing And Development Company In Delhi
          </h2>
          <p className="section-content">
            Searching for a good web designing, web development company in India
            suitable for your business? Well, your search ends here. SAM Web
            Studio offers the best website designing and development service in
            Delhi, India. We render services for all types of industries ranging
            from small businesses, medium to large-scale businesses, and
            manufacturing and e-commerce companies.
          </p>
          <p className="section-content">
            As a leading digital marketing company in India, we have been serving
            globally for over a decade and have made many businesses grow from
            zero to worldwide. The services provided by us are highly
            professional and efficient, along with innovative designs and
            technologies. Apart from website designing and development, we also
            provide digital marketing services such as Paid Ads, Social Media
            SEO, etc.
          </p>
          <a href="#read-more" className="read-more-btn">
            Read More...
          </a>
        </div>
      </section>

      {/* Drive Your Online Business Section */}
      <section className="call-to-action-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Drive your online business to success.
            </h2>
            <p className="cta-subtitle">
              Call now to know all about our brilliant offerings.
            </p>
            <a href="#get-in-touch" className="cta-button">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
