import React from 'react';
import styled from 'styled-components';

const ExperienceStyle = styled.div`
  background-color: var(--deep-dark); /* Match the contact banner color */
  padding: 4rem; /* Increase padding for more spacing */
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: left;
  margin: 3rem 0;

  h2 {
    font-size: 4rem; /* Increased font size for the main heading */
    margin-bottom: 2.5rem; /* Increased margin below the heading */
    color: var(--white);
    text-transform: uppercase;
  }

  h3 {
    font-size: 2.5rem; /* Increased font size for project titles */
    margin-bottom: 1rem; /* Increased margin below project titles */
    color: var(--white);
  }

  p {
    font-size: 2rem; /* Increased font size for project descriptions */
    margin-bottom: 1rem; /* Margin for spacing */
    color: var(--gray-1);
  }

  .environment {
    font-size: 1.8rem; /* Increased font size for environment details */
    font-style: italic;
    color: var(--gray-1);
    margin-bottom: 1.5rem; /* Increased spacing */
  }

  ul {
    list-style-type: none; /* Remove bullet points */
    padding-left: 0;
  }

  li {
    margin-bottom: 0.5rem; /* Spacing between list items */
    font-size: 1.6rem; /* Increased font size for list items */
    color: var(--light-gray);
  }
`;

export default function ExperienceSection() {
  return (
    <ExperienceStyle>
      
      <div>
        <h3>Automatic Generation of Image Captions Using Deep Learning</h3>
        <p>
          Developed advanced image captioning algorithms using deep learning frameworks like CNNs and LSTMs, achieving a 35% improvement in caption accuracy.
        </p>
        <p className="environment"><strong>Technologies Used:</strong> CNN, LSTM, Python</p>
      </div>
      <div>
        <h3>Restaurant Management System</h3>
        <p>
          Implemented a comprehensive management solution using Java 8 and Spring Boot, including modules for menu management and order tracking.
        </p>
        <p className="environment"><strong>Technologies Used:</strong> Java 8, Spring Boot</p>
      </div>
      <div>
        <h3>Sales Data Analysis and Visualization for Sample Superstore</h3>
        <p>
          Utilized Power BI for cleaning and visualizing sales data, creating interactive dashboards to analyze product performance.
        </p>
        <p className="environment"><strong>Technologies Used:</strong> Power BI, Data Analysis</p>
      </div>
    </ExperienceStyle>
  );
}
