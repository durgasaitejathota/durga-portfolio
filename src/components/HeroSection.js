import React from 'react';
import styled from 'styled-components';

const HeroSectionStyle = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0; /* Ensure no extra margin */
  padding: 0;

  .heroHeading {
    font-size: 4rem;
    color: var(--white);
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    .heroHeading {
      font-size: 2.5rem;
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroSectionStyle>
      <h1 className="heroHeading">
        Hello, This is <br /> Durga Sai Teja Thota
      </h1>
    </HeroSectionStyle>
  );
}
