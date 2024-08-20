import React from 'react';
import styled from 'styled-components';

const ContactSectionStyle = styled.div`
  display: flex;
  justify-content: center;  /* Centers the content horizontally */
  align-items: center;      /* Centers the content vertically */
  min-height: 100vh;        /* Takes up the full viewport height */
  text-align: center;       /* Centers the text inside the elements */

  .contact__wrapper {
    display: flex;
    flex-direction: column; /* Stack the items vertically */
    justify-content: center;
    align-items: center;
  }

  .contact__info {
    background-color: var(--deep-dark);
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
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
`;


