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
    font-size: 2.2rem; /* Font size for project titles */
    margin-bottom: 1rem;
    color: var(--gray-1); /* Lighter color for titles */
  }

  p {
    font-size: 1.8rem; /* Font size for project descriptions */
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
      <h2>My Academic Projects</h2>
      <div>
        <h3>Automatic Generation of Image Captions Using Deep Learning</h3>
        <p>
          Developed advanced image captioning algorithms using deep learning frameworks like CNNs and LSTMs, achieving a 35% improvement in caption accuracy.
        </p>
        <ul>
          <li>Implemented models using CNN and LSTM architectures for better accuracy.</li>
          <li>Improved caption generation by integrating pre-trained models.</li>
        </ul>
        <p className="environment"><strong>Environment:</strong> Python, TensorFlow, Keras, OpenCV</p>
      </div>
      <div>
        <h3>Restaurant Management System</h3>
        <p>
          Implemented a comprehensive management solution using Java 8 and Spring Boot, including modules for menu management and order tracking.
        </p>
        <ul>
          <li>Developed backend services using Spring Boot for seamless data handling.</li>
          <li>Designed a user-friendly interface with Thymeleaf for restaurant operations.</li>
        </ul>
        <p className="environment"><strong>Environment:</strong> Java 8, Spring Boot, PostgreSQL, Thymeleaf</p>
      </div>
      <div>
        <h3>Sales Data Analysis and Visualization for Sample Superstore</h3>
        <p>
          Utilized Power BI for cleaning and visualizing sales data, creating interactive dashboards to analyze product performance.
        </p>
        <ul>
          <li>Performed data cleaning and transformation for accurate visualization.</li>
          <li>Created interactive dashboards to monitor sales trends and product performance.</li>
        </ul>
        <p className="environment"><strong>Environment:</strong> Power BI, SQL, Data Analysis</p>
      </div>
    </ExperienceStyle>
  );
}
