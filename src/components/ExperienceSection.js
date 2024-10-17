import React from 'react';
import styled from 'styled-components';

const ExperienceStyle = styled.div`
  background-color: var(--deep-dark); /* Adds a background color */
  padding: 3rem; /* Adds padding for spacing */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* Subtle shadow for a 3D effect */
  text-align: left; /* Align text to the left for a different look */
  margin: 3rem 0; /* Margin for spacing from other sections */

  h2 {
    font-size: 3.5rem; /* Increase font size for the heading */
    margin-bottom: 2rem; /* Margin below the heading */
    color: var(--white); /* Make heading color different */
    text-transform: uppercase; /* Optional: make the text uppercase */
  }

  h3 {
    font-size: 2.2rem; /* Font size for experience titles */
    margin-bottom: 1rem;
    color: var(--gray-1); /* Lighter color for titles */
  }

  p {
    font-size: 1.8rem; /* Font size for experience descriptions */
    margin-bottom: 1rem;
    color: var(--light-gray); /* Lighter color for descriptions */
  }

  .environment {
    font-size: 1.6rem; /* Font size for environment details */
    font-style: italic; /* Italics to differentiate environment text */
    color: var(--light-gray);
  }

  ul {
    list-style-type: disc; /* Use bullet points for list items */
    margin-left: 2rem; /* Indent the list */
  }

  li {
    margin-bottom: 1rem; /* Spacing between list items */
    color: var(--light-gray); /* Lighter color for list items */
  }
`;

export default function ExperienceSection() {
  return (
    <ExperienceStyle>
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
          <li>Implemented JWT-based authentication for secure API access.</li>
        </ul>
        <p className="environment"><strong>Environment:</strong> Java, Spring Boot, MongoDB, Docker.</p>
      </div>
    </ExperienceStyle>
  );
}
