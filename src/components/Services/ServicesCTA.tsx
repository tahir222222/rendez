import React from 'react';

export function ServicesCTA() {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Medical Assistance?</h2>
        <p className="text-xl mb-8 opacity-90">Our team of medical professionals is here to help you 24/7</p>
        <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Book an Appointment
        </button>
      </div>
    </div>
  );
}