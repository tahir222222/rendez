import React from 'react';

export function AboutHero() {
  return (
    <div className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Medical Center</h1>
          <p className="text-xl opacity-90">Providing quality healthcare services with a patient-first approach since 1998</p>
        </div>
      </div>
    </div>
  );
}