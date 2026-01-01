
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
              alt="Hotel Interior" 
              className="w-full h-[500px] object-cover shadow-2xl rounded-sm"
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-olive hidden md:flex flex-col items-center justify-center p-8 text-white rounded-sm shadow-xl">
               <span className="text-4xl font-serif font-bold text-gold">4.3</span>
               <div className="flex text-gold my-2">
                 {[1, 2, 3, 4].map(i => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                 <svg className="w-5 h-5 fill-current opacity-50" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
               </div>
               <span className="text-[10px] tracking-widest uppercase font-bold text-center">Average rating from 290+ reviews</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 space-y-8">
          <header>
            <h3 className="text-gold font-sans tracking-[0.3em] uppercase text-sm font-bold mb-4">Our Heritage</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal leading-tight">
              Modern African Hospitality, <br />
              <span className="italic text-olive">Defined.</span>
            </h2>
          </header>
          
          <p className="text-charcoal/80 text-lg leading-relaxed font-light">
            Located in the prestigious Opebi area of Ikeja, Joshesther Olive Hotels offers a sanctuary for the discerning traveler. We bridge the gap between traditional African warmth and international 4-star standards.
          </p>
          
          <p className="text-charcoal/80 text-lg leading-relaxed font-light">
            Whether you are in Lagos for a high-stakes business meeting or a relaxing weekend getaway, our meticulously designed suites and personalized service ensure your stay is as productive as it is peaceful.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-4">
             <div>
                <h4 className="text-2xl font-serif text-olive">24/7</h4>
                <p className="text-xs uppercase tracking-widest text-charcoal/50 font-bold">Premium Service</p>
             </div>
             <div>
                <h4 className="text-2xl font-serif text-olive">Prime</h4>
                <p className="text-xs uppercase tracking-widest text-charcoal/50 font-bold">Ikeja Location</p>
             </div>
          </div>

          <button className="flex items-center group text-charcoal font-bold tracking-widest uppercase text-xs">
            <span className="border-b-2 border-gold pb-1 group-hover:border-olive transition-colors">Learn more about us</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
