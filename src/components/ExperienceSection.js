import React from 'react';
import SectionTitle from './SectionTitle';

function ExperienceSection() {
  return (
    <div className="experience-section">
      <SectionTitle heading="Experience" subheading="My professional journey" />
      <div className="experience-item">
        <h3>Sapot Systems Inc.</h3>
        <p>Java Full Stack Developer (July 2023 – Present)</p>
        <ul>
          <li>Led the development of microservices for Load Configuration and Shift Scheduling, enhancing system scalability by 30%.</li>
          <li>Integrated a chatbot for dynamic shift management, increasing scheduling accuracy by 25%.</li>
          <li>Automated testing with JUnit and Mockito, achieving 95% code coverage.</li>
        </ul>
        <p><strong>Environment:</strong> Java 8, Spring Boot, AWS (EC2, S3), Docker, Kubernetes.</p>
      </div>
      <div className="experience-item">
        <h3>Tata Consultancy Services</h3>
        <p>Software Developer (May 2021 – July 2022)</p>
        <ul>
          <li>Developed a content delivery optimization platform, boosting media retrieval speed by 40%.</li>
          <li>Enhanced API security using Spring Security and OAuth2, ensuring safe data exchanges.</li>
          <li>Automated cloud deployments on AWS ECS, achieving 99.9% system uptime.</li>
        </ul>
        <p><strong>Environment:</strong> Java, Spring Boot, AWS (ECS), PostgreSQL.</p>
      </div>
      <div className="experience-item">
        <h3>Zoron IT Solutions LLP</h3>
        <p>Java Full Stack Developer (July 2019 – May 2021)</p>
        <ul>
          <li>Led the development of an Inventory and Order Management System, automating workflows and reducing manual intervention by 40%.</li>
          <li>Optimized data storage using MongoDB, improving query response time by 25%.</li>
          <li>Implemented JWT-based authentication for secure API access.</li>
        </ul>
        <p><strong>Environment:</strong> Java, Spring Boot, MongoDB, Docker.</p>
      </div>
      {/* Add additional experiences here */}
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

export default ExperienceSection;
