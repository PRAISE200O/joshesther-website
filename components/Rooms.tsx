
import React from 'react';
import { ROOMS } from '../constants';

const Rooms: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h3 className="text-gold font-sans tracking-[0.3em] uppercase text-sm font-bold mb-4">Luxury Selection</h3>
        <h2 className="text-4xl md:text-5xl font-serif text-charcoal">Rooms & Suites</h2>
        <div className="w-20 h-1 bg-gold mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ROOMS.map((room) => (
          <div key={room.id} className="group bg-white flex flex-col h-full shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="relative h-72 overflow-hidden">
              <img 
                src={room.image} 
                alt={room.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white px-4 py-2 text-xs font-bold tracking-widest uppercase shadow-md">
                From ₦{room.price.toLocaleString()}
              </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-serif mb-3 group-hover:text-olive transition-colors">{room.name}</h3>
              <p className="text-charcoal/60 text-sm font-light mb-6 line-clamp-2">
                {room.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {room.amenities.map((amenity, idx) => (
                  <span key={idx} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-beige-dark text-olive">
                    {amenity}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-beige-dark flex items-center justify-between">
                <button className="text-xs font-bold tracking-widest uppercase border-b-2 border-gold pb-1 hover:border-olive transition-colors">
                  View Details
                </button>
                <button className="px-6 py-2 bg-olive text-white text-[10px] font-bold tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="px-12 py-4 border-2 border-olive text-olive font-bold tracking-widest uppercase text-xs hover:bg-olive hover:text-white transition-all">
          Explore All Accommodations
        </button>
      </div>
    </div>
  );
};

export default Rooms;
