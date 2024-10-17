import React from 'react';
import ExperienceSection from '../components/ExperienceSection';
import SectionTitle from '../components/SectionTitle';

function Experience() {
  return (
    <div className="experience-page">
      <SectionTitle heading="Academic Projects" subheading="My academic work" />
      <ExperienceSection />
    </div>
  );
}

export default Experience;
