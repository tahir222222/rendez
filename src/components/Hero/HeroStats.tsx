import React from 'react';
import { Users, UserCircle, Award } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  number: string;
  label: string;
}

export function HeroStats() {
  const stats: Stat[] = [
    { icon: <Users className="w-8 h-8 text-blue-600" />, number: "1000+", label: "Happy Patients" },
    { icon: <UserCircle className="w-8 h-8 text-blue-600" />, number: "100", label: "Expert Doctors" },
    { icon: <Award className="w-8 h-8 text-blue-600" />, number: "2", label: "Year Experience" }
  ];

  return (
    <div className="flex justify-center gap-16 bg-white rounded-lg shadow-lg py-8 px-12 -mt-12 relative z-10 mx-auto max-w-4xl">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="flex justify-center mb-2">{stat.icon}</div>
          <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}