import React from 'react';
import { HeroStats } from './HeroStats';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-100 to-blue-400 min-h-[600px]">
      <div className="container mx-auto px-4 pt-20 pb-32">
        <div className="flex items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-6">
              Effortless Appointments
              <br />
              Expert Care
            </h1>
            <p className="text-xl mb-8">
              Book your doctor's appointment in just a few clicks
              and explore profiles of top healthcare professionals
              near you.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
              Book an Appointment
            </button>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Doctor"
              className="w-[500px] h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <HeroStats />
    </div>
  );
}