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
              <h2 className="about__heading">A full stack developer</h2>
              <div className="about__info">
                <PText>
               <p>
  I'm Durga Sai Teja Thota, a Java Full Stack Developer with 3.7 years of experience in building scalable web applications and microservices. I specialize in Java, Spring Boot, React, and cloud technologies like AWS, with skills in Docker, Kubernetes, and database optimization. I have a strong background in microservices, CI/CD automation, and Agile collaboration, delivering high-quality software solutions across various projects.
</p>

                  <br /> <br />
                  With a solid foundation in Full Stack Development, I am ready to 
                  contribute effectively to projects, delivering high-quality results and driving success.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="Bachelor's"
                items={['Sathyabama University']}
              />
              <AboutInfoItem
                title="Master's"
                items={['University Of Central Missouri']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
          title="Front-End Technologies"
          items={['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Bootstrap']}
        />
        <AboutInfoItem
          title="Back-End Technologies"
          items={['Java', 'Spring Boot', 'Node.js', 'Express']}
        />
        <AboutInfoItem
          title="Database Technologies"
          items={['PostgreSQL', 'MongoDB']}
        />
        <AboutInfoItem
          title="Cloud & DevOps"
          items={['AWS', 'Docker', 'Kubernetes']}
        />
        <AboutInfoItem
          title="Testing Frameworks"
          items={['JUnit', 'Mockito', 'Selenium']}
        />
            
              
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experience</h1>

              <AboutInfoItem
                title="Jul 2023 - Present"
                items={['Java Full Stack Developer at Sapot Systems Inc']}
                  <AboutInfoItem
                title="May 2021 - Jul 2022"
                items={['Software Developer at Tata Consultancy Services']}
                  <AboutInfoItem
                title="Jul 2019 - May 2021"
                items={['Java Full Stack Developer at Zoron Solutions LLC']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
