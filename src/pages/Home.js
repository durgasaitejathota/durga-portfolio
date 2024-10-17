import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';
import 'swiper/swiper-bundle.min.css';
import projects from '../assets/data/projects'; // Ensure this contains academic projects

// install Swiper modules
SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
`;

export default function ProjectsSection() {
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle subheading="Checkout My Work Experience" heading="My Academic Projects" />
        <div className="projects__allItems">
          <Swiper spaceBetween={30} slidesPerView={1} navigation>
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectItem
                  title={project.name}
                  img={project.image}
                  desc={project.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
