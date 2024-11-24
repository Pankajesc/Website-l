import React from 'react';
import Header from './components/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeroSlider from './components/HeroSlider';
import Clients from './components/Clients';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import ClientSection from './components/ClientSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header /> {/* Adding Header Section */}
      <HeroSlider />
      <Clients />
      <Stats />
      <Services />
      <Portfolio />
      <Testimonial />
      <ClientSection />
      <ContactSection />
      <Footer />


    </div>
  );
}

export default App;
