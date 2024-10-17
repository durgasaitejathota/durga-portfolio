import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import Button from '../components/Button';
import ProjectsSection from '../components/ProjectsSection'; // To display academic projects
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

  .projectsSection {
    margin-top: 4rem; /* Spacing before the projects section */
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
        {/* Projects section should now display academic projects */}
        <div className="projectsSection">
          <h2>Checkout My Work Experience</h2>
          <ProjectsSection /> {/* Ensure this section is now showing academic projects */}
          <Button btnText="Work Experience" btnLink="/work-experience" />
        </div>
        <ContactBanner />
      </div>
    </HomeStyle>
  );
}
