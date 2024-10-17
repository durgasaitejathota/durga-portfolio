import React from 'react';
import styled from 'styled-components';

const ExperienceStyle = styled.div`
  background-color: var(--deep-dark); /* Background color for highlighting */
  padding: 5rem 3rem; /* Add padding for better spacing */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5); /* Add a shadow for a 3D effect */
  text-align: left;
  margin: 4rem 0; /* Margin for spacing from other sections */

  h2 {
    font-size: 4rem; /* Larger font size for the heading */
    margin-bottom: 2rem; /* Spacing below the heading */
    color: var(--white); /* Color for the heading */
    text-transform: uppercase;
  }

  h3 {
    font-size: 2.5rem; /* Font size for project titles */
    margin-bottom: 1.5rem;
    color: var(--gray-1); /* Color for titles */
  }

  p {
    font-size: 2rem; /* Font size for project descriptions */
    margin-bottom: 1.5rem;
    color: var(--light-gray);
  }

  .environment {
    font-size: 1.8rem; /* Font size for environment details */
    font-style: italic;
    color: var(--light-gray);
  }

  ul {
    list-style-type: disc; /* Bullet points for list items */
    margin-left: 2rem;
  }

  li {
    margin-bottom: 1.5rem; /* Spacing between list items */
    color: var(--light-gray);
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
        <p className="environment"><strong>Technologies Used:</strong> Python, TensorFlow, Keras, OpenCV</p>
      </div>
      <div>
        <h3>Restaurant Management System</h3>
        <p>
          Implemented a comprehensive management solution using Java 8 and Spring Boot, including modules for menu management and order tracking.
        </p>
        <p className="environment"><strong>Technologies Used:</strong> Java, Spring Boot, PostgreSQL, Thymeleaf</p>
      </div>
      <div>
        <h3>Sales Data Analysis and Visualization for Sample Superstore</h3>
        <p>
          Utilized Power BI for cleaning and visualizing sales data, creating interactive dashboards to analyze product performance.
        </p>
        <p className="environment"><strong>Technologies Used:</strong> Power BI, SQL, Data Analysis</p>
      </div>
    </ExperienceStyle>
  );
}
