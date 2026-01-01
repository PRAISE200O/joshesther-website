
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingWidget from './components/BookingWidget';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Testimonials from './components/Testimonials';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import AiConcierge from './components/AiConcierge';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar isScrolled={scrolled} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <div className="relative z-20 -mt-16 md:-mt-20">
           <BookingWidget />
        </div>

        <section id="about" className="py-20 bg-beige">
          <About />
        </section>

        <section id="rooms" className="py-20 bg-white">
          <Rooms />
        </section>

        <section id="amenities" className="py-20 bg-olive text-white">
          <Amenities />
        </section>

        <section id="reviews" className="py-20 bg-beige">
          <Testimonials />
        </section>

        <section id="contact" className="py-20 bg-white">
          <ContactLocation />
        </section>
      </main>

      <Footer />
      <AiConcierge />
    </div>
  );
};

export default App;
