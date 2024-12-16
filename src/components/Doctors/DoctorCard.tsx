import React from 'react';
import { Facebook, Twitter, Linkedin, Star } from 'lucide-react';

interface DoctorProps {
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  image: string;
}

export function DoctorCard({ name, specialty, rating, reviews, image }: DoctorProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <img 
        src={image} 
        alt={name}
        className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-blue-600 mb-2">{specialty}</p>
      <div className="flex items-center justify-center mb-4">
        <Star className="w-5 h-5 text-yellow-400 fill-current" />
        <span className="ml-1">{rating} ({reviews} Reviews)</span>
      </div>
      <div className="flex justify-center space-x-4">
        <Facebook className="w-5 h-5 text-blue-600 cursor-pointer" />
        <Twitter className="w-5 h-5 text-blue-400 cursor-pointer" />
        <Linkedin className="w-5 h-5 text-blue-700 cursor-pointer" />
      </div>
    </div>
  );
}