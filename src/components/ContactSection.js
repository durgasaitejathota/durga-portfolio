import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import LinkedIn and GitHub icons

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
  }
  .text-block {
    max-width: 500px;
    font-size: 1.8rem;
    color: var(--gray-1);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .socialLinks {
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
  }
  .socialLink {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
    color: var(--gray-1);
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: var(--white);
    }
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
      align-items: center;
    }
    .text-block,
    .left {
      max-width: 100%;
      text-align: center;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <div className="contactSection__wrapper">
          <div className="text-block">
            <h2>Durga Sai Teja Thota</h2>
            <p>
              Driven by a commitment to excellence, I am dedicated to pushing the boundaries of what's possible in Full Stack Development, Salesforce, Power BI, and QA Engineering. With a focus on innovation and user-centric design, I am poised to make a significant impact, delivering solutions that not only meet but exceed expectations across various domains.
            </p>
          </div>
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+1 8167451318" />
            <ContactInfoItem icon={<MdEmail />} text="durgasaitejathota@gmail.com" />
            <ContactInfoItem icon={<MdLocationOn />} text="Overland Park, Kansas" />
            <div className="socialLinks">
              <a
                className="socialLink"
                href="https://www.linkedin.com/in/durgasaitejathota"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                className="socialLink"
                href="https://github.com/durgasaitejathota"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
