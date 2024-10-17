import React from 'react';
import styled from 'styled-components';

const HeroSectionStyle = styled.div`
  height: 100vh; /* Takes up the full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/path-to-your-image.jpg'); /* Replace with the correct image path */
  background-size: cover; /* Ensures the image covers the entire section */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  margin: 0; /* Removes any margin */
  padding: 0; /* Ensures no padding is added */

  .hero-heading {
    font-size: 5rem;
    font-weight: bold;
    margin: 0; /* Removes margin from the heading */
    color: white; /* Ensures the text is visible on the image */
  }

  .hero-subheading {
    font-size: 2rem;
    margin-top: 1rem;
    color: white; /* Text color */
  }

  @media only screen and (max-width: 768px) {
    .hero-heading {
      font-size: 3.5rem;
    }
    .hero-subheading {
      font-size: 1.5rem;
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroSectionStyle>
      <div>
        <h1 className="hero-heading">Durga Sai Teja Thota</h1>
        <p className="hero-subheading">Java Full Stack Developer</p>
      </div>
    </HeroSectionStyle>
  );
}
