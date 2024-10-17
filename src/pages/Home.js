import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection'; // Ensure this is correctly imported

export default function Home() {
  const history = useHistory(); // Initialize history for navigation

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

  const handleMoreAboutMe = () => {
    history.push('/about'); // Redirect to the About page
  };

  const handleProjectsRedirect = () => {
    history.push('/projects'); // Redirect to the Projects page
  };

  return (
    <div>
      <HeroSection />
      <div>
        <h2 style={{ fontSize: '2rem' }}>Let Me Introduce Myself</h2> {/* Increased font size */}
        <p>
          I'm Durga Sai Teja Thota, a Java Full Stack Developer with 3.7 years of experience in building scalable web applications and microservices.
          I specialize in Java, Spring Boot, React, and cloud technologies like AWS, with skills in Docker, Kubernetes, and database optimization.
          I have a strong background in microservices, CI/CD automation, and Agile collaboration, delivering high-quality software solutions across various projects.
        </p>
        <button style={buttonStyle} onClick={handleMoreAboutMe}>More About Me</button> {/* Styled button */}
      </div>
      <div>
        <ExperienceSection /> {/* Include the Experience Section */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2 style={{ fontSize: '2rem' }}>Some of My Recent Works</h2> {/* Changed title */}
          <button style={buttonStyle} onClick={handleProjectsRedirect}>Projects</button> {/* Redirects to Projects page */}
        </div>
      </div>
      <ContactBanner />
    </div>
  );
}
