import React from 'react';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection'; // Ensure this is correctly imported
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ExperienceSection /> {/* Include the Experience Section */}
      <ProjectsSection />
      <ContactBanner />
    </div>
  );
}
