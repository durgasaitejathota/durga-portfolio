import React from 'react';
import styled from 'styled-components';

const ProjectStyle = styled.div`
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

  ul {
    list-style-type: disc;
    margin-left: 2rem;
  }

  li {
    margin-bottom: 1rem;
    color: var(--light-gray);
  }
`;

export default function ProjectsSection() {
  return (
    <ProjectStyle>
      <h2>My Work Experience</h2>
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
          <li>Implemented JWT-based 
