import React from 'react';

export function MissionVision() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To provide exceptional healthcare services that improve the quality of life for our patients through 
            innovative medical practices, compassionate care, and a commitment to excellence.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To be the leading healthcare provider in the region, recognized for our outstanding patient care, 
            medical expertise, and continuous advancement in healthcare technology and practices.
          </p>
        </div>
      </div>
    </div>
  );
}