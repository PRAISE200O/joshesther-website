
import React from 'react';

const Footer: React.FC = () => {
  const paymentMethods = [
    { name: 'mastercard', brandColor: '#FF5F00' },
    { name: 'visa', brandColor: '#1A1F71' },
    { name: 'paypal', brandColor: '#003087' },
    { name: 'americanexpress', brandColor: '#0070D1' },
    { name: 'applepay', brandColor: '#FFFFFF' },
    { name: 'googlepay', brandColor: '#4285F4' },
  ];

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <a href="#home" className="flex flex-col mb-6">
              <span className="text-2xl font-serif font-bold tracking-widest uppercase text-gold">
                Joshesther Olive
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-60">Hotels & Suites</span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-8 pr-10">
              A luxury boutique hotel in the heart of Ikeja, Lagos. Dedicated to providing world-class hospitality and refined comfort for the modern traveler.
            </p>
            <div className="flex space-x-4">
               {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                 <a key={social} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal hover:border-gold transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current mask-icon" style={{ WebkitMask: `url(https://simpleicons.org/icons/${social}.svg) no-repeat center`, mask: `url(https://simpleicons.org/icons/${social}.svg) no-repeat center` }} />
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#rooms" className="hover:text-gold transition-colors">Rooms & Suites</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#amenities" className="hover:text-gold transition-colors">Amenities</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-8">Reservations</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-gold transition-colors">Booking Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Cancelation Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Group Bookings</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Corporate Accounts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-8">Secure Payments</h4>
            <p className="text-white/40 text-sm mb-6">We accept all major secure payment providers.</p>
            <div className="grid grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <div 
                  key={method.name} 
                  className="w-12 h-10 border border-white/10 rounded-sm flex items-center justify-center transition-all duration-300 hover:border-gold/50 cursor-default bg-white/5 group overflow-hidden"
                  title={method.name.charAt(0).toUpperCase() + method.name.slice(1)}
                >
                  <div 
                    className="w-8 h-8 mask-icon transition-transform duration-300 group-hover:scale-110" 
                    style={{ 
                      backgroundColor: method.brandColor,
                      WebkitMask: `url(https://simpleicons.org/icons/${method.name}.svg) no-repeat center`, 
                      mask: `url(https://simpleicons.org/icons/${method.name}.svg) no-repeat center`,
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain'
                    }} 
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-8">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6">Subscribe to receive seasonal offers and luxury travel insights.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 py-3 px-4 outline-none focus:border-gold transition-colors text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gold hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase text-white/30 font-bold">
          <p>© {new Date().getFullYear()} Joshesther Olive Hotels. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
