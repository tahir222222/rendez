import React from 'react';
import { Hero } from './Hero/Hero';
import { DoctorsSection } from './Doctors/DoctorsSection';
import { BlogSection } from './Blog/BlogSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <DoctorsSection />
      <BlogSection />
    </div>
  );
}