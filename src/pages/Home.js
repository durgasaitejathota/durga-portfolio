import React from 'react';
import styled from 'styled-components';

const HomeStyle = styled.div`
  padding: 0 5rem;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin: 2rem 0;
  }
`;

export default function Home() {
  return (
    <HomeStyle>
      <h1>Hello, this is a test!</h1>
      <p>If you see this, the Home component is working correctly.</p>
    </HomeStyle>
  );
}
