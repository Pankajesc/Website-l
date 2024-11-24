import React, { useEffect } from 'react';
import Slider from 'react-slick'; // Make sure you have react-slick installed
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSlider.css';

const HeroSlider = () => {
  useEffect(() => {
    // Initialize slick on component mount
    $(document).ready(function () {
      $('.hero-slider').slick({
        dots: true, // Enable dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000, // Adjust timing of the slides
      });
    });
  }, []);

  return (
    <div className="hero-slider">
      <div className="slide">
        <img src="image1.jpg" alt="Slide 1" />
      </div>
      <div className="slide">
        <img src="image2.jpg" alt="Slide 2" />
      </div>
      <div className="slide">
        <img src="image3.jpg" alt="Slide 3" />
      </div>
    </div>
  );
};

export default HeroSlider;
