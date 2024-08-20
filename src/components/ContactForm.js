import React from 'react';
import styled from 'styled-components';

const ContactSectionStyle = styled.div`
  display: flex;
  justify-content: center;  /* Centers the content horizontally */
  align-items: center;      /* Centers the content vertically */
  min-height: 100vh;        /* Full height of the viewport */
  text-align: center;       /* Centers the text inside the elements */

  .contact__info {
    background-color: var(--deep-dark);
    padding: 2rem;
    border-radius: 12px;
    max-width: 400px;
    width: 100%;
  }

  .contact__info-item {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .contact__info-item img {
    width: 3rem;
    margin-right: 1.5rem;
  }

  .contact__info-text {
    font-size: 1.8rem;
    color: var(--gray-1);
  }

  .vertical-line {
    display: none;  /* Ensure the vertical line is completely hidden */
  }
`;

export default function Contact() {
  return (
    <ContactSectionStyle>
      <div className="contact__info">
        <div className="contact__info-item">
          <img src="phone-icon.png" alt="phone icon" />
          <div className="contact__info-text">+1 8167451318</div>
        </div>
        <div className="contact__info-item">
          <img src="email-icon.png" alt="email icon" />
          <div className="contact__info-text">durgasaitejathota@gmail.com</div>
        </div>
        <div className="contact__info-item">
          <img src="location-icon.png" alt="location icon" />
          <div className="contact__info-text">Overland Park, Kansas</div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
