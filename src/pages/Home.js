import React from 'react';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection'; // Ensure this is correctly imported
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div>
        <h2>Let Me Introduce Myself</h2>
        <p>I'm Durga Sai Teja Thota, a Java Full Stack Developer with 3.7 years of experience in building scalable web applications and microservices.
          I specialize in Java, Spring Boot, React, and cloud technologies like AWS, with skills in Docker, Kubernetes, and database optimization.
          I have a strong background in microservices, CI/CD automation, and Agile collaboration, delivering high-quality software solutions across various projects.
        </p>
        <button>More About Me</button> {/* Add this button */}
      </div>
      <ExperienceSection /> {/* Include the Experience Section */}
      <ProjectsSection />
      <ContactBanner />
    </div>
  );
}

