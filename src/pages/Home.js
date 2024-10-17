import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import Button from '../components/Button';
import ProjectsSection from '../components/ProjectsSection'; 
import ProjectItem from '../components/ProjectItem'; // Corrected import path
import ContactBanner from '../components/ContactBanner';

const HomeStyle = styled.div`
  padding: 0 5rem;
  text-align: center;

  .introduction {
    font-size: 3rem;
    margin-bottom: 2rem;
    line-height: 1.5;
  }

  .about {
    font-size: 2rem;
    margin-top: 2rem;
  }

  .projectsSection {
    margin-top: 4rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 2rem;
    .introduction {
      font-size: 2.5rem;
    }
    .about {
      font-size: 1.8rem;
    }
  }
`;

export default function Home() {
  return (
    <HomeStyle>
      <div className="container">
        <HeroSection />
        <div className="introduction">
          <h1>Let Me Introduce Myself</h1>
          <p className="about">
            I'm Durga Sai Teja Thota, a Java Full Stack Developer with 3.7 years of experience in building scalable web applications and microservices. I specialize in Java, Spring Boot, React, and cloud technologies like AWS, with skills in Docker, Kubernetes, and database optimization. I have a strong background in microservices, CI/CD automation, and Agile collaboration, delivering high-quality software solutions across various projects.
          </p>
          <div className="moreAboutMe">
            <Button btnText="More About Me" btnLink="/about" />
          </div>
        </div>
        <div className="experienceSection">

          <experienceSection />
    <h2>Checkout My Work Experience</h2>
          <Button btnText="Work Experience" btnLink="/projects" />
        </div>
        <ContactBanner />
      </div>
    </HomeStyle>
  );
}
