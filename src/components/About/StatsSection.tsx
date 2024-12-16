import React from 'react';
import { Users, Award, Heart, Clock } from 'lucide-react';

const stats = [
  { icon: <Users className="w-8 h-8" />, value: "50+", label: "Medical Specialists" },
  { icon: <Award className="w-8 h-8" />, value: "25+", label: "Years Experience" },
  { icon: <Heart className="w-8 h-8" />, value: "10k+", label: "Happy Patients" },
  { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Emergency Care" }
];

export function StatsSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-600 flex justify-center mb-4">{stat.icon}</div>
            <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}