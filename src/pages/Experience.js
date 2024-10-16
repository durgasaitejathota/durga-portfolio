import React from 'react';
import ExperienceSection from '../components/ExperienceSection';
import SectionTitle from '../components/SectionTitle';

function Experience() {
  return (
    <div className="experience-page">
      <SectionTitle heading="Work Experience" subheading="My professional journey" />
      <ExperienceSection />
      <div className="experience-item">
        <h3>Microservices for Load Configuration</h3>
        <p>Developed microservices for load configuration, enhancing scalability and performance.</p>
        <p><strong>Environment:</strong> Java 8, Spring Boot, AWS (EC2, ECS), Docker, Kubernetes.</p>
      </div>
      <div className="experience-item">
        <h3>Dynamic Shift Management Chatbot</h3>
        <p>Integrated a chatbot for dynamic shift management, increasing scheduling accuracy.</p>
        <p><strong>Environment:</strong> Java, Spring Boot, AWS Lambda, React.</p>
      </div>
      <div className="experience-item">
        <h3>Content Delivery Optimization Platform</h3>
        <p>Developed a platform that boosted media retrieval speed significantly.</p>
        <p><strong>Environment:</strong> Java, Spring Boot, AWS (ECS), PostgreSQL.</p>
      </div>
    </div>
  );
}

export default Experience;
