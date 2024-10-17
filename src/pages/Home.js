import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import ExperienceSection from '../components/ExperienceSection'; // Ensure this is correct
import HeroSection from '../components/HeroSection'; // Ensure the HeroSection is imported
import ContactBanner from '../components/ContactBanner'; // Import the ContactBanner

const HomeStyle = styled.div`
  padding: 0 5rem; /* Adds padding on the left and right */
  text-align: center;

  .introduction {
    font-size: 3rem; /* Increased font size for "Let Me Introduce Myself" */
    margin: 2rem 0;
    line-height: 1.5;
  }

  .about {
    font-size: 2rem; /* Make the paragraph text larger */
    margin-top: 1rem;
  }

  .experience {
    font-size: 3rem; /* Match font size with introduction */
    margin: 2rem 0; /* Consistent spacing */
    line-height: 1.5;
  }

  .recentWorks {
    font-size: 3.5rem; /* Make "Some of My Recent Works" larger */
    font-weight: bold;
    margin-top: 4rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 2rem; /* Less padding on smaller screens */
    .introduction {
      font-size: 2.5rem;
    }
    .about {
      font-size: 1.8rem;
    }
    .experience {
      font-size: 2.5rem; /* Adjust for smaller screens */
    }
    .recentWorks {
      font-size: 3rem;
    }
  }
`;

export default function Home() {
  return (
    <HomeStyle>
      <HeroSection /> {/* Hero Section at the top */}
      <div className="container">
        <h1 className="introduction">Let Me Introduce Myself</h1>
        <p className="about">
          I'm Durga Sai Teja Thota, a Java Full Stack Developer with 3.7 years of experience in building scalable web applications and microservices. 
          I specialize in Java, Spring Boot, React, and cloud technologies like AWS, with skills in Docker, Kubernetes, and database optimization. 
          I have a strong background in microservices, CI/CD automation, and Agile collaboration, delivering high-quality software solutions across various projects.
        </p>

        <h2 className="experience">Experience</h2> {/* Added Experience heading */}
        <ExperienceSection /> {/* Experience Section displayed here */}

        <h2 className="recentWorks">Some of My Recent Works</h2>
        <Button btnText="Projects" btnLink="/projects" /> {/* Button linking to projects */}

        <ContactBanner /> {/* Contact Banner at the bottom */}
      </div>
    </HomeStyle>
  );
}
