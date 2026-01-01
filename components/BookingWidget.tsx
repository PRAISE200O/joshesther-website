
import React, { useState } from 'react';

const BookingWidget: React.FC = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Checking availability for ${guests} guests from ${checkIn} to ${checkOut}...`);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="bg-white p-8 rounded-sm shadow-2xl border-t-4 border-gold">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          <div className="flex flex-col space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-charcoal/50 uppercase">Check In</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full border-b-2 border-beige-dark focus:border-gold outline-none py-2 px-1 text-sm bg-transparent transition-colors"
              required
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-charcoal/50 uppercase">Check Out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full border-b-2 border-beige-dark focus:border-gold outline-none py-2 px-1 text-sm bg-transparent transition-colors"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-charcoal/50 uppercase">Guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full border-b-2 border-beige-dark focus:border-gold outline-none py-2 px-1 text-sm bg-transparent transition-colors"
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Adult' : 'Adults'}</option>
              ))}
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-4 bg-olive text-white font-bold tracking-widest uppercase text-xs rounded-sm hover:bg-olive-dark transition-all shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Instant Search</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
        
        <div className="mt-6 flex flex-wrap items-center gap-4 text-[10px] md:text-xs font-medium text-charcoal/60">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gold mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Free Cancellation
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gold mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Complimentary Breakfast
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gold mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Best Price Guarantee
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
