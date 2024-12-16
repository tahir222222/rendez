import React from 'react';
import { Calendar } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Calendar className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Gestion Rendez-vous</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-200 transition-colors">Dashboard</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Appointments</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Patients</a>
          </nav>
        </div>
      </div>
    </header>
  );
}