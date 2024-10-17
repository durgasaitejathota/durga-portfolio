import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import Button from '../components/Button';
import ExperienceSection from '../components/ExperienceSection'; // Keep this import if you need the component
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';

const HomeStyle = styled.div`
  padding: 0 5rem; /* Padding for the home page */
  text-align: center;

  .introduction {
    font-size: 3rem; /* Font size for introduction */
    margin-bottom: 2rem; /* Spacing below introduction */
    line-height: 1.5; /* Line height for readability */
  }

  .about {
    font-size: 2rem; /* Font size for about section */
    margin-top: 2rem; /* Spacing above about section */
  }

  .moreAboutMe {
    margin-top: 2rem; /* Spacing for button */
  }

  @media only screen and (max-width: 768px) {
    padding: 0 2rem; /* Less padding on smaller screens */
    .introduction {
      font-size: 2.5rem; /* Font size adjustment for smaller screens */
    }
    .about {
      font-size: 1.8rem; /* Font size adjustment for smaller screens */
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
        {/* Add a new section for work experience */}
        <h2>Some of My Recent Works to Checkout My Work Experiences</h2>
        <ProjectsSection /> {/* This will display the Projects with updated button */}
        <ContactBanner />
      </div>
    </HomeStyle>
  );
}
