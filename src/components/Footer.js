import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import Button from './Button'; // Make sure Button is imported correctly

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  text-align: center; /* Center align the content */

  .container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center the content vertically */
    gap: 2rem;
  }

  .footer__col1 {
    max-width: 600px; /* Restrict the width for better visual balance */
  }

  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .copyright {
    background-color: var(--dark-bg);
    text-align: center;
    padding: 1rem 0;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .container {
      padding: 0 2rem; /* Add padding for smaller screens */
    }

    .footer__col1 .para {
      max-width: 100%;
    }
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Durga Sai Teja Thota</h1>
          <PText>
            Driven by a commitment to excellence, I am dedicated to pushing the boundaries of what's possible in Full Stack Development. With expertise in Java, Spring Boot, React, AWS, and modern DevOps practices, I focus on building robust, scalable web applications that provide exceptional user experiences.
            My passion for innovation and user-centric design empowers me to deliver solutions that not only meet but exceed expectations, making a significant impact across various domains.
          </PText>
          <Button btnText="Back To Home" btnLink="/" /> {/* Updated link to "/" */}
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2024 - Durga Sai Teja Thota</PText>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;

