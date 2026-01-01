
import React from 'react';

export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  source: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  // Fix: Added React import to provide the React namespace for ReactNode
  icon: React.ReactNode;
}
