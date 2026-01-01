
import React from 'react';

const ContactLocation: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <h3 className="text-gold font-sans tracking-[0.3em] uppercase text-sm font-bold mb-4">Get In Touch</h3>
          <h2 className="text-4xl font-serif text-charcoal mb-8">Reach Out to Us</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-10 h-10 border border-gold flex items-center justify-center text-gold mr-6 mt-1 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-2">Our Address</h4>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  11b Samuel Awoniyi Street, Off Salvation Road, <br />
                  Opebi, Ikeja 100001, Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 border border-gold flex items-center justify-center text-gold mr-6 mt-1 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-2">Contact Details</h4>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Phone: 0906 000 4674 <br />
                  Email: reservations@joshestherolivehotel.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 border border-gold flex items-center justify-center text-gold mr-6 mt-1 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-xs tracking-widest uppercase mb-2">Policy</h4>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  Check-in: 14:00 <br />
                  Check-out: 12:00
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-beige p-8 rounded-sm">
             <h4 className="font-serif text-xl mb-4">Location Highlights</h4>
             <ul className="space-y-3 text-sm text-charcoal/70">
                <li className="flex justify-between items-center pb-2 border-b border-charcoal/5">
                  <span>Murtala Muhammed Int'l Airport</span>
                  <span className="font-bold text-olive">15 Mins</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-charcoal/5">
                  <span>Ikeja City Mall</span>
                  <span className="font-bold text-olive">10 Mins</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Lagos State Secretariat</span>
                  <span className="font-bold text-olive">8 Mins</span>
                </li>
             </ul>
          </div>
        </div>

        <div className="lg:w-1/2 min-h-[400px]">
          <div className="w-full h-full bg-beige-dark rounded-sm overflow-hidden relative shadow-inner">
             {/* Map Placeholder */}
             <div 
               className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
               style={{
                 backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2070&auto=format&fit=crop")',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
               }}
             />
             <div className="absolute inset-0 bg-olive/10 pointer-events-none" />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="p-6 bg-white shadow-2xl rounded-sm border border-gold">
                   <p className="text-xs font-bold tracking-widest uppercase text-charcoal">Joshesther Olive Hotels</p>
                   <a 
                     href="https://maps.google.com" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="mt-2 text-gold text-[10px] font-bold tracking-widest uppercase inline-block border-b border-gold pointer-events-auto"
                   >
                     Get Directions
                   </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
