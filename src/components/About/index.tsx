import React from 'react';
import { AboutHero } from './AboutHero';
import { StatsSection } from './StatsSection';
import { MissionVision } from './MissionVision';
import { TeamSection } from './TeamSection';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />
      <StatsSection />
      <MissionVision />
      <TeamSection />
    </div>
  );
}