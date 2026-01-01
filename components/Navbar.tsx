
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'About', href: '#about' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-olive text-white py-3 shadow-lg' : 'bg-transparent text-white py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex flex-col items-center">
          <span className="text-xl md:text-2xl font-serif font-bold tracking-widest uppercase">
            Joshesther Olive
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-80">Hotels & Suites</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide hover:text-gold transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#rooms"
            className="px-6 py-2 bg-gold text-charcoal text-sm font-bold rounded-sm hover:bg-gold-light transition-all duration-300 shadow-md"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-olive z-[60] lg:hidden transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-8 mt-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-serif font-medium text-white hover:text-gold"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#rooms"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-12 py-4 bg-gold text-charcoal font-bold rounded-sm text-lg"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
