import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import HeroSection from '../components/HeroSection'; 
import ExperienceSection from '../components/ExperienceSection'; 
import ContactBanner from '../components/ContactBanner'; 

const HomeStyle = styled.div`
  padding: 0 5rem; 
  text-align: center;

  .introduction {
    font-size: 3rem; 
    margin: 2rem 0; 
    line-height: 1.5;
  }

  .about {
    font-size: 2rem; 
    margin-top: 1rem;
  }

  .recentWorks {
    font-size: 3.5rem; 
    font-weight: bold;
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
    .recentWorks {
      font-size: 3rem;
    }
  }
`;

export default function Home() {
  return (
    <HomeStyle>
      <HeroSection /> 
      <h1 className="introduction">Let Me Introduce Myself</h1>
      <p className="about">
        I'm Durga Sai Teja Thota, a Java Full Stack Developer with 3.7 years of experience in building scalable web applications and microservices...
      </p>
      <h2 className="recentWorks">Some of My Recent Works</h2>
      <Button btnText="Projects" btnLink="/projects" /> 
      <ExperienceSection /> 
      <ContactBanner /> 
    </HomeStyle>
  );
}
