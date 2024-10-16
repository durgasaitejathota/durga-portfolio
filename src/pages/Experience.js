import React from 'react';
import ExperienceSection from '../components/ExperienceSection';
import SectionTitle from '../components/SectionTitle';

function Experience() {
  return (
    <div className="experience-page">
      <SectionTitle heading="Work Experience" subheading="My professional journey" />
      <ExperienceSection />
    </div>
  );
}

export default Experience;
