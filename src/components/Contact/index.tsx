import React from 'react';
import { ContactHero } from './ContactHero';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import { MapSection } from './MapSection';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <ContactInfo />
        <ContactForm />
      </div>
      <MapSection />
    </div>
  );
}