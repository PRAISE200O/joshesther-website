
import React from 'react';
import { AMENITIES } from '../constants';

const Amenities: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <h3 className="text-gold font-sans tracking-[0.3em] uppercase text-sm font-bold mb-4">Curated Comfort</h3>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            Amenities & <br /> <span className="italic">Experiences</span>
          </h2>
          <p className="text-white/70 font-light text-lg mb-8">
            Every aspect of Joshesther Olive Hotels is designed to elevate your stay. From high-speed connectivity to tranquil relaxation spaces.
          </p>
          <div className="p-8 border border-white/20 bg-white/5 rounded-sm">
             <h4 className="text-gold font-serif text-xl mb-4">Value Proposition</h4>
             <ul className="space-y-3">
               <li className="flex items-center text-sm">
                 <svg className="w-5 h-5 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 Free 24h Airport Shuttle
               </li>
               <li className="flex items-center text-sm">
                 <svg className="w-5 h-5 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 Complimentary Daily Newspaper
               </li>
               <li className="flex items-center text-sm">
                 <svg className="w-5 h-5 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                 Early Check-in (Subject to availability)
               </li>
             </ul>
          </div>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {AMENITIES.map((item) => (
            <div key={item.id} className="group p-8 border border-white/10 hover:border-gold/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-charcoal transition-all">
                {item.icon}
              </div>
              <h4 className="text-xl font-serif mb-3">{item.title}</h4>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
