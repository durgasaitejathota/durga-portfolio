import React from 'react';
import styled from 'styled-components';
import ProjectItem from '../components/ProjectItem'; // Correct path to ProjectItem

const ProjectSectionStyle = styled.div`
  padding: 2rem 0;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #fff; // Adjust color as needed
  }

  h3 {
    font-size: 2rem;
    margin-top: 1rem;
    color: #fff; // Adjust color as needed
  }

  p {
    font-size: 1.2rem;
    color: #ccc; // Adjust color as needed
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 1rem 0;
    text-align: left;
    color: #eee; // Adjust color as needed

    li {
      margin: 0.5rem 0;
    }
  }
`;

export default function ProjectsSection() {
  return (
    <ProjectSectionStyle>

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
