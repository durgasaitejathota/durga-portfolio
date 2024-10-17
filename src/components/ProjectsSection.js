import React from 'react';
import styled from 'styled-components';
import ProjectItem from '../components/ProjectItem'; // Correct path to ProjectItem

const ProjectSectionStyle = styled.div`
  h2 {
    font-size: 3rem;  // Increased size of the section title
    margin-bottom: 1rem;
    color: white;  // Assuming you want this to match your theme
    text-align: center; // Center align title
  }

  h3 {
    font-size: 2.2rem;  // Increased size of the project titles
    margin-top: 1.5rem;
    color: #dcdcdc; // A lighter color for project titles
  }

  p {
    font-size: 1.5rem;  // Increased font size for project descriptions
    color: #f0f0f0; // Lighter color for description text
  }

  ul {
    list-style-type: none; // No bullets
    padding: 0; // Remove default padding
    color: #f0f0f0; // Lighter color for the list
  }

  li {
    margin: 0.5rem 0; // Spacing for list items
  }
`;

export default function ProjectsSection() {
  return (
    <ProjectSectionStyle>
      <h2>My Academic Projects</h2>
      <div>
        <h3>Automatic Generation of Image Captions Using Deep Learning</h3>
        <p>Developed advanced image captioning algorithms using deep learning frameworks like CNNs and LSTMs, achieving a 35% improvement in caption accuracy.</p>
        <p><strong>Technologies Used:</strong> CNN, LSTM, Python</p>
      </div>
      <div>
        <h3>Restaurant Management System</h3>
        <p>Implemented a comprehensive management solution using Java 8 and Spring Boot, including modules for menu management and order tracking.</p>
        <p><strong>Technologies Used:</strong> Java 8, Spring Boot</p>
      </div>
      <div>
        <h3>Sales Data Analysis and Visualization for Sample Superstore</h3>
        <p>Utilized Power BI for cleaning and visualizing sales data, creating interactive dashboards to analyze product performance.</p>
        <p><strong>Technologies Used:</strong> Power BI, Data Analysis</p>
      </div>
    </ProjectSectionStyle>
  );
}
