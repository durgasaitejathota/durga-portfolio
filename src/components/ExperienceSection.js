import React from 'react';
import SectionTitle from './SectionTitle';

function ExperienceSection() {
  // Inline styles for experience section
  const sectionStyle = {
    padding: '0 30px', // Adds 30px padding on the left and right
  };

  const headingStyle = {
    fontSize: '2rem', // Adjust font size for headings
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '1.2rem', // Adjust font size for paragraphs
    marginBottom: '8px',
  };

  const listStyle = {
    marginLeft: '20px',
  };

  const listItemStyle = {
    fontSize: '1.1rem', // Adjust font size for list items
    marginBottom: '5px',
  };

  return (
    <div className="experience-section" style={sectionStyle}>
      <SectionTitle heading="Experience" subheading="My professional journey" />
      <div className="experience-item">
        <h3 style={headingStyle}>Sapot Systems Inc.</h3>
        <p style={paragraphStyle}>Java Full Stack Developer (July 2023 – Present)</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            Led the development of microservices for Load Configuration and Shift Scheduling, enhancing system scalability by 30%.
          </li>
          <li style={listItemStyle}>
            Integrated a chatbot for dynamic shift management, increasing scheduling accuracy by 25%.
          </li>
          <li style={listItemStyle}>
            Automated testing with JUnit and Mockito, achieving 95% code coverage.
          </li>
        </ul>
        <p style={paragraphStyle}>
          <strong>Environment:</strong> Java 8, Spring Boot, AWS (EC2, S3), Docker, Kubernetes.
        </p>
      </div>
      <div className="experience-item">
        <h3 style={headingStyle}>Tata Consultancy Services</h3>
        <p style={paragraphStyle}>Software Developer (May 2021 – July 2022)</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            Developed a content delivery optimization platform, boosting media retrieval speed by 40%.
          </li>
          <li style={listItemStyle}>
            Enhanced API security using Spring Security and OAuth2, ensuring safe data exchanges.
          </li>
          <li style={listItemStyle}>
            Automated cloud deployments on AWS ECS, achieving 99.9% system uptime.
          </li>
        </ul>
        <p style={paragraphStyle}>
          <strong>Environment:</strong> Java, Spring Boot, AWS (ECS), PostgreSQL.
        </p>
      </div>
      <div className="experience-item">
        <h3 style={headingStyle}>Zoron IT Solutions LLP</h3>
        <p style={paragraphStyle}>Java Full Stack Developer (July 2019 – May 2021)</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            Led the development of an Inventory and Order Management System, automating workflows and reducing manual intervention by 40%.
          </li>
          <li style={listItemStyle}>
            Optimized data storage using MongoDB, improving query response time by 25%.
          </li>
          <li style={listItemStyle}>
            Implemented JWT-based authentication for secure API access.
          </li>
        </ul>
        <p style={paragraphStyle}>
          <strong>Environment:</strong> Java, Spring Boot, MongoDB, Docker.
        </p>
      </div>
      {/* Add additional experiences here */}
      <div className="experience-item">
        <h3 style={headingStyle}>Dynamic Shift Management Chatbot</h3>
        <p style={paragraphStyle}>
          Integrated a chatbot for dynamic shift management, increasing scheduling accuracy.
        </p>
        <p style={paragraphStyle}>
          <strong>Environment:</strong> Java, Spring Boot, AWS Lambda, React.
        </p>
      </div>
      <div className="experience-item">
        <h3 style={headingStyle}>Content Delivery Optimization Platform</h3>
        <p style={paragraphStyle}>
          Developed a platform that boosted media retrieval speed significantly.
        </p>
        <p style={paragraphStyle}>
          <strong>Environment:</strong> Java, Spring Boot, AWS (ECS), PostgreSQL.
        </p>
      </div>
    </div>
  );
}

export default ExperienceSection;
