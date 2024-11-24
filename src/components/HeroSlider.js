import React from 'react';
import Slider from 'react-slick'; // Make sure you have react-slick installed
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSlider.css';

const HeroSlider = () => {
  // Settings for the react-slick slider
  const settings = {
    dots: true,            // Enable dots
    infinite: true,        // Infinite loop
    speed: 500,            // Transition speed
    slidesToShow: 1,       // Show 1 slide at a time
    slidesToScroll: 1,     // Scroll 1 slide at a time
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 4000,   // Adjust timing of the slides
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        <div className="slide">
          <img src="image1.jpg" alt="Slide 1" />
        </div>
        <div className="slide">
          <img src="image2.jpg" alt="Slide 2" />
        </div>
        <div className="slide">
          <img src="image3.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
