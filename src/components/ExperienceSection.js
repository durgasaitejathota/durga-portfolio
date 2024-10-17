import React from 'react';
import styled from 'styled-components';

const ExperienceStyle = styled.div`
  padding: 2rem; /* Padding for the experience section */
  text-align: center;

  h2 {
    font-size: 3rem; /* Font size for the My Work Experience heading */
    margin: 2rem 0; /* Margin for spacing above and below */
  }

  h3 {
    font-size: 2rem; /* Font size for experience titles */
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.8rem; /* Increased font size for experience descriptions */
    margin-bottom: 1rem;
  }

  .environment {
    font-size: 1.6rem; /* Font size for environment details */
    font-style: italic; /* Optional: to differentiate environment text */
  }
`;

export default function ExperienceSection() {
  return (
    <ExperienceStyle>
      <h2>My Work Experience</h2> {/* Updated heading */}
      <div>
        <h3>Sapot Systems Inc.</h3>
        <p>Java Full Stack Developer (July 2023 – Present)</p>
        <ul>
          <li>Led the development of microservices for Load Configuration and Shift Scheduling, enhancing system scalability by 30%.</li>
          <li>Integrated a chatbot for dynamic shift management, increasing scheduling accuracy by 25%.</li>
          <li>Automated testing with JUnit and Mockito, achieving 95% code coverage.</li>
        </ul>
        <p className="environment"><strong>Environment:</strong> Java 8, Spring Boot, AWS (EC2, S3), Docker, Kubernetes.</p>
      </div>
      <div>
        <h3>Tata Consultancy Services</h3>
        <p>Software Developer (May 2021 – July 2022)</p>
        <ul>
          <li>Developed a content delivery optimization platform, boosting media retrieval speed by 40%.</li>
          <li>Enhanced API security using Spring Security and OAuth2, ensuring safe data exchanges.</li>
          <li>Automated cloud deployments on AWS ECS, achieving 99.9% system uptime.</li>
        </ul>
        <p className="environment"><strong>Environment:</strong> Java, Spring Boot, AWS (ECS), PostgreSQL.</p>
      </div>
      <div>
        <h3>Zoron IT Solutions LLP</h3>
        <p>Java Full Stack Developer (July 2019 – May 2021)</p>
        <ul>
          <li>Led the development of an Inventory and Order Management System, automating workflows and reducing manual intervention by 40%.</li>
          <li>Optimized data storage using MongoDB, improving query response time by 25%.</li>
          <li>Implemented JWT-based authentication for secure API access.</li>
        </ul>
        <p className="environment"><strong>Environment:</strong> Java, Spring Boot, MongoDB, Docker.</p>
      </div>
    </ExperienceStyle>
  );
}
