import React from 'react';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection'; // Ensure this is correctly imported
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  // Inline styles for buttons
  const buttonStyle = {
    backgroundColor: '#007BFF', // Adjust the color as needed
    color: '#FFFFFF',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '15px', // Adds space above the button
  };

  return (
    <div>
      <HeroSection />
      <div>
        <h2>Let Me Introduce Myself</h2>
        <p>
          I'm Durga Sai Teja Thota, a Java Full Stack Developer with 3.7 years of experience in building scalable web applications and microservices.
          I specialize in Java, Spring Boot, React, and cloud technologies like AWS, with skills in Docker, Kubernetes, and database optimization.
          I have a strong background in microservices, CI/CD automation, and Agile collaboration, delivering high-quality software solutions across various projects.
        </p>
        <button style={buttonStyle}>More About Me</button> {/* Add this button */}
      </div>
      <div>
        <ExperienceSection /> {/* Include the Experience Section */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2>See My Recent Works</h2>
          <button style={buttonStyle}>Projects</button> {/* Add Projects button */}
        </div>
        <ProjectsSection />
        <ContactBanner />
      </div>
    </div>
  );
}
