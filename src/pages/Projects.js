import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import projects from '../assets/data/projects'; // Ensure this path is correct

const ProjectStyle = styled.div`
  padding: 10rem 0;

  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
`;

export default function Projects() {
  return (
    <ProjectStyle>
      <div className="container">
        <SectionTitle heading="Projects" subheading="My Academic Projects" />
        <div className="projects__allItems">
          {projects.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.description}
              img={item.image}
            />
          ))}
        </div>
      </div>
    </ProjectStyle>
  );
}
