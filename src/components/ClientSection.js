import React from "react";
import "./ClientSection.css"; // Add corresponding CSS

const ClientSection = () => {
  return (
    <section className="client-section">
      <div className="container">
        {/* Section Title */}
        <h2 className="section-title">What Our Clients Say?</h2>

        {/* Testimonial Block */}
        <div className="testimonial-block">
          <blockquote className="testimonial">
            <p>
              "SAM Web Studio has exceeded expectations. Their attention to
              detail and professionalism have made all the difference. I’m so
              glad to have chosen them for growing my business."
            </p>
            <cite>- Fredric</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
