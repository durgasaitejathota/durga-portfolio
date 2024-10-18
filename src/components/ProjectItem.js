import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectItemStyles = styled.div`
  // ...existing styles

  .projectItem__details {
    margin-top: 1rem;
    font-size: 1.4rem; // Adjust as needed
    color: #f0f0f0; // Lighter color for additional info
  }
  
  .toggle-button {
    margin-top: 1rem;
    cursor: pointer;
    color: #007bff; // Change color as needed
  }
`;

export default function ProjectItem({
  img,
  title,
  desc,
  moreInfo, // New prop for additional info
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <div className="toggle-button" onClick={toggleDetails}>
          {isExpanded ? 'See Less' : 'Know More'}
        </div>
        {isExpanded && (
          <div className="projectItem__details">
            {moreInfo} {/* Render the additional info here */}
          </div>
        )}
      </div>
    </ProjectItemStyles>
  );
}
