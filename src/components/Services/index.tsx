import React from 'react';
import { ServicesHero } from './ServicesHero';
import { ServiceCard } from './ServiceCard';
import { ServicesCTA } from './ServicesCTA';
import { servicesData } from './servicesData';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServicesHero />
      
      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ServiceCard
                key={index}
                icon={<IconComponent className="w-12 h-12" />}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            );
          })}
        </div>
      </div>

      <ServicesCTA />
    </div>
  );
}