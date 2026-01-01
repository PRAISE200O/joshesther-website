
import React from 'react';
import { Room, Testimonial, Amenity } from './types';

export const ROOMS: Room[] = [
  {
    id: '1',
    name: 'Deluxe Executive Room',
    description: 'A spacious and elegantly appointed room with city views, featuring premium linens and modern finishes.',
    price: 70000,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
    amenities: ['King Size Bed', 'Smart TV', 'Workspace', 'Rain Shower']
  },
  {
    id: '2',
    name: 'Olive Signature Suite',
    description: 'Our flagship suite offering a separate living area, marble bathroom, and panoramic Ikeja skyline views.',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
    amenities: ['Private Lounge', 'Mini Bar', 'Bath Tub', 'Complimentary Wine']
  },
  {
    id: '3',
    name: 'Presidential Penthouse',
    description: 'The ultimate luxury experience with floor-to-ceiling windows, private dining room, and personalized butler service.',
    price: 250000,
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
    amenities: ['Butler Service', 'Kitchenette', 'Private Terrace', 'Premium Bar']
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'wifi',
    title: 'High-Speed Wi-Fi',
    description: 'Stay connected with fiber-optic internet across the entire premises.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9.5 9.5 0 0113.858 0M6.254 7.246a15 15 0 0111.492 0" /></svg>
  },
  {
    id: 'breakfast',
    title: 'Gourmet Breakfast',
    description: 'Enjoy a blend of local delicacies and continental favorites every morning.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  },
  {
    id: 'pool',
    title: 'Rooftop Pool',
    description: 'Relax and unwind at our temperature-controlled infinity pool.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
  },
  {
    id: 'parking',
    title: 'Secure Parking',
    description: 'Complimentary on-site valet parking with 24/7 security surveillance.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
  },
  {
    id: 'business',
    title: 'Business Hub',
    description: 'Professional meeting spaces equipped for conferences and presentations.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  },
  {
    id: 'service',
    title: '24/7 Concierge',
    description: 'Dedicated team available at any hour to fulfill your every request.',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Abisoye Thompson',
    rating: 5,
    comment: "The quiet luxury here is unmatched in Ikeja. Every detail from the linens to the service was impeccable.",
    source: 'Verified Guest'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    rating: 4,
    comment: "Exceptional business-friendly environment. The high-speed internet made my remote meetings seamless.",
    source: 'TripAdvisor'
  },
  {
    id: 't3',
    name: 'Ngozi Okafor',
    rating: 5,
    comment: "A hidden gem. The Olive Signature Suite is beautiful and the staff makes you feel like royalty.",
    source: 'Google Reviews'
  }
];
