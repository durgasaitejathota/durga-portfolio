import React, { useState } from 'react';
import styled from 'styled-components';

const ExperienceStyle = styled.div`
  background-color: var(--deep-dark);
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: left;
  margin: 3rem 0;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    color: var(--white);
    text-transform: uppercase;
  }

  h3 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    color: var(--gray-1);
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: var(--light-gray);
  }

  .environment {
    font-size: 1.6rem;
    font-style: italic;
    color: var(--light-gray);
  }

  .know-more-button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--gray-1);
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 1.6rem;
  }

  .additional-content {
    margin-top: 1rem;
    font-size: 1.6rem;
    color: var(--light-gray);
  }
`;

const ExperienceItem = ({ title, period, points, environment }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{period}</p>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <p className="environment"><strong>Environment:</strong> {environment}</p>
      <button className="know-more-button" onClick={toggleExpand}>
        {isExpanded ? 'See Less' : 'Know More'}
      </button>
      {isExpanded && (
        <div className="additional-content">
          <p>Here are some additional details about this experience:</p>
          {/* Add additional content here */}
          <ul>
            <li>Detail 1 for {title}</li>
            <li>Detail 2 for {title}</li>
            <li>Detail 3 for {title}</li>
            <li>Detail 4 for {title}</li>
            <li>Detail 5 for {title}</li>
            <li>Detail 6 for {title}</li>
            <li>Detail 7 for {title}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default function ExperienceSection() {
  return (
    <ExperienceStyle>
      <h2>My Work Experience</h2>
      <ExperienceItem
        title="Sapot Systems Inc."
        period="Java Full Stack Developer (July 2023 – Present)"
        points={[
          "Led the development of microservices for Load Configuration and Shift Scheduling, enhancing system scalability by 30%.",
          "Integrated a chatbot for dynamic shift management, increasing scheduling accuracy by 25%.",
          "Automated testing with JUnit and Mockito, achieving 95% code coverage."
        ]}
        environment="Java 8, Spring Boot, AWS (EC2, S3), Docker, Kubernetes"
      />
      <ExperienceItem
        title="Tata Consultancy Services"
        period="Software Developer (May 2021 – July 2022)"
        points={[
          "Developed a content delivery optimization platform, boosting media retrieval speed by 40%.",
          "Enhanced API security using Spring Security and OAuth2, ensuring safe data exchanges.",
          "Automated cloud deployments on AWS ECS, achieving 99.9% system uptime."
        ]}
        environment="Java, Spring Boot, AWS (ECS), PostgreSQL"
      />
      <ExperienceItem
        title="Zoron IT Solutions LLP"
        period="Java Full Stack Developer (July 2019 – May 2021)"
        points={[
          "Led the development of an Inventory and Order Management System, automating workflows and reducing manual intervention by 40%.",
          "Optimized data storage using MongoDB, improving query response time by 25%.",
          "Implemented JWT-based authentication for secure API access."
        ]}
        environment="Java, Spring Boot, MongoDB, Docker"
      />
    </ExperienceStyle>
  );
}
