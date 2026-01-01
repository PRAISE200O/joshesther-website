
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Parallax effect */}
      <div 
        className="absolute inset-0 z-0 scale-110"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-fade-in">
        <h2 className="text-gold font-sans tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-4">
          Experience Pure Elegance
        </h2>
        <h1 className="text-4xl md:text-7xl font-serif mb-6 leading-tight">
          Refined Comfort in the <br />
          <span className="italic">Heart of Ikeja</span>
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-90">
          A premium 4-star experience designed for comfort, class, and calm. 
          Discover the perfect sanctuary for business and leisure.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#rooms"
            className="w-full sm:w-auto px-10 py-4 bg-gold text-charcoal font-bold rounded-sm hover:bg-gold-light transition-all duration-300 shadow-xl"
          >
            CHECK AVAILABILITY
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium rounded-sm hover:bg-white/20 transition-all duration-300"
          >
            BOOK DIRECT & SAVE
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
