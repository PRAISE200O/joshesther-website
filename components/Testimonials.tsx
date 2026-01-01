
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h3 className="text-gold font-sans tracking-[0.3em] uppercase text-sm font-bold mb-4">Social Proof</h3>
        <h2 className="text-4xl md:text-5xl font-serif text-charcoal">Guest Reflections</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((review) => (
          <div key={review.id} className="bg-white p-10 shadow-sm border-t-2 border-gold flex flex-col relative">
            <div className="text-gold mb-6 flex">
              {Array.from({ length: review.rating }).map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <p className="text-charcoal/80 text-lg font-serif italic mb-10 relative z-10">
              "{review.comment}"
            </p>
            
            <div className="mt-auto flex items-center">
              <div className="w-10 h-10 bg-beige-dark rounded-full flex items-center justify-center font-bold text-olive mr-4">
                {review.name.charAt(0)}
              </div>
              <div>
                <h5 className="font-bold text-sm tracking-wide text-charcoal uppercase">{review.name}</h5>
                <p className="text-[10px] text-charcoal/40 font-bold tracking-widest uppercase">{review.source}</p>
              </div>
            </div>
            
            <div className="absolute top-10 right-10 opacity-[0.05] pointer-events-none">
              <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H4.017V21H6.017Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
