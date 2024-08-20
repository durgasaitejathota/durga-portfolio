import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
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

  .contactSection__wrapper::after {
    display: none; /* Remove the vertical line */
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
            <ContactInfoItem text="Overland Park, Kansas" />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
