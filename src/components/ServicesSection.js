import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Full Stack Developer"
            desc="I am capable of developing end-to-end web applications, proficient in both front-end and back-end technologies, as a full stack developer."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Salesforce"
            desc="Proficient in revolutionizing business processes through cloud-based CRM solutions, such as Salesforce."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="QA Engineer"
            desc="I can ensure the quality and integrity of Salesforce implementations through comprehensive QA testing."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
