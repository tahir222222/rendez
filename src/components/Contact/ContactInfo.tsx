import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: ["contact@medical.com", "support@medical.com"]
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    details: ["123 Medical Center Dr", "City, State 12345"]
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    details: ["Mon-Fri: 8:00 AM - 8:00 PM", "Sat-Sun: 9:00 AM - 5:00 PM"]
  }
];

export function ContactInfo() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {contactInfo.map((info, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-600 mb-4">{info.icon}</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
          {info.details.map((detail, idx) => (
            <p key={idx} className="text-gray-600">{detail}</p>
          ))}
        </div>
      ))}
    </div>
  );
}