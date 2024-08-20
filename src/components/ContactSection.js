import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import LinkedIn and GitHub icons
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centering the content horizontally */

  .contactSection__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin-top: 7rem;
  }

  .left {
    width: 100%;
    max-width: 500px;
    text-align: center; /* Center the text inside the contact info */
  }

  .socialLinks {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
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
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+1 8167451318" />
            <ContactInfoItem icon={<MdEmail />} text="durgasaitejathota@gmail.com" />
            <ContactInfoItem icon={<MdLocationOn />} text="Overland Park, Kansas" />
            
            {/* Social Links Section */}
            <div className="socialLinks">
              <a
                className="socialLink"
                href="https://www.linkedin.com/in/durga-sai-teja" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                className="socialLink"
                href="https://github.com/durgasaitejathota" // 
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
