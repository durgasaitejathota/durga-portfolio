import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Durga Sai Teja Thota</span>
              </p>
              <h2 className="about__heading">A Java Full Stack Developer</h2>
              <div className="about__info">
                <PText>
                  A skilled Java Full Stack Developer with 3.7 years of experience specializing in building and deploying scalable web applications and microservices. My expertise spans across Java, Spring Boot, and React for developing robust back-end systems and responsive front-end applications.
                  <br /> <br />
                  My technical skills extend to containerization using Docker, orchestration with Kubernetes, and deploying applications on cloud platforms like AWS (EC2, S3, ECS, and Lambda). I am proficient in optimizing database performance with PostgreSQL and MongoDB and have automated CI/CD pipelines using Jenkins.
                  <br /> <br />
                  I have contributed to various projects, including enhancing system scalability, implementing chatbot solutions for dynamic management, and optimizing data synchronization.
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem title="Bachelor's" items={['Sathyabama University']} />
              <AboutInfoItem title="Master's" items={['University Of Central Missouri']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>
              <AboutInfoItem title="Front-End Technologies" items={['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Bootstrap']} />
              <AboutInfoItem title="Back-End Technologies" items={['Java', 'Spring Boot', 'Node.js', 'Express']} />
              <AboutInfoItem title="Database Technologies" items={['PostgreSQL', 'MongoDB']} />
              <AboutInfoItem title="Cloud & DevOps" items={['AWS', 'Docker', 'Kubernetes']} />
              <AboutInfoItem title="Testing Frameworks" items={['JUnit', 'Mockito', 'Selenium']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experience</h1>
              <AboutInfoItem title="Jul 2023 - Present" items={['Java Full Stack Developer at Sapot Systems Inc']} />
              <AboutInfoItem title="May 2021 - Jul 2022" items={['Software Developer at Tata Consultancy Services']} />
              <AboutInfoItem title="Jul 2019 - May 2021" items={['Java Full Stack Developer at Zoron Solutions LLC']} />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
